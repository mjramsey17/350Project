// pages/api/goals.js
'use server'
import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Define the intervals
    const intervals = [
      { label: '0-10 Minutes', min: 0, max: 10 },
      { label: '10-20 Minutes', min: 10, max: 20 },
      { label: '20-30 Minutes', min: 20, max: 30 },
      { label: '30-40 Minutes', min: 30, max: 40 },
      { label: '40-45 Minutes', min: 40, max: 45 },
      { label: '45-50 Minutes', min: 45, max: 50 },
      { label: '50-60 Minutes', min: 50, max: 60 },
      { label: '60-70 Minutes', min: 60, max: 70 },
      { label: '70-80 Minutes', min: 70, max: 80 },
      { label: '80-90 Minutes', min: 80, max: 90 }
    ];

    const results_rc = [];
    const results_opps = [];

    // Fetch data for each interval
    for (const interval of intervals) {
      const rc_goals = await sql`
        SELECT COUNT(*) FROM Events 
        WHERE time >= ${interval.min} AND time < ${interval.max} 
        AND type LIKE 'Goal' AND playerid != -1
      `;
      const opps_goals = await sql`
        SELECT COUNT(*) FROM Events 
        WHERE time >= ${interval.min} AND time < ${interval.max} 
        AND type LIKE 'Goal' AND playerid = -1
      `;

      results_rc.push(rc_goals.rows[0].count);
      results_opps.push(opps_goals.rows[0].count);
    }

    const chartData = {
      labels: intervals.map(interval => interval.label),
      datasets: [
        {
          label: 'Roanoke Goals',
          data: results_rc,
          backgroundColor: 'red',
          borderWidth: 1
        },
        {
          label: 'Opponent Goals',
          data: results_opps,
          backgroundColor: 'blue',
          borderWidth: 1
        }
      ]
    };

    res.status(200).json(chartData);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
}
