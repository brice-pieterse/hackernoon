import React from 'react';

import fetchTopStories from '../utils/api'
import Card from './Card'

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
          <div className="feed-wrapper">
            <div className="max-width">
              {this.state.stories.length > 0 && (
                <div className='feed'>
                  {this.state.stories.map(
                    ({ id, by, title, url, time, kids }) => {
                      return (
                        <div key={id}>
                          <Card
                            id={id}
                            author={by}
                            title={title}
                            url={url}
                            date={time}
                            comments={kids}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              )}

              {this.state.stories.length === 0 && <h1>Empty Feed</h1>}
            </div>
          </div>
        );
    }
}