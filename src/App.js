import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
