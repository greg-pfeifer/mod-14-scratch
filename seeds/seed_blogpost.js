const { Blogpost } = require('../models')

const blogpostData =
  [
    {
      title: 'Will ChatGPT Replace Developers?',
      content: 'This is unlikely. Just as the invention of the calculator did not altogether replace mathematicians, ChatGPT will not entirely replace developers but will serve as a helpful tool for increased efficiency.'
    }
  ]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData)

module.exports = seedBlogpost