const router = require('express').Router()
const { User, Blogpost } = require('../../models')

function isAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

router.get('/dashboard', isAuthenticated, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.session.userId
    },
    include: Blogpost,
    attributes: {
      exclude: ['password']
    }
  });

  res.render('private/dashboard', {
    user,
    loggedIn: true,
    isDashboard: true
  });
});

module.exports = router