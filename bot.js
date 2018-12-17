const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = '+'
const fs = require(`fs`)
const owners = ['505834360159862787']
let user = JSON.parse(fs.readFileSync(`./users.json`, `utf8`))
let dic = JSON.parse(fs.readFileSync(`./words.json`, `utf8`))
var ID = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  const DBL = require("dblapi.js");
const dbl = new DBL(process.env.DBL, bot);
function ban() {
    if(user[message.author.id].banned = 'yes') return
}
// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
const error = '<:error:521288613216911371>'
const loading = '<a:loading:521288392135409742>'
const success = '<a:success:521288658456936459>'
const yay = '<a:yay:521288436468940810>'
const shame = '<a:banned:521288479007571968>'
const banned = ['458328259231481896']
bot.on('ready', () => {
    console.log(`Ready.`)
    bot.user.setActivity(`${bot.guilds.size} Servers | +help`)
}) 
bot.on('guildCreate', guild => {
    bot.guilds.get(`516707312094674957`).channels.find(`name`, `discotionary-logs`).send(`+ ${guild.name} | ${bot.guilds.size} Servers`)
})
bot.on('guildDelete', guild => {
    bot.guilds.get(`516707312094674957`).channels.find(`name`, `discotionary-logs`).send(`- ${guild.name} | ${bot.guilds.size} Servers`)
})
bot.on('message', message => {
if(message.author.bot) return;
if(message.channel.type == 'dm') return;
if(!user[message.author.id]) user[message.author.id] = {
    words: 0,
    banned: 'no'
  }
if(message.author.id.includes(banned)) return;
if(message.content == prefix + 's') {
    if(!owners.includes(message.author.id)) return message.reply(`no`)
     delete user[bot.users.forEach(u => {
        u.id
    })].word1
    delete user[bot.users.forEach(u => {
        u.id
    })].word2
    delete user[bot.users.forEach(u => {
        u.id
    })].word3
}
if(message.content == prefix + 'test') {
    if(!owners.includes(message.author.id)) return message.reply(`no`)
     message.channel.send(user[message.author.id])
}
/*if(message.content.startsWith(prefix + 'profile')) {

    let mentions = message.mentions.members.first()
    if(!mentions) {
        var word1 = user[message.author.id].word1
        var word2 = user[message.author.id].word2
        var word3 = user[message.author.id].word3
        var embed = new Discord.RichEmbed()
        .setTitle(`Your Profile`)
        .setDescription(`Words: ${word1} ${word2} ${word3}`)
        .setColor(`GREEN`)
        message.channel.send({embed})
    } else {
        var word1 = user[mentions.id].word1
        var word2 = user[mentions.id].word2
        var word3 = user[mentions.id].word3
        var embed = new Discord.RichEmbed()
        .setTitle(`${mentions.user.tag}'s Profile`)
        .setDescription(`Words: ${word1} ${word2} ${word3}`)
        .setColor(`GREEN`)
        message.channel.send({embed})
    }
}*/
  if(message.content.startsWith(prefix + 'removeword')) {
      if(!owners.includes(message.author.id)) return message.reply(`${shame} Only the bot owner can use this command!`)
      let args = message.content.split(" ").slice(1)
      let word = args[0]
      if(!word) return message.channel.send(`type an word u idot`)
      if(word) {
          word = args[0].toLowerCase()
      }
      if(!dic[word]) return message.channel.send(`the word isnt in discotionary lmao`)
      let p = user[bot.users.get(dic[word].userID).id].word
      console.log(p)
      let reason = message.content.split(" ").slice(2).join(" ")
      if(!reason) return message.reply(`wth type a reason`)
      message.channel.send(`the word **${word}** has been deleted`)
      user[bot.users.get(dic[word].userID).id].words--
      console.log(p)
      delete dic[word]
      const embed = new Discord.RichEmbed()
      .setTitle(`Word Deletion`)
      .setDescription(`Word: ${word}
      
Reason: ${reason}`)
.setTimestamp(true)
.setColor(`RED`)
bot.guilds.get(`516707312094674957`).channels.find(`name`, `discotionary-logs`).send({embed})
  }
  if(message.content == prefix + 'test') {
      message.channel.send(user[message.author.id].words)
  }
if(message.content.startsWith(prefix + 'submit')) {
    if(user[message.author.id].words == 3) return message.channel.send(`${error} You've reached your maximum number of words in Discotionary, If you'd like to remove some of your words, type ${prefix}support and contact us`)

    let args = message.content.split(" ").slice(1)
        let word = args[0]
        if(!word) return message.channel.send(`${error} You have to type a word to add to Discotionary.`)
        if(!word == NaN) return message.channel.send(`${error} Numbers aren't allowed.`)
        let ex = message.content.split(" ").slice(2).join(" ")
        if(!ex) return message.channel.send(`${error} You have to type an explnation to the word **${word}**`)
           if(dic[word]) {
                     message.channel.send(`${error} This word is already in Discotionary.`)
                  } else if(ex.length > 500){
message.channel.send(`${error} The explanation's length must be fewer than 500.`)
                  } else  {
                      message.channel.send(`${success} The word **${word}** has been successfully added to Discotionary!`)
                      let w = user[message.author.id].words
                      user[message.author.id].words++
                      dic[word.toLowerCase()] = {
                          exp: ex,
                          id: ID,
                          userID: message.author.id
                      }

                      var embed = new Discord.RichEmbed()
                      .setTitle(`New Word`)
                      .setDescription(`Word: ${word.toLowerCase()}
        
Explanation : ${ex}

Submitted by: ${bot.users.get(message.author.id).tag}/<@!${bot.users.get(message.author.id).id}>`)
.setTimestamp(true)
.setColor(`GREEN`)
                      bot.guilds.get(`516707312094674957`).channels.find(`name`, `discotionary-logs`).send({embed})
                  } 
    }
    if(message.content.startsWith(prefix + 'ban')) {
        try {
        if(!owners.includes(message.author.id)) return;
        let args = message.content.split(" ").slice(1)
        user[args[0]].banned = 'yes'
        message.channel.send(`banned hahaha`)
        } catch(err) {
            message.channel.send(`err: ${err}`)
        }
    }
    if(message.content.startsWith(prefix + 'word')) {
        let args = message.content.split(" ").slice(1)
        if(!args[0]) return message.channel.send(`${error} You have to type a word.`)
        if(!dic[args[0].toLowerCase()]) return message.channel.send(`${error} This word isn't in Discotionary! ${yay} Use the ${prefix}submit command to submit it!`)
    const embed = new Discord.RichEmbed()
    .setTitle(`Discotionary | **${args[0].toLowerCase()}**`)
    .setDescription(`Word: ${args[0].toLowerCase()}
    
Explanation: ${dic[args[0].toLowerCase()].exp}

Submitted by: ${bot.users.get(dic[args[0].toLowerCase()].userID).tag}/<@!${dic[args[0].toLowerCase()].userID}>`)
.setColor(`GREEN`)
message.channel.send({embed})
    }
    if(message.content == prefix + 'support') {
        message.channel.send(`Join my support server: https://discord.gg/EeTNPqs`)
    }
   if(message.content.startsWith(prefix + 'edit')) {
       let args = message.content.split(" ").slice(1)
       let word = args[0]
       let newEx = message.content.split(" ").slice(2).join(" ")
       if(!word) return message.channel.send(`${error} Please type a word to edit. *The word has to be submitted by you, hahaha*`)
     if(word) {
     word = args[0].toLowerCase()
     } 
     if(!dic[word]) return message.channel.send(`${error} This word isn't in Discotionary! ${yay} Use the ${prefix}submit command to submit it!`)
       if(dic[word].userID != message.author.id) return message.channel.send(`${shame} This word isn't submitted by you.`)
       if(!newEx) return message.channel.send(`${error} You have to type a new explanation.`)
       if(newEx == dic[word].exp) return message.channel.send(`${error} The old explanation and the new one are the same!`)
       message.channel.send(`${success} You have successfully changed **${word}**'s explanation!`)
       var embed = new Discord.RichEmbed()
       .setTitle(`Word Edit`)
       .setDescription(`Word: ${word}

Old Explanation: **${dic[word].exp}**

New Explanation: **${newEx}**

Edited by: ${bot.users.get(message.author.id).tag}/<@!${bot.users.get(message.author.id).id}>`)
.setTimestamp(true)
.setColor(`GREEN`)
       bot.guilds.get(`516707312094674957`).channels.find(`name`, `discotionary-logs`).send({embed})
       setTimeout(function() {
           dic[word].exp = newEx
       }, 1000)
    }
    if(message.content == prefix + 'invite') {
        message.channel.send(`Invite me by this link: https://discordapp.com/oauth2/authorize?client_id=521050302502404124&scope=bot&permissions=3072`)
    }
    if(message.content == prefix + 'help') {
        var embed = new Discord.RichEmbed()
        .setTitle(`Discotionary | Help`)
        .setDescription(`${prefix}help - Shows this message.
${prefix}submit [word] [explanation] - Submits a word to Discotionary.
${prefix}edit [word] [new explanation] - Edits a word that you've submitted.
${prefix}word [word] - Search a word in Discotionary.
${prefix}report - How to report someone.
${prefix}support - The support server.
${prefix}invite - Invite me!`)
.setFooter(`Created by glassykiller🎄#0001`)
.setColor(`GREEN`)
message.channel.send({embed})
    }
    if(message.content == prefix + 'report') {
        message.channel.send(`For reporting someone, please join our official server by using the +support command.`)
    }

    fs.writeFile("./users.json", JSON.stringify(user), (err) =>
    {
        if (err) console.error(err)
    });
    fs.writeFile("./words.json", JSON.stringify(dic), (err) =>
    {
        if (err) console.error(err)
    });
});

bot.login(process.env.BOT)


