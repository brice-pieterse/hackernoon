import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Loading from './components/Loading'
import Nav from './components/Nav'

import Feed from './components/Feed';
import Post from './components/Post'

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
                    <Route exact path="/" element={<Feed feed="top" />} />
                    <Route exact path="/new" element={<Feed feed="new" />} />
                    <Route path="/post" element={<Post />} />
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