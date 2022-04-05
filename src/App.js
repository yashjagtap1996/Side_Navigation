import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import About from './Component/About'
import Contact from './Component/Contact'
import Home from './Component/Home'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 Menu">
            <Navbar />
          </div>
          <div className="col-md-11">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
