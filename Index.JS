const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setPresence('idle')
  client.user.setActivity(`~Help | Servers: ${client.guilds.size} | Version: 1.0.2`)
  console.log('I Am Ready')
});


var prefix = '~'
client.on('message', message => {
  var guild = message.guild;

   if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  
   const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
   if (message.content.startsWith(prefix + 'Ping')) {
     const embed = new Discord.RichEmbed()
     .setTitle('Pong 🏓')
     .setColor('F8E71C')
    .setDescription(`**Latency:** \`${Date.now() - message.createdTimestamp}MS\``);
     message.channel.send({embed});
  } 
  
  if (message.content.startsWith(prefix + 'Stats')) {
    
     const embed = new Discord.RichEmbed()
     .setTitle('Shift Statistics')
     .setColor('D80ED4')
     .setDescription(`Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB\n\nNode: 8.9.4\n\nLibrary: Discord.JS\n\nBot Version: 1.0.2\n\nServers: ${client.guilds.size}`)
  message.channel.send({embed});
}
  
  if (message.content.startsWith(prefix + 'Help')) {
    message.channel.send('Check Your Direct Messages')
     const embed = new Discord.RichEmbed()
     .setTitle('Shift Commands')
     .setColor('0C1ABE')
     .addField("Paid Advertisement", "Join The Official Shift Server [Here](https://discord.gg/XDQKuWz)", true)
     .setDescription('Stats - Gives Some Useful Bot Statistics\n\nPing - Measures The Latency Between The Bot And Discord')
     message.author.send({embed});
     }
  

});

client.login('BotTokenHere')
