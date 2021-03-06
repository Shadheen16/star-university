import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NotFound from "./components/NotFound/NotFound";
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import { useState, useEffect, createContext } from 'react';
import Login from './components/Login/Login';
import Admission from './components/Admission/Admission';

export const CourseContext = createContext('course');

function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() =>
    fetch("./db.JSON")
      .then(res => res.json())
      .then(data => setCourses(data))
    , []);


  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <CourseContext.Provider value={courses}>
              <Route exact path="/">
                <Home
                ></Home>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>

              <Route path="/courses">
                <Courses
                ></Courses>
              </Route>
              <Route path="/admission">
                <Admission></Admission>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
            </CourseContext.Provider>
            <Route path="*">
                <NotFound></NotFound>
              </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;