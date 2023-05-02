const router = require('express').Router()
const { User, Blogpost, Comment } = require('../../models')

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

// Blogpost routes
router.get('/newpost', isAuthenticated, async (req, res) => {
  res.render('private/newpost', {
    loggedIn: true
  });
});

router.post('/newpost', isAuthenticated, (req, res) => {
  Blogpost.create({
    title: req.body.title,
    content: req.body.content
  }).then (res.redirect('/'))
});

// Comment routes
router.get('/newcomment', isAuthenticated, async (req, res) => {
  res.render('private/newcomment', {
    loggedIn: true
  });
});

router.post('/newcomment', isAuthenticated, (req, res) => {
  Comment.create({
    new_comment: req.body.new_comment
  }).then (res.redirect('/'))
});


module.exports = router