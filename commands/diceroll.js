exports.run = (client, message, args) => {
    message.channel.send(" Attack Longbow: `'!roll d20 + 4 ! Attack with Longbow'` \n Attack Shortsword: `'!roll d20 + 5 ! Attack with Shortsword'` \n Damage: `'!roll d8 + 2 ! [weapon]'` \n Character page: http://bit.ly/2VTNiZw").catch(console.error);
}
