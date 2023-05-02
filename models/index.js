
const Blogpost = require('./Blogpost')
const Comment = require('./Comment')

module.exports = {
    Blogpost: require('./Blogpost'),
    User: require('./User'),
    Comment: require('./Comment')
}

Blogpost.hasMany(Comment)

