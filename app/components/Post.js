 import React from 'react'
 import queryString from 'query-string'
 import { fetchComments } from '../utils/api';
 import Loading from './Loading'

 function decodeHTML(str) {
     const txt = document.createElement('textarea')
     txt.innerHTML = str
     return txt.value
 }
 
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
           <div className="feed-wrapper">
             <div className="max-width">
               {post === null ? (
                 <Loading />
               ) : (
                 <div className="feed">
                   {comments.map((comment) => (
                     <div key={comment.id} className="content-card">
                       <div className="post-detail">
                         <p>
                           By {comment.by}, on{' '}
                           {new Date(comment.time * 1000).toLocaleString()}{' '}
                         </p>
                       </div>
                       <p className="margin-top-sm" dangerouslySetInnerHTML={{__html: comment.text}}></p>
                     </div>
                   ))}
                 </div>
               )}
             </div>
           </div>
         );
     }

 }