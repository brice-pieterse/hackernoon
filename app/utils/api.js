
export function fetchStory(storyId) {
  const endpoint = window.encodeURI(
    `https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`
  );

  return fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
      if (!data) {
        throw new Error(data.message);
      }
      return data;
    });
}

export function fetchComments(id){
    const endpoint = window.encodeURI(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );

    const fetchPost = fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        if (!data) {
          throw new Error(data.message);
        }
        return data;
      });

      return fetchPost
      .then(post => {
          const comments = []
          for (let i = 0; i < post.kids.length; i++) {
            comments.push(fetchStory(post.kids[i]));
          }
          return {
              post: post,
              comments: Promise.all(comments)
            }
      })
}


export function fetchNewStories() {
  const endpoint =
    'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

  return fetch(endpoint)
    .then((res = res.json()))
    .then((data) => {
      if (!data) {
        throw new Error(data.message);
      }
      console.log('fetched new stories', data);
    });
}

export default function fetchTopStories() {
    const endpoint = encodeURI(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    );

    return fetch(endpoint)
    .then(res => res.json())
    .then(data => {
        const storyData = []
        if (!data){
            throw new Error(data.message)
        }
        for (let i = 0; i < 3; i++){
            storyData.push(fetchStory(data[i]))
        }
        return Promise.all(storyData)
    })
}