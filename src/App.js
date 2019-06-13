import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Nav from './components/Nav'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Home from './components/Home'
import Footer from './components/Footer'
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';
import Contact from './components/Contact'





function App() {
  return (
    <Router>
      <nav>
        <div className='nav-wrapper white'>
            <Link className='brand-logo center black-text' to='/'>David Rada</Link>
          <ul className='nav-mobile right'>
            <li><Link to='/projects' className='black-text'>Projects</Link></li>
            <li><Link to='/Resume' className='black-text'>Resume</Link></li>
          </ul>
        </div>
      </nav>
      <Contact />
      <Route exact path='/' component={Home} />
      <Route path='/projects' component={Projects} />
      <Route path='/resume' component={Resume} />
      <Footer/>
    </Router>
  );
}

export default App;
