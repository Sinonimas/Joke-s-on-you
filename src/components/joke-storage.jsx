import React, { useEffect, useState } from "react"
import axios from 'axios';

export default function JokeStorage() {

    const [items, setItems] = useState([]);

    function fetchUserData() {
      
     axios.get("https://v2.jokeapi.dev/joke/Programming?amount=10")
    .then(res => {
        setItems(res.data.jokes);
      })
    }

      useEffect(() => {
        fetchUserData();
      }, [])

      console.log(items)

      return(
        <>
        <ul>
        {
        items.map(p => {
          return (p.type === "twopart" ?
          <li key={p.id}> <div> <span> Setup: </span> {p.setup} </div> <div> <span> Delivery: </span> {p.delivery} </div> </li> :
          <li key={p.id}> <span>Joke:</span> {p.joke} </li>
          );
        })
        }
        </ul>
        <button onClick={fetchUserData}>New Jokes</button>
        </>
      );
}