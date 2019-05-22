const Discord = require('discord.js');
const ical = require('node-ical');
//const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity('Being Difficult', {type: 'IS'});
});

client.on('message', msg => {
    //if (!msg.content.startsWith(process.env.PREFIX) || !msg.guild) return;
    //const command = msg.content.split(' ')[0].substr(process.env.PREFIX.length);
    //const args = msg.content.split(' ').slice(1).join(' ');
    //if (command === 'guide') return msg.channel.send('https://git.io/d.js-heroku');
    if (msg.content.startsWith(process.env.BOTFLAG + "ping")) {
      msg.channel.send("pong!");
    }
    if (msg.content.startsWith(process.env.BOTFLAG + "DeltaMike")) {
      msg.channel.send("911-313-775");
    }
    if (msg.content.startsWith(process.env.BOTFLAG + "events")) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      //ical.fromURL('https://swgohevents.com/ical', {}, function(err, data) {
      //  for (var k in data){
      //    if (data.hasOwnProperty(k)) {
      //      var ev = data[k]
      //      msg.channel.send("Upcoming Events",
      //      ev.summary,
      //      'starts on',
      //      ev.start.getDate());
      //    else msg.channel.send("No Upcoming Events");
      //    }
      //  }
      //});
      msg.channel.send("Upcoming Events");
    }
    if (msg.content.startsWith("bob")) {
      msg.channel.send("@mightybob204/sphinx#9595 " + "BOB! HEY BOB!!");
    }
    if (msg.content.startsWith("dan")) {
      msg.channel.send("ALL HAIL KING" + "<@314491020987596802>");
    }
    if (msg.content.startsWith(process.env.BOTFLAG + "diceroll")) {
      msg.channel.send("Attack Longbow: `'!roll d20 + 4 ! Attack with Longbow'`", "Attack Shortsword: `'!roll d20 + 5 ! Attack with Shortsword'`", "Damage: `'!roll d8 + 2 ! [weapon]'`", "Character page: http://bit.ly/2VTNiZw")
        
    }
    //if (msg.content.match(new RegExp(^(?=.*(?:\\b${bob})\\b).*$, 'i')) {
    //  msg.channel.send("<@243164548884856833>" + "BOB! HEY BOB!!");
    //}
    //else if (command === 'invite') return msg.channel.send(process.env.INVITE);
    //else message.channel.send("I'm sorry, I didn't understand");
});

client.login(process.env.TOKEN);
