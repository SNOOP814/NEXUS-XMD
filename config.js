const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VUW2+rRhD+L/tqK+YWY5AiFeMLGOP4BrFdnYcFFrwYFgwLBh/5/bxUqnpJ+5L+xvyECic5OQ/taYqEtDuzmvlm5vvmMyAJzpGBaiB/BmmGS0hRc6R1ioAM+oXvowy0gQcpBDJ4GC2drj6hlH/oZInOq2LiWAlKrN7MKlpjflkabNedzWuWuQOXNkgLJ8LudwKaZshvJddSzsWRnfQ1bA3ympjnhUYnhzreRocoDqUBP1vod+DSRIQ4wyQYpnsUowxGBqrnEGcfg1+P6eY4296vVxvGjLBfeOfp5DAXo6hyCJEEf52vhoeTQpnhx+BPvYPQYUJ+4Rcpz4485ehVu5YUqZ10MnVbBlxYSIN06l0DXtogxwFBnu4hQjGtP9x3Y6wnFV2c8vEoDRivH0PiCL3CYkaORlSdHMp93GFmQzZOPgY8LbPNwTFhtnOWPe5oHHO886LJLDSmy7lzwPHOMe34GBwXzLfA59kbVw7/p+/WSAtSMk9ci8U6twxsr2S33tYQetHEDGGyZu+Pi4GTnEbux+BvQyP0onq3Wc6G2lGDdlIvHH/T9Zi5Vw4Tu8XZ3bR1Xxna4h0+pEX2PZTwrNLd/UraiFt+7EC/MPz5WsLHVcHoxcMmpKWGaOXz1a4qetUuYiAXDrwcl6fasYhljjNp4gthteO9zcJ6sKa6NN4Hd9eKDqjWPSCzlzbIUIBzmkGKE9LYboU2gF65Qm6G6LW7AHZ2qrI7+5g1lkXHHtwXs7DfsaO9NQpGvX5vxJu9QJwohsPcgTZIs8RFeY48Dec0yWoT5TkMUA7kHz+1AUEVfZlbk41n28DHWU4tUqRRAr23ob45oesmBaGrmrhqc0AZkJl3M6IUkyBv2lgQmLl7XCJ1D2kOZB9GOfpaIMqQB2SaFeiraNXEa/pu3du2aKscaIP4Og/sARlwPH/LcEJPYCVB5pgf8ptTExam6Q1BFLQBgc1r8Pz0+Mvz0+Ovz0+PX26enx7/fH56/OnV8Nvr/3vj+OPV0Ri+PD89/vz89PgXaIPoJR0ndgVO4ESWuRW4a8bGcflaaQPMQxTiKAcyUCfiomMy/eG8ZDvucDxWhoGiBgp478wbw15GeOymehl2t/0HC/l+KK65yioUabs9x3mtzyedo7Te306ilDHv/iEIkAHChtohK0T81QPnUnGaSpOuXs8354pPrTDXe2nLms5aps11cHriW2l1MLkpLljzvjw6bqhZ+mFiG5V5qNTWoWIztFVPd002D5XYRd8mO/a9elnbGktUkT3XOTUKWxG3W2KXlo/ZlkNY3tATkWy68+HpNI27tamN9XXaqwZq1Fvy+/zWY5XU7YSJkPimllATn164f9Ve9Lrz8JWWzcybq4/RdYW8zvY/OfACvKEqc2l/E+N1Kf2LsPuwOK6mQitW7EgjvNBipNyeBvOHsXmbmXhQ+93SEtBqB70BuFw+tUEaQeonWQxkkMcOBG2QJUVDfJ34yXcyqUqgK6+Sj2BOlXcxrXGMcgrjFMisKPQkiRE54eXVPEtSDeZ7IAMS832nEUatpOmKQvomTaA031gqweVvs9TVPbUHAAA=",
// add your Session Id 
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
BOT_NAME: process.env.BOT_NAME || "✦ MNC ✦ XMD ✦",
// add bot namw here for menu
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "233534533671",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "✦ SHNOOP ✦ RHOCKY ✦",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ✦ MNC ✦ XMD ✦*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/BKYt9f00/hanstz.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> NEXUS IS SPARKING ACTIVE AND ALIVE\n\n\nKEEP USING NEXUS XMD FROM NEXUS TECH INC⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "*🎉👀 Seen by NEXUS XMD 🚀🔥🍀🔥💰🎂‼️☪️❄💧🧿🎯🎈*",
// set the auto reply massage on status reply    
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 
OWNER_REACT: process.env.OWNER_REACT || "false",
// make it true or fasle for only react on owner msg only 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
