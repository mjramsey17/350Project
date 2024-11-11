import { db } from '@vercel/postgres'
import { Players, Records, Positions } from '../lib/placeholder-data'

const player = await db.connect();

async function seedPlayers() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Players (
            ID INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            height VARCHAR(10),
            weight INTEGER,
            positionID INT,
            starter BOOLEAN,
            injured BOOLEAN,
            FOREIGN KEY (positionID) REFERENCES Positions(positionID)  -- Foreign Key to Positions
        );
    `;

    const insertedPlayers = await Promise.all(
        Players.map(async (individual) => {
            return player.sql`
                INSERT INTO Players (ID, name, height, weight, positionID, starter, injured)
                VALUES (${individual.ID}, ${individual.name}, ${individual.height}, ${individual.weight}, ${individual.positionID}, ${individual.starter}, ${individual.injured})
                ON CONFLICT (ID) DO NOTHING;  -- Conflict on Player ID
            `;
        }),
    );
}

async function seedRecords() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Records (
            ID SERIAL PRIMARY KEY,  -- Add an ID as the primary key
            positionID INT NOT NULL,  -- Foreign Key to Positions
            passPercentage DECIMAL,
            Appearances INT,
            Penalties INT,
            FOREIGN KEY (positionID) REFERENCES Positions(positionID)  -- Link Records to Positions
        );
    `;

    const insertedRecords = await Promise.all(
        Records.map((record) => player.sql`
            INSERT INTO Records (positionID, passPercentage, Appearances, Penalties)
            VALUES (${record.positionId}, ${record.passPercentage}, ${record.Appearances}, ${record.Penalties})
            ON CONFLICT (ID) DO NOTHING;  -- Conflict on positionID (this could be adjusted)
        `)
    );
    return insertedRecords;
}

async function seedPositions() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Positions (
            positionID INT PRIMARY KEY,
            playerPosition TEXT
        );
    `;

    const insertedPositions = await Promise.all(
        Positions.map((position) => player.sql`
            INSERT INTO Positions (positionID, playerPosition)
            VALUES (${position.positionID}, ${position.playerPosition})
            ON CONFLICT (positionID) DO NOTHING;  -- Conflict on positionID
        `)
    );
    return insertedPositions;
}

export async function GET() {
    try {
        await player.sql`BEGIN`;
        await seedPositions();
        await seedRecords(); 
        await seedPlayers(); 
          // Seed positions first
           // Seed records last
        await player.sql`COMMIT`;

        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
        console.error(error);  // Log the error details
        await player.sql`ROLLBACK`;
        return Response.json({ error: error.message }, { status: 500 });
    }
}
