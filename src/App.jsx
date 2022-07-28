import React, { useState, useEffect } from 'react';
import Preloader from '../src/components/Pre';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Team from './components/Team/Team';
import Thoughts from './components/Thoughts/Koan';
import Game from './components/Game/Game';
import Footer from './components/Footer';
import Info from './components/Info/Info';
// change to hashrouteer for fleek
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/thoughts" component={Thoughts} />
          <Route path="/team" component={Team} />
          <Route path="/game" component={Game} />
          <Route path="/info" component={Info} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
