const router = require('express').Router();
const User = require('../../models/User');

function isLoggedIn (req, res, next) {
    if (req.session.user_id) return res.redirect('/dashboard');
    next();
  }

// CREATE new user - endpoint: auth/register
router.post('/register', isLoggedIn, async (req, res) => {
    const formData = req.body;
    try {
      const userData = await User.create({
        username: formData.username,
        password: formData.password,
      });
      req.session.userId = userData.id;
      return res.redirect('/dashboard');
    } catch (err) {
      console.log(err);
      res.redirect('/register');
    }
  });
  
  module.exports = router