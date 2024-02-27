const connection = require('../config/connection');
const { User , Thought} = require('../models');
const { username, email, thoughtText, reactionBody} = require('./data.js');

connection.on('err', (err) => {
    console.log(err);
});

connection.once('open', async () => {
    await User.deleteMany({});
    await Thought.deleteMany({});
    const reaction = [{reactionBody: reactionBody[0], username: username[0]}];
    const thoughts = [{thoughtText: thoughtText[0], username: username[0], reactions: reaction}];
    const users = [{username: username[0], email: email[0], thoughts: thoughts, friends: []}];
    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    console.table(thoughts);
    console.table(users);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});