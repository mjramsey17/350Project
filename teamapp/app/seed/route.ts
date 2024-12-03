import { db } from '@vercel/postgres'
import { Players, Events, Positions } from '../lib/soccer-data'

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
    return insertedPlayers;
}

async function seedEvents() {
    await player.sql`
        CREATE TABLE IF NOT EXISTS Events (
            eventID INT PRIMARY KEY,
            gameID INT NOT NULL,
            time INT NOT NULL,
            type TEXT,
            team INT,
            playerId INT,
            FOREIGN KEY (playerID) REFERENCES Players(ID)
            );
    `;

    const insertedEvents = await Promise.all(
        Events.map((event) => player.sql`
            INSERT INTO Events (eventName, eventDate, playerID, eventType, eventDetails)
                VALUES (${event.EventId}, ${event.GameID}, ${event.Time}, ${event.Type}, ${event.Team},${event.PlayerId})
                ON CONFLICT (eventID) DO NOTHING;
        `)
    );
    return insertedEvents;
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
        await seedEvents(); 
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


