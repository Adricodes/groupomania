const fs = require('fs')

const db = require('../models')
const { Post } = db.sequelize.models

exports.getAllPosts = (req, res, next) => {
  // const limit = 4
  // const page = parseInt(req.query.page) || 1

  const options = {
    // include: [
    //     {
    //         model: db.User
    //     }
    // ],
    // limit,
    // offset: limit * (page - 1),
    order: [['createdAt', 'DESC']]
  }

  // if (req.query.userId) {
  //     options.where = {
  //         userId: parseInt(req.query.userId)
  //     }
  // }

  Post.findAll(options)
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }))
}

exports.createPost = async (req, res, next) => {
  let post
  console.log(req.body)
  if (req.file) {
    const parsedPost = JSON.parse(req.body.post);
    const url = req.protocol + '://' + req.get('host');
    // req.body.user = JSON.parse(req.body.user);
     post = Post.build({
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
      usersRead: [],
      mediaUrl: url + '/media/' + req.file.filename,
    });
  } else {
    post = {
      userId: parsedPost.userId,
      title: parsedPost.title,
      content: parsedPost.content,
    };
  }

  post.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );

  // const post = await User.create({ firstName });
  // // console.log(jane); // Don't do this
  // console.log(firstName.toJSON()); // This is good!
  // console.log(JSON.stringify(firstName, null, 4))

}
