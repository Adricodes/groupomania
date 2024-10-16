import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('')
  const createPost = e => {// Prevent the default submit and page reload
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
        getPosts();
      })
      .catch(error => {
        setErrorMessage('Oops, there is an error!')
      })
  }

  useEffect(() => {
    getPosts();
  }, []);



  const getPosts = () => {
    const token = (localStorage.getItem('token')) || false;

    axios.get("http://localhost:3000/api/posts", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        setPosts(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  //  TODO check sign up form on how to handle submit
  // TODO do this one first - iterate thru the post info and display a post article tag maybe inside title, etc
  // FIXME use react parameterized routes 
  const Post = ({ title, content, mediaUrl, id }) =>
    <article key={id} className="postCardContainer">
      <a href="./PostDetails.jsx">
        <div className="postCard">
          <h2 className="title">{title}</h2>
          <p className="post">{content}</p>
          {mediaUrl && (
            <img className="multimedia" alt={`media of ${title}`} src={mediaUrl} />
          )}
        </div>
      </a>
    </article>

  const Posts = () =>
    <section className="posts">
      {posts.map(Post)}
    </section>


  return (
    <>
      <form className="postForm" action="" onSubmit={createPost}>
        <div>
          <label htmlFor="title" className="titleLabel">Title:</label>
          <input
            className="titleWhiteLabel"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="contentLabel">Content:</label>
          <textarea
            className="contentWhiteLabel"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button className="submitButton" type="submit">Submit Post</button>
      </form>
      <Posts />
    </>
  )
}
  



export default Home
