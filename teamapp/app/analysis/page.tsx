/*'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { sql } from '@vercel/postgres';

export default function GoalsChartForm() {
  // State to store the game ID input by the user
  const [gameID, setGameID] = useState<number | ''>('');
  // State to store the data for the chart
  const [chartData, setChartData] = useState<any>(null);
  // State to manage the loading status of the chart fetching process
  const [loading, setLoading] = useState(true);

  // Function to fetch goals data for a given game ID from the database
  const fetchGoalsData = async (gameID: number) => {
    try {

      // Execute the SQL query to get goal data for the specified game ID
      const result = await sql`
        SELECT
          CASE
            WHEN time <= 10 THEN 'First 10 Minutes'
            WHEN time > 40 AND time <= 45 THEN 'Last 5 Minutes of First Half'
            WHEN time > 45 AND time <= 50 THEN 'First 5 Minutes of Second Half'
            WHEN time > 80 THEN 'Last 10 Minutes'
            ELSE 'Other'
          END AS interval,
          team,
          COUNT(*) AS goals
        FROM goals
        WHERE game_id = ${gameID}
        GROUP BY interval, team
        ORDER BY interval;
      `;

      // Format the data for the chart
      const formattedData = {
        labels: result.rows.map((row) => row.interval), // Set chart labels
        datasets: [
          {
            label: 'Team 1',
            backgroundColor: 'rgba(128, 0, 0, 0.5)', // Maroon color with transparency
            data: result.rows
              .filter((r) => r.team === 1)
              .map((r) => r.goals), // Filter Team 1's goals
          },
          {
            label: 'Opponent',
            backgroundColor: 'rgba(192, 192, 192, 0.5)', // Silver color with transparency
            data: result.rows
              .filter((r) => r.team === 0)
              .map((r) => r.goals), // Filter Opponent's goals
          },
        ],
      };

      return formattedData; // Return the formatted chart data
    } catch (err) {

      console.error(err); // Log any errors that occur while fetching data
      return {}; // Return an empty object if there's an error
    }
  };

  // Event handler for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!gameID) return; // If gameID is not provided, stop the function

    // Fetch new chart data based on the provided gameID
    const newChartData = await fetchGoalsData(Number(gameID));
    setChartData(newChartData); // Update the chartData state with the new data
    setLoading(false); // Set loading to false after fetching data
  };

  return (
    <div>
      {/* Form to input the game ID }
      <form onSubmit={handleSubmit}>
        <label htmlFor="GameID">Enter a Game ID</label>
        <input
          id="GameID"
          placeholder="Enter Game ID"
          type="number"
          value={gameID} // Bind the input value to the gameID state
          onChange={(e) =>
            setGameID(e.target.value === '' ? '' : parseInt(e.target.value))
          } // Update state on input change
        />
        <button type="submit">Submit</button> {/* Submit button }
      </form>

      {/* Conditionally render the chart and interval data }
      {!loading && chartData && (
        <div>
          {/* Render the Bar Chart }
          <Bar
            data={chartData} // Pass the formatted data to the chart component
            options={{
              responsive: true,
              plugins: {
                title: { text: 'Team Goals By Interval', display: true }, // Set chart title
              },
            }}
          />
          {/* Render interval data in plain text }
          <div>
            <h3>Interval Data</h3>
            {chartData.labels.map((interval: string, index: number) => (
              <div key={interval}>
                <strong>Interval: {interval}</strong>
                <p>Team 1 Goals: {chartData.datasets[0].data[index]}</p>{' '}
                {/* Display Team 1's goals }
                <p>Opponent Goals: {chartData.datasets[1].data[index]}</p>{' '}
                {/* Display Opponent's goals }
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
*/
'use client';

import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { sql } from '@vercel/postgres';
import dotenv from 'dotenv';
dotenv.config(); // This will load the variables from your .env file

export default function GoalsChartForm() {
  const [gameID, setGameID] = useState<number>(0);
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const{POSTGRES_URL} = process.env;
  
  const fetchGoalsData = async (gameID: number) => {
    try {
      const result = await sql`
        SELECT
          CASE
            WHEN time <= 10 THEN 'First 10 Minutes'
            WHEN time > 40 AND time <= 45 THEN 'Last 5 Minutes of First Half'
            WHEN time > 45 AND time <= 50 THEN 'First 5 Minutes of Second Half'
            WHEN time > 80 THEN 'Last 10 Minutes'
            ELSE 'Other'
          END AS interval,
          team,
          COUNT(*) AS goals
        FROM goals
        WHERE game_id = ${gameID}
        GROUP BY interval, team
        ORDER BY interval;
      `;

      // Handle case where no data is returned
      if (!result.rows || result.rows.length === 0) {
        console.error("No data returned from the database.");
        return null;
      }

      const formattedData = {
        labels: result.rows.map((row) => row.interval),
        datasets: [
          {
            label: 'Team 1',
            backgroundColor: 'rgba(128, 0, 0, 0.5)',
            data: result.rows
              .filter((r) => r.team === 1)
              .map((r) => r.goals),
          },
          {
            label: 'Opponent',
            backgroundColor: 'rgba(192, 192, 192, 0.5)',
            data: result.rows
              .filter((r) => r.team === 0)
              .map((r) => r.goals),
          },
        ],
      };

      return formattedData;
    } catch (err) {
      console.error(err);
      return null; // Return null if there is an error
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!gameID || isNaN(gameID)) {
      console.error("Invalid Game ID");
      return;
    }

    setLoading(true);
    const newChartData = await fetchGoalsData(Number(gameID));
    if (newChartData) {
      setChartData(newChartData);
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="GameID">Enter a Game ID</label>
        <input
          id="GameID"
          placeholder="Enter Game ID"
          type="number"
          value={gameID}
          onChange={(e) =>
            setGameID(e.target.value === '' ? '' : parseInt(e.target.value))
          }
        />
        <button type="submit">Submit</button>
      </form>

      {!loading && chartData ? (
        <div>
          <Bar
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: { text: 'Team Goals By Interval', display: true },
              },
            }}
          />
          <div>
            <h3>Interval Data</h3>
            {chartData.labels.map((interval: string, index: number) => (
              <div key={interval}>
                <strong>Interval: {interval}</strong>
                <p>Team 1 Goals: {chartData.datasets[0].data[index]}</p>
                <p>Opponent Goals: {chartData.datasets[1].data[index]}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No data available or still loading...</p>
      )}
    </div>
  );
}
