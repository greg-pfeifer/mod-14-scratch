const router = require('express').Router();
const { Blogpost } = require('../models/index')

// GET all posts for homepage
router.get('/', async (req, res) => {
  const allBlogpost = await Blogpost.findAll()
  res.render('index', {
    data: allBlogpost,
    loggedIn: req.session.userId && true
  });
});

// Login route
router.get('/login', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/login');
});

// Register route
router.get('/register', (req, res) => {
  if (req.session.userId) {
    res.redirect('/dashboard');
    return;
  }
  res.render('auth/register');
});

module.exports = router;