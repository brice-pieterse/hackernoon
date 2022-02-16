import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Loading from './components/Loading'
import Nav from './components/Nav'

import Top from './components/Top'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

class App extends React.Component {
    state = {

    }
    render(){
        return (
          <Router>
            <div className="bg">
              <Nav />
              <div className="container">
                <React.Suspense fallback={<Loading />}>
                  <Routes>
                    <Route exact path="/" element={<Top />} />
                  </Routes>
                </React.Suspense>
              </div>
            </div>
          </Router>
        );
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('app')
)