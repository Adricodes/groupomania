// import '../styles/Home.css';
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const handleSubmit = e => {// Prevent the default submit and page reload
    e.preventDefault()
    const userId = parseInt(localStorage.getItem('userId'));
    const token = localStorage.getItem('token');

    axios
      .post("http://localhost:3000/api/posts", { userId, title, content }, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(response => {
        console.log(response)
        // Handle response
        // navigate('/');
      })
      .catch(error => {
        setErrorMessage('Oops, there is an error!')
      })
  }

  useEffect(() => {
    getPosts();
  }, []);
  // Pass an empty array to only call the function once on mount.
  function MyComponent() {
    useEffect(() => {
      // Code here runs once, after the component mounts
      console.log('Component mounted');

      // Optional cleanup function (runs when the component unmounts)
      return () => {
        console.log('Component unmounted');
      };
    }, []); // Empty array ensures the effect runs only once on mount

    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }


  const getPosts = () => {
    const token = (localStorage.getItem('token')) || false;

    axios.get("http://localhost:3000/api/posts", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        // TODO set the posts to a post variable that is declared with useState react 
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
//  TODO check sign up form on how to handle submit
  // TODO iterate thru the post info and display a post article tag maybe inside title, etc
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>

      <button className="submitButton" type="submit">Submit Post</button>
    </form>
  )
}

  export default Home
