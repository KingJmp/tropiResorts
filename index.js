// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();
const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
bot.user.setPresence({ game: { name: 'Tropidise Resorts', type: 0 } });
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);

});


/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;


  // If the message content starts with "!kick"
  if (message.content.startsWith('.kick')) {
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");

    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick('Kicked by', message.author).then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to kick!');
    }
  }

  if(message.content.startsWith('.help')) {
let bicon = message.guild.iconURL;
let helpembed = new Discord.RichEmbed()
.setDescription("Commands")

.setThumbnail(bicon)
.setColor("#ffbb56")
.addField(".help \n.announce\n.ban \n.kick \n.warn \n.mute \n.resortlink \n.discordlink \n.traininglink \n.interviewlink\n.eventlink\n.applink\n.twitterlink", message.createdAt);
    return message.channel.send(helpembed)
  }

  if (message.content.startsWith('.ban')) {
if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");

    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: 'Banned by, commandBot.',
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to ban the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply('You didn\'t mention the user to ban!');
    }
  }
  if (message.content.startsWith('.announce')) {
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
  if(message.member.hasPermission("MANAGE_NICKNAMES")){
  let args = message.content.split(" ");
  let announcementChannel = client.channels.find("name", "public-announcements")
  const text = args.slice(1).join(" ");
  if (text.length < 1) return message.channel.send("Can not announce nothing");
let bicon = message.guild.iconURL;
  const annEmbed = new Discord.RichEmbed()
             .setColor("#ffcc60")
             .setTitle("Tropidise Announcement")
             .setThumbnail(bicon)
             .addField("Announcement By", `<@${message.author.id}>`)
             .addField("Announced at", message.createdAt)
             .setDescription(text);

             if(message.member.hasPermission("MANAGE_NICKNAMES")){
               announcementChannel.send(annEmbed)
               announcementChannel.send('@everyone')
             }
         }
     }

     if(message.content.startsWith('.resortlink')) {
let bicon = message.guild.iconURL;
   let resortembed = new Discord.RichEmbed()

   .setThumbnail(bicon)
   .setDescription("Tropidise Resort")
   .setColor("#ffbb56")
   .addField("Coming soon.", message.createdAt);
       return message.channel.send(resortembed)
}

if(message.content.startsWith('.traininglink')) {
let bicon = message.guild.iconURL;
let trainembed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Training Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(trainembed)
}

if(message.content.startsWith('.interviewlink')) {
let bicon = message.guild.iconURL;
let interembed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Interview Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(interembed)
}

if(message.content.startsWith('.applink')) {
let bicon = message.guild.iconURL;
let appembed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Applications")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(appembed)
}

if(message.content.startsWith('.eventlink')) {
let bicon = message.guild.iconURL;
let eventembed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Event Center")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(eventembed)
}

if(message.content.startsWith('.twitterlink')) {
let bicon = message.guild.iconURL;
let twitterembeed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Twitter")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(twitterembeed)
}
if(message.content.startsWith('.discordlink')) {
let bicon = message.guild.iconURL;
let discordembed = new Discord.RichEmbed()

.setThumbnail(bicon)
.setDescription("Tropidise Discord")
.setColor("#ffbb56")
.addField("Coming soon.", message.createdAt);
  return message.channel.send(discordembed)
}
if(message.content.startsWith('.mute')){
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
 let reason = args.slice(1).join(' ');
 let user = message.mentions.users.first();
 let modlog = client.channels.find('name', 'reports');
 let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
 if(!muteRole){
    try{
      muteRole = message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
      channel.overwritePermissions(muteRole, {
         SEND_MESSAGES: false,
         ADD_REACTIONS: false
       });
     });
   }catch(e){
     console.log(e.stack);
   }
 }
 if (!modlog) return message.reply('I cannot find a Reports channel').catch(console.error);
 if (!muteRole) return message.reply('I cannot find a mute role').catch(console.error);
 if (reason.length < 1) return message.reply('You must supply a reason for the mute.').catch(console.error);
 if (message.mentions.users.size < 1) return message.reply('You must mention someone to mute them.').catch(console.error);
 const embed = new Discord.RichEmbed()
   .setColor(0x00AE86)
   .setTimestamp()
   .addField('Action:', 'Mute')
   .addField('User:', `${user.username}#${user.discriminator}`)
   .addField('Modrator:', `${message.author.username}#${message.author.discriminator}`);

 if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply('I do not have the correct permissions.').catch(console.error);

 if (message.guild.member(user).roles.has(muteRole.id)) {
   message.guild.member(user).removeRole(muteRole).then(() => {
     client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
   });
 } else {
   message.guild.member(user).addRole(muteRole).then(() => {
     client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
   });
 }
}
if(message.content.startsWith('.report')){
  if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");

      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const rUser = message.mentions.users.first();
      // If we have a user mentioned
      if (rUser) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        // Now we get the member from the user
        const member = message.guild.member(rUser);
   if(!rUser) return message.channel.send("Couldn't find user.");
   let reason = args.join(" ");
   let bicon = message.guild.iconURL;
   let reportEmbed = new Discord.RichEmbed()

   .setThumbnail(bicon)
   .setDescription("Reports")
   .setColor("#ffbb56")
   .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
   .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", reason);

   let reportschannel = message.guild.channels.find(`name`, "reports");
   if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


   message.delete().catch(O_o=>{});
   reportschannel.send(reportEmbed);

}
}
if(message.content.startsWith('.warn')){


      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
      const wUser = message.mentions.users.first();
      if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send("Looks like you don't have permissions!");
      // If we have a user mentioned
      if (wUser) {
        let messageArray = message.content.split(" ");
        let args = messageArray.slice(1);
        // Now we get the member from the user
        const member = message.guild.member(wUser);
   if(!wUser) return message.channel.send("Couldn't find user.");
   let reason = args.join(" ");
   let bicon = message.guild.iconURL;
   let warnEmbed = new Discord.RichEmbed()

   .setThumbnail(bicon)
   .setDescription("Warnings")
   .setColor("#ffbb56")
   .addField("Warned User", `${wUser} with ID: ${wUser.id}`)
   .addField("Warned By", `${message.author} with ID: ${message.author.id}`)
   .addField("Channel", message.channel)
   .addField("Time", message.createdAt)
   .addField("Reason", reason);

   let warnschannel = message.guild.channels.find(`name`, "reports");
   if(!warnschannel) return message.channel.send("Couldn't find warnings channel.");


   message.delete().catch(O_o=>{});
   warnschannel.send(warnEmbed);

}
}
if(message.content.startsWith('.unban')){
  let messageArray = message.content.split(" ");
  let args = messageArray.slice(1);
  let reason = args.slice(1).join(' ');
 client.unbanReason = reason;
 client.unbanAuth = message.author;
 let user = args[0];
 let modlog = client.channels.find('name', 'reports');
 if (!modlog) return message.reply('I cannot find a unbans channel');
 if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
 if (!user) return message.reply('You must supply a user id.').catch(console.error);
 message.guild.unban(user);
}
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login(process.env.BOT_TOKEN);
