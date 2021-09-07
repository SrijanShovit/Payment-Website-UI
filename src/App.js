import React from 'react'
import Home from './Home'
import About from './Pages/About'
import Contacts from './Pages/Contact'
import Service from './Pages/Service'
import Error from './Pages/Error'
import {Route,Switch} from 'react-router-dom'

const App = () => {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contacts} />
      <Route path="/services" component={Service} />
      <Route component={Error} />
    </Switch>
    
    </>
  )
}

export default App
