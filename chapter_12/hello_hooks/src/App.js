// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // useState from the react library as we will be using it for hooks. 
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import useFetch from './useFetch'
import Users from './User'


const App = () => {
  const postUrl = "https://jsonplaceholder.typicode.com/posts"
  const todosUrl = "https://jsonplaceholder.typicode.com/todos"
  const [requested, setRequested] = useState(postUrl) // And setRequested is the setter method to update the value of this piece of state.
  const data = useFetch(requested)

  // If we implement useEffect without specifying the 2nd parameter i.e no []
  // It is then equivalent to componentDidUpdate., which runs every time the component gets new props, or a state change happens.
  // Thus, to mimic componentDidMount, we have to pass in an empty array as a second argument to useEffect where the request will be made only once.

  return (
    <div>
      <Users />
      <Button variant="link" onClick={() => setRequested(postUrl)}>
        Posts
      </Button>
      <Button variant='link' onClick={() => setRequested(todosUrl)}>Todos</Button>
      <br />
      Requested: {requested}
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
