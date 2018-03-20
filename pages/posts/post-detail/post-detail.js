var postsData = require('../../../data/posts-data.js');

Page({
  onLoad: function (options) {
    var postId = options.id;
    var postData = postsData.postList[postId];
    console.log(postData);
  }
})