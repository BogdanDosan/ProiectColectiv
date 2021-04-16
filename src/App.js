import "./App.css";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Login from "./Components/Login";
import Register from "./Components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/register">
          <Navbar />
          <Register />
        </Route>
        <Route path="/">
          <Navbar />
          <Post />
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
