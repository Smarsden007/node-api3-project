const express = require('express');
const {
  validateUserId,
  validateUser,
  validatePost
} = require('../middleware/middleware')

const User = require('./users-model')
const post = require('../posts/posts-model')


const router = express.Router();

router.get('/', (req, res, next) => {
  User.get()
  .then(users => {
    res.json(users)
  })
  .catch(next)
});

router.get('/:id', validateUserId, (req, res) => {
res.json(req.user)
});

router.post('/', validateUser, (req, res) => {
  User.insert({ name: req.name})
  .then(newUser => {
    throw new Error('ouch')
    res.status(201).json(newUser)
  })
  .catch(next)
});

router.put('/:id', validateUserId, validateUser, (req, res) => {
  User.update(req.params.id, { name: req.name })
  .then(rowsChanged => {
    return User.getById(req.params.id)
  })
  .then(user => {
    res.json(user)
  })
  .catch(next)
});

router.delete('/:id', validateUserId, async (req, res) => {
  try{
    const result = await user.remove(req.params.id)
    res.json(req.user)
  } catch (err) {
    next(err)
  }
  
});

router.get('/:id/posts', validateUserId, async (req, res, next) => {
  try{
    const result = await User.getUserPosts(req.params.id)
    res.json(results)
  } catch (err) {
    next(err)
  }
});

router.post('/:id/posts', validateUserId, (req, res) => {
  
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    customMessage: 'something tragic inside posts router happened',
    message: err.message,
    stack:err.stack,
  })
})

module.exports = router
