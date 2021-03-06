import "./App.css";
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import DetailedPost from "./Components/DetailedPost";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./Components/Profile";
import CreatePost from "./Components/CreatePost";
const App= ()=> {
  const dispatch= useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  return (
    <Router>
      <Switch>
      <Route path="/createPost">
          <Navbar />
          <CreatePost/>
        </Route>
        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/detailedPost">
          <Navbar />
          <DetailedPost />
        </Route>
        <Route path="/register">
          <Navbar />
          <Register />
        </Route>
        <Route path="/profile">
          <Navbar />
          <Profile />
        </Route>
        <Route path="/">
          <Navbar />
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
