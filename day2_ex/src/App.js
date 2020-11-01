import './App.css';
import { useState, useEffect } from "react"
import ListDemo from "./ListDemo"

function App() {

  const startval = parseInt(localStorage.getItem("count"))
  return (
    <div className="App">
      <h2>Ex1</h2>
      <Count start={startval} incDec={5} />
      <h2>Ex2</h2>
      <Joke />
      <h2>Ex3</h2>
      <ListDemo />
    </div>
  );
}

function Count(props) {
  const [count, setCount] = useState(props.start);
  const [incDec] = useState(props.incDec);

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={() => setCount(count + incDec)}>+{incDec}</button>
      <button onClick={() => setCount(count - incDec)}>-{incDec}</button>
    </div>
  );
}

function Joke(props) {
  const [chuckJoke, setChuckJoke] = useState("...");
  const [dadJoke, setDadJoke] = useState("...");

  useEffect(() => {
    const interval = setInterval(() => {
      getDadJoke()
    }, 11000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="App">
      <button onClick={getChuckJoke}>get joke</button>
      <p>{chuckJoke}</p>
      <p>{dadJoke}</p>
    </div>
  )

  function getChuckJoke() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setChuckJoke(data.value)
      });
  }

  function getDadJoke() {
    const url = 'https://icanhazdadjoke.com/';
    fetch(url, { headers: { 'Accept': 'application/json' } })
      .then(res => res.json())
      .then(data => {
        setDadJoke(data.joke)
      });
  }
}



export default App;
