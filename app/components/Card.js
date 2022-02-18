import React from 'react';
import { Link } from 'react-router-dom'

const styles = {
  comments: {
    marginLeft: '5px'
  }
}

export default function Card({ id, author, title, url, date, comments }){

    return (
      <div className="content-card">
        <a href={url} className="title">
          {title}
        </a>
        <div className="post-detail">
          <p>
            {' '}
            By {author},{' '}
            <span className="fade">
              on {new Date(date * 1000).toLocaleString()}
            </span>
          </p>
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
    );
}