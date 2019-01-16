const Discord = require('discord.js');
const client = new Discord.Client();

// playing
client.on('ready', () => {                           
client.user.setGame(`♥GAMERS♥ | use: $bc `,'https://www.twitch.tv/ℕ g A M Codes♥');
  });

client.on("message", message => {
        var prefix = "$";
            if (message.content.startsWith(prefix + "bc")) {  ///الامر
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});

client.login(process.env.BOT_TOKEN);
