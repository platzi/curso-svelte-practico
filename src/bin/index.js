const fetch = require('node-fetch');
const fs = require('fs');
let postsObj = require('../routes/blog/_posts.json');
require('dotenv').config();

const API = process.env.GHOST_API;

const fetchData = async () => {
  const response = await fetch(API);
  const data = await response.json();
  const posts = await data.posts.map(post => {
    return {
      "title": post.title,
      "html": post.html,
      "slug": post.slug,
      "createdAt": post.created_at,
      "id": post.id,
      "desc": post.meta_description,
      "tag": post.meta_title,
      image: post.feature_image
    }
  });

  if (postsObj.length >= 15) {
    if (posts[0].title === postsObj[0].title) {
      postsObj.shift();
      postsObj.unshift(posts[0]);
      writeFile(postsObj);
    } else {
      postsObj.unshift(posts[0]);
      writeFile(postsObj);
    }
  } else {
    writeFile(posts);
  }
}