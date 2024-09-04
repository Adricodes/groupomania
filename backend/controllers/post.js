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

exports.createPost = (req, res, next) => {
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    req.body.user = JSON.parse(req.body.user);
    user = {
      userId: req.body.user.userId,
      title: req.body.user.title,
      content: req.body.user.content,
      usersRead: [],
      imageUrl: url + '/images/' + req.file.filename,
    };
  } else {
    user = {
      userId: req.body.userId,
      name: req.body.name,
    };
  }
  console.log(user)
  Sauce.updateOne({ _id: req.params.id }, user).then(
    () => {
      res.status(201).json({
        message: 'Sauce updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
const req = req.body.post;
const parsedPost = JSON.parse(req.body.post);
const url = req.protocol + '://' + req.get('host');
const post = new Post({
  title: parsedPost.title,
  content: parsedPost.content,
  userId: parsedPost.userId,
  mediaUrl: url + '/media/' + req.file.filename,
  usersRead: [],

});

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

// exports.modifyPost = (req, res, next) => {
//     const postObject = req.file
//         ? {
//             ...JSON.parse(req.body.post),
//             imageUrl: `${req.protocol}://${req.get('host')}/public/${req.file.filename
//                 }`
//         }
//         : { ...req.body }

//     Post.findOne({
//         where: { id: req.params.id, userId: req.user.id },
//         include: db.User
//     }).then(post => {
//         if (!post) {
//             res.status(400).json({ error: "You are not authorized" })
//         } else {
//             post.update(postObject).then(post => res.status(200).json({ post }))
//         }
//     })
// }

// exports.deletePost = (req, res, next) => {
//     const where = {
//         id: req.params.id
//     }

//     if (!req.user.admin) {
//         where.userId = req.user.id
//     }

//     Post.findOne({ where })
//         .then(post => {
//             if (!post) {
//                 res.status(400).json({ error: "You are not authorized" })
//             }
//             post
//                 .destroy()
//                 .then(() =>
//                     res.status(200).json({ message: 'Post deleted!' })
//                 )
//                 .catch(error => res.status(400).json({ error }))
//         })
//         .catch(error => res.status(500).json({ error: error.message }))
// }

