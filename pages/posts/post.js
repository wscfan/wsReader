var postsData = require('../../data/posts-data.js');

Page({
  data: {

  },
  onLoad: function () {
    this.setData({
      posts_key: postsData.postList
    });
  },
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId
    })
  }
})