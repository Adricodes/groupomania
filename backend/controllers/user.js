const bcrypt = require('bcrypt');
const { User } = require('../models');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    console.log('Signing up user!')
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User added successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json({
                        error: error
                    });
                }
            );
        }
    );
};

exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } }).then(
        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.password, user.password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(401).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign(
                        { userId: user.id },
                        'RANDOM_TOKEN_SECRET',
                        { expiresIn: '24h' });
                    console.log(token)
                    res.status(200).json({
                        userId: user.id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    console.log(error);
                    res.status(500).json({
                        error: error.message
                    });
                }
            );
        }
    ).catch(
        (error) => {
            console.log(error);
            res.status(500).json({
                error: error.message
            });
        }
    );
}

exports.deleteUser = (req, res, next) => {
    // FIXME check if req.auth.userId is same as req.params.id
    User.destroy({ where: { id: req.params.id } }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            console.log(exports.deleteUser)
            res.status(400).json({
                error: error.message
            });
        }
    );
};