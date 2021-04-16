import "./App.css";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
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
