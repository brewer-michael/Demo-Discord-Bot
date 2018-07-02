const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Being Difficult', {type: 'WATCHING'});
});

client.on('message', msg => {
    //if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    //const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    //const args = msg.content.split(' ').slice(1).join(' ');
    //if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    if (msg.content.startsWith("ping")) {
      msg.channel.send("pong!");
    }
    //else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    //else message.channel.send("I'm sorry, I didn't understand");
});

client.login('NDU5NzQzMzcwNTAwMjQzNDc3.Dg_SfQ.uF6U5SBE6x1rj0Zr95vxzIymowU');
