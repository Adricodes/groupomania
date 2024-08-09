const User = require('../models/user');
const fs = require('fs');

exports.createUser = (req, res, next) => {
  const parsedUser = JSON.parse(req.body.user);
  const url = req.protocol + '://' + req.get('host');
  const user = new User({
    name: parsedUser.name,
    userId: parsedUser.userId,
    description: parsedUser.description,
    imageUrl: url + '/images/' + req.file.filename,
    likes: 0,
    dislikes: 0,
    usersLiked: [],
    usersDisliked: []
  });

  user.save().then(
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
};


exports.deleteUser = (req, res, next) => {
  User.findOne({ _id: req.params.id }).then(
    (user) => {
      const filename = user.imageUrl.split('/images/')[1];
      fs.unlink('images/' + filename, () => {
        User.deleteOne({ _id: req.params.id }).then(
          () => {
            res.status(200).json({
              message: 'Deleted!'
            });
          }
        ).catch(
          (error) => {
            console.log(exports.deleteUser)
            res.status(400).json({
            });
          }
        );
      });
    }
  );
};

exports.likeUser = (req, res, next) => {
  let userIdInfo = req.body.userId;
  let currentLikes = req.body.like;
  let userId = req.params.id;
  let usersLiked = [userIdInfo];
  let usersDisliked = [userIdInfo];

  User.findOne({
    _id: req.params.id
  }).then(
    (user) => {


      if (currentLikes === 1 && !user.usersLiked.includes(userIdInfo)) {
        resetVote(user, userIdInfo);
        console.log("user liking now")
        user.likes++
        user.usersLiked.push(userIdInfo)
      }

      else if (currentLikes === 0 && (User.usersLiked.includes(userIdInfo) || user.usersDisliked.includes(userIdInfo))) {

        resetVote(user, userIdInfo);
      }
      else if (currentLikes === -1 && !user.usersDisliked.includes(userIdInfo)) {
        resetVote(user, userIdInfo);
        console.log("disliking post!")
        user.dislikes++
        user.usersDisliked.push(userIdInfo)
      }
      User.updateOne({ _id: userId }, user).then(
        () => {
          res.status(201).json({
            message: 'Post liked successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error.message
          });
        }
      );
    })
}

function resetVote(user, userIdInfo) {
  if (user.usersLiked.includes(userIdInfo)) {
    console.log(user.usersLiked);
    user.usersLiked = user.usersLiked.filter(testId);
    console.log(user.usersLiked);
    user.likes--;
    console.log("user liked removed!");

  }
  if (user.usersDisliked.includes(userIdInfo)) {
    console.log(user.usersDisliked); 
    user.usersDisliked = user.usersDisliked.filter(testId);
    console.log(user.usersDisliked);
    user.dislikes--;
    console.log("user disliked removed!");

  }
  function testId(id) {
    return id !== userIdInfo
  }
}


