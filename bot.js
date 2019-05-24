const Discord = require('discord.js');
const ical = require('node-ical');
const pool = require('./base/postgres.js');
//const config = require('./config.json');
const bot = new Discord.Client();
const Enmap = require("enmap");
const fs = require("fs");
//const dnd = require('./modules/dnd.js');

bot.on('ready', () => {
    bot.user.setActivity('Being Difficult', {type: 'IS'});
    console.log('The bot is ready to go');
    pool.connect( (err, client, done) => {
            if(err) {
              console.log(err)
            }else
            client.query('create table if not exists users( \
                id text primary key, \
                name text, \
                count integer default 0)', (err, result) => {
                    //disconnent from database on error
                    done();
                    if (err) {
                            throw err;
                    }
            });
    });
});

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, event.bind(null, bot));
  });
});

bot.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the command file itself
    let props = require(`./commands/${file}`);
    // Get just the command name from the file name
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    // Here we simply store the whole thing in the command Enmap. We're not running it right now.
    bot.commands.set(commandName, props);
  });
});

bot.login(process.env.TOKEN);
