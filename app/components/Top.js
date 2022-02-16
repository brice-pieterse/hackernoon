import React from 'react';

import fetchTopStories from '../utils/api'
import Post from './Post'

export default class Top extends React.Component {
    state = {
        stories: []
    }

    componentDidMount(){
        fetchTopStories().then(stories => {
            this.setState({
                stories: stories
            })
        })
    }

    render(){
        return (
        <div className="feed">
          {this.state.stories.length > 0 && (
            <ul>
              {this.state.stories.map(({ id }) => {
              return ( <li key={id}> <Post /> </li>)})}
            </ul>
          )}

          {this.state.stories.length === 0 && <h1>Empty Feed</h1>}
        </div>)
    }
}