const { Blogpost } = require('../models')

const blogpostData =
  [
    {
      title: 'Will ChatGPT Replace Developers?',
      content: 'This is unlikely. Just as the invention of the calculator did not altogether replace mathematicians, ChatGPT will not entirely replace developers but will serve as a helpful tool for increased efficiency.'
    },
    {
      title: 'Best Advice for Aspiring Programmers',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestiae quas maiores eius, sit quaerat minus voluptates possimus? Sint ut voluptatibus quae dolorum veniam tempore iste, maxime delectus numquam autem. Corrupti architecto incidunt praesentium inventore laborum quo commodi dolore distinctio odit facere iure, sapiente quibusdam! Dicta nam adipisci alias beatae excepturi repellat perferendis, similique cupiditate culpa. Assumenda vero ipsam excepturi? Modi voluptates quasi saepe? Eveniet accusamus, velit quidem in officia quasi nostrum sapiente corporis atque enim adipisci alias voluptate, magnam expedita blanditiis consectetur vitae mollitia ea illum architecto aliquam dolorem!'
    },
  ]

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData)

module.exports = seedBlogpost