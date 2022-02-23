 import React from 'react'
 import queryString from 'query-string'
 import { fetchComments } from '../utils/api';
 import Loading from './Loading'
 import Card from './Card'
 import { ThemeConsumer } from '../contexts/theme'
 
 export default class Post extends React.Component {

     state = {
         post: null,
         comments: null
     }

     componentDidMount(){
         const { id } = queryString.parse(location.search)
         fetchComments(id).then(data => {
             data.comments.then(comments => {
                 console.log(comments)
                 this.setState({
                     post: data.post,
                     comments: comments
                 })
             })
         })
     }

     render(){
 
        const { post, comments } = this.state

         return (
           <ThemeConsumer>
             {({ theme }) => (
               <div className="feed-wrapper">
                 <div className="max-width">
                   {post === null ? (
                     <Loading />
                   ) : (
                     <div className="feed">
                       <Card
                         id={post.id}
                         author={post.by}
                         title={post.title}
                         url={post.url}
                         date={post.time}
                         comments={post.kids}
                       />
                       {comments.map((comment) => (
                         <div
                           key={comment.id}
                           className={`content-card comment ${theme}`}
                         >
                           <div className="post-detail">
                             <p className={theme}>
                               By {comment.by},{' '}
                               <span className={`fade ${theme}`}>
                                 on{' '}
                                 {new Date(
                                   comment.time * 1000
                                 ).toLocaleString()}{' '}
                               </span>
                             </p>
                           </div>
                           <p
                             className={`body margin-top-sm ${theme}`}
                             dangerouslySetInnerHTML={{ __html: comment.text }}
                           ></p>
                         </div>
                       ))}
                     </div>
                   )}
                 </div>
               </div>
             )}
           </ThemeConsumer>
         );
     }

 }