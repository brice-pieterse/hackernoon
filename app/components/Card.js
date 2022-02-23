import React from 'react';
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

const styles = {
  comments: {
    marginLeft: '5px'
  }
}

export default function Card({ id, author, title, url, date, comments }){

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div className={`content-card ${theme}`}>
            <a href={url} className={`title ${theme}`}>
              {title}
            </a>
            <div className="post-detail">
              <p className={theme}>
                {' '}
                By {author},{' '}
                <span className={`fade ${theme}`}>
                  on {new Date(date * 1000).toLocaleString()}
                </span>
              </p >
              {comments && (
                <Link
                  style={styles.comments}
                  to={{
                    pathname: '/post',
                    search: `?id=${id}`,
                  }}
                >
                  with {comments.length} comments
                </Link>
              )}
            </div>
          </div>
        )}
      </ThemeConsumer>
    );
}