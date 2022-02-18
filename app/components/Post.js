 import React from 'react'
 import queryString from 'query-string'
 import fetchComments from '../utils/api';
 
 export default class Post extends React.Component {
     state = {
         post: null,
         comments: null
     }
     componentDidMount(){
         const { id } = queryString.parse(location.search)
         fetchComments(id).then(data => {
             data.comments.then(comments => {
                 this.setState({
                     post: data.post,
                     comments: comments
                 })
             })
         })

         /// TO BE TESTED => NEED TO FETCH ALL COMMENTS UNDER THIS POST
     }

 }