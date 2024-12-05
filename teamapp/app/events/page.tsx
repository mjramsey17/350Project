/*'use client';

import Image from 'next/image'
import { useEffect, useState } from 'react';
import backgroundImage from 'C:/Users/micha/350react/350Project/teamapp/app/eventback2.jpg'
//import styles from ".app/styles/module.css"
import {createEvent} from '../lib/action'

export default function Form() {

  const [width1, setWidth] = useState(0);
  const [height1, setHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if component has mounted

  // Set the initial width after the component mounts on the client
  useEffect(() => {
    // Initial width based on the client-side window size
    const updateWidth = () => setWidth(window.innerWidth);
    const updateHeight = () => setHeight(window.innerHeight);
    setIsMounted(true); // Set isMounted to true after the first render

    updateWidth(); // Set initial value
    updateHeight();
    window.addEventListener('resize', updateWidth); // Update on window resize
    window.addEventListener('resize', updateHeight); // Update on window resize

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
      window.removeEventListener('resize', updateHeight);
    };
    }, []); // Empty dependency array ensures this runs only once
    if (!isMounted) return null;

    const containerStyle: React.CSSProperties =  {
      position: 'absolute',
      height:height1 <550? '75vh' : '500px', // Example media query for mobile screens
      width:height1<550 ? '45vw' : '400px', // Adjust width on smaller screens
      borderRadius: '10px',
      backgroundColor: '#f2f2f2',
      border: '2px solid',
      padding: '30px',
      boxShadow: '0 8px 8px rgba(1, 1, 1, 0.15)',
      display: 'grid',
      alignItems: 'center',
      fontSize: width1<650||height1 < 450 ? '12px': '16px',
      placeItems:'center'
    };
    const inputStyle: React.CSSProperties = {
      textAlign:"center",
      width: width1<550 || height1<450 ? '80%':'100%',
      height: width1<550 || height1<450 ? '80%':'100%',
      fontSize: width1<550||height1 < 450 ? '12px': '16px'
    }
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault(); // Prevent default form submission (page reload)
  
      const formData = new FormData(event.target as HTMLFormElement); // Get form data
  
      // Call createEvent with the form data
      await createEvent(formData);
    };
  return (
    <form onSubmit = {handleSubmit}>
    <body style = {{position: 'relative',width: width1, height: height1,justifyContent: "center", alignItems:"center", display:'flex'}}>
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill" // This makes the image cover the whole container
        objectFit="cover"
        objectPosition="center"
      />
    <div style = {containerStyle}>
      <div className = "grid place-items-center mb-4" style = {{textAlign:"center",justifyContent:"center",paddingInline:"40px"}}>
        <label htmlFor="GameID" >Enter a Game ID</label>
        <input 
          id= "GameID"
          name = "GameID"
          type = "number"
          placeholder = "i.e. 12345"
          className = "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          style = {inputStyle}
      />
      </div>
      <div className = "grid place-items-center mb-4" style = {{textAlign:"center",paddingInline:"40px"}}>
        <label htmlFor="time" >Enter a time for the event</label>
        <input 
          id= "time"
          name = "time"
          type = "number"
          placeholder = "0-90"
          className = "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          style = {inputStyle}
        />
      </div>
      <div className = "grid place-items-center mb-4" style = {{textAlign:"center",paddingInline:"30px",justifyContent:"center"}}>
        <label htmlFor="type" >What type of event</label>
        <input 
          id= "type"
          name = "type"
          type = "text"
          placeholder = "Goal, Assist, Yellow Card, Red Card"
          className = "rounded-md border w-full border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          style = {inputStyle}
        />
      </div>
      <div className = "grid place-items-center mb-4" style = {{textAlign:"center",paddingInline:"40px"}}>
        <label htmlFor="team" >Which team</label>
        <input 
          id= "team"
          name = "team"
          type = "binary"
          placeholder = "1 for Roanoke, 0 for Opponent"
          className = "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          style = {inputStyle}
        />
      </div>
      <div className = "grid place-items-center mb-4" style = {{textAlign:"center",paddingInline:"40px"}}>
        <label htmlFor="playerID" >Enter an ID</label>
        <input 
          id= "playerID"
          name = "playerID"
          type = "number"
          placeholder = "i.e. 12345"
          className = "peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          style = {inputStyle}
        />
      </div>
      <button
      type = "submit"
      style = {{         
          backgroundColor: '#800000', // Button background color
          color: 'white',          // Text color
          padding: '5px',    // Padding inside the button
          border: 'none',          // Remove default border
          borderRadius: '5px',     // Rounded corners
          cursor: 'pointer',      // Change cursor to pointer on hover
          fontSize: '14px',        // Text size
          fontWeight: 'bold',      // Make the text bold
          transition: 'background-color 0.3s', // Smooth background transition
          width: "30%"
          }}>Submit</button>
      </div>
    </body>
    </form>
  );
}*/
'use client';
import { Button } from '../ui/button'; // Importing the Button component
import { useState, useEffect } from 'react';
import Image from 'next/image';
import backgroundImage from 'C:/Users/micha/350react/350Project/teamapp/app/eventback2.jpg'; // Make sure to adjust the path
import { createEvent } from '../lib/action'; // Assuming this function sends the data

