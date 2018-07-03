const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Being Difficult', {type: 'IS'});
});

client.on('message', msg => {
    //if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    //const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    //const args = msg.content.split(' ').slice(1).join(' ');
    //if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    if (msg.content.startsWith(config.token + "ping")) {
      msg.channel.send("pong!");
    }
    if (msg.content.startsWith(config.token + "events")) {
      msg.channel.send("Upcoming Events");
    }
    //else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    //else message.channel.send("I'm sorry, I didn't understand");
});

client.login(config.botToken);
