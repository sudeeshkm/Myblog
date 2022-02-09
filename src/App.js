import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Articlepage from './pages/Articlepage';
import Articlelistpage from './pages/Articlelistpage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Component } from 'react';
import Header from './pages/Header';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import AddArticle from "./components/AddArticle"
import UpdateArticle from './components/UpdateArticle';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} exact></Route>
            <Route path="/updatearticle/:id" element={<UpdateArticle />} ></Route>
            <Route path="/articlelist" element={<Articlelistpage />} ></Route>
            <Route path="/articlelist/:id" element={<Articlepage />} ></Route>
            <Route path="/signup" element={<SignUp />} ></Route>
            <Route path="/signin" element={<SignIn />} ></Route>
            <Route path="/add" element={<AddArticle />} ></Route>
            <Route path="/about" element={<Aboutpage />} ></Route>
            
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
