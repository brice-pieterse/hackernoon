import React from 'react';
import { fetchNewStories } from '../utils/api'
import fetchTopStories from '../utils/api'
import Card from './Card'
import Loading from './Loading'

export default class Feed extends React.Component {
    state = {
        stories: []
    }

    componentDidMount(){
        if (this.props.feed === 'top'){
            fetchTopStories().then((stories) => {
                this.setState({
                stories: stories,
                });
            });
        }
        else if (this.props.feed === 'new'){
            fetchNewStories().then((stories) => {
              this.setState({
                stories: stories,
              });
            });
        }
    }

    componentDidUpdate(){
      if (this.props.feed === 'top') {
        fetchTopStories().then((stories) => {
          this.setState({
            stories: stories,
          });
        });
      } else if (this.props.feed === 'new') {
        fetchNewStories().then((stories) => {
          this.setState({
            stories: stories,
          });
        });
      }
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

              {this.state.stories.length === 0 && <Loading />}
            </div>
          </div>
        );
    }
}