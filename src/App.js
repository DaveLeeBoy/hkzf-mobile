import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CityList from './pages/CityList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Route path="/citylist" component={CityList}></Route>
      <Route path="/home" component={Home}></Route>
    </Router>
  );
}

export default App;