export default function Form() {
  const [width1, setWidth] = useState(0);
  const [height1, setHeight] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Track if component has mounted

  const [gameID, setGameID] = useState('');
  const [time, setTime] = useState('');
  const [eventType, setEventType] = useState('');
  const [team, setTeam] = useState('');
  const [playerID, setPlayerID] = useState('');
  //const [eventId, setEventId] = useState(101); // Starting Event ID

  // Set the initial width after the component mounts on the client
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth); 
      setHeight(window.innerHeight);
    }
    setIsMounted(true); // Set isMounted to true after the first render

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []); // Empty dependency array ensures this runs only once

  if (!isMounted) return null;

  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    height: height1 < 550 ? '75vh' : '500px',
    width: height1 < 550 ? '45vw' : '400px',
    borderRadius: '10px',
    backgroundColor: '#f2f2f2',
    border: '2px solid',
    padding: '30px',
    boxShadow: '0 8px 8px rgba(1, 1, 1, 0.15)',
    display: 'grid',
    alignItems: 'center',
    fontSize: width1 < 650 || height1 < 450 ? '12px' : '16px',
    placeItems: 'center',
  };

  const inputStyle: React.CSSProperties = {
    textAlign: 'center',
    width: width1 < 550 || height1 < 450 ? '80%' : '100%',
    height: width1 < 550 || height1 < 450 ? '80%' : '100%',
    fontSize: width1 < 550 || height1 < 450 ? '12px' : '16px',
  };

  // Handle form submission
  const handleClick= async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
  console.log("why");
    // Create a new FormData instance
    const formData = new FormData();
   // formData.append('eventId', eventId.toString());  // Convert number to string
    formData.append('gameID', gameID);
    formData.append('time', time);
    formData.append('eventType', eventType);
    formData.append('team', team);
    formData.append('playerID', playerID);
  
    await createEvent(formData);
  };
  

  return (

      <body
        style={{
          position: 'relative',
          width: width1,
          height: height1,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div style={containerStyle}>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="GameID">Enter a Game ID</label>
            <input
              id="GameID"
              name="GameID"
              type="number"
              value={gameID}
              onChange={(e) => setGameID(e.target.value)}
              placeholder="i.e. 12345"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="time">Enter a time for the event</label>
            <input
              id="time"
              name="time"
              type="number"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              placeholder="0-90"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '30px', justifyContent: 'center' }}>
            <label htmlFor="type">What type of event</label>
            <input
              id="type"
              name="type"
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              placeholder="Goal, Assist, Yellow Card, Red Card"
              className="rounded-md border w-full border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="team">Which team</label>
            <input
              id="team"
              name="team"
              type="binary"
              value={team}
              onChange={(e) => setTeam(e.target.value)}
              placeholder="1 for Roanoke, 0 for Opponent"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>
          <div className="grid place-items-center mb-4" style={{ textAlign: 'center', paddingInline: '40px' }}>
            <label htmlFor="playerID">Enter an ID</label>
            <input
              id="playerID"
              name="playerID"
              type="number"
              value={playerID}
              onChange={(e) => setPlayerID(e.target.value)}
              placeholder="i.e. 12345"
              className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              style={inputStyle}
            />
          </div>

          {/* Button */}
          <Button onClick = {handleClick}>
            Submit
          </Button>
        </div>
      </body>
  );
}

