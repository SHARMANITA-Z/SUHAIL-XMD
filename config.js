const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_29_10_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTE5LFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxLFxuICAgICAgICAxNzksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDU4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjksXG4gICAgICAgIDQzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVElnUlhPUEVDeko4RDNsZzdyS0ZmaTR6V3VCcm4zalB4dDlwOEM0a2tnQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTkgyb2NEQU9RdkM1Y2pObmFKNW85QVwiLFxuICBcInBob25lSWRcIjogXCJmYzQ5NTRhMy0zYjE5LTRkNzQtYjkzMS0xZjkyNzc0YWUyMWFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgMTEsXG4gICAgICAxNjksXG4gICAgICA3OCxcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDE5NSxcbiAgICAgIDEzMSxcbiAgICAgIDE2MCxcbiAgICAgIDQ2LFxuICAgICAgMjI3LFxuICAgICAgMjAyLFxuICAgICAgNTgsXG4gICAgICA3NixcbiAgICAgIDc2LFxuICAgICAgNDAsXG4gICAgICAxNDgsXG4gICAgICAxMjYsXG4gICAgICA3NixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzEsXG4gICAgICAxNjQsXG4gICAgICA5OCxcbiAgICAgIDI4LFxuICAgICAgOTYsXG4gICAgICA0MyxcbiAgICAgIDYsXG4gICAgICAxOTgsXG4gICAgICAxOTEsXG4gICAgICAxMzIsXG4gICAgICAyNixcbiAgICAgIDE3NyxcbiAgICAgIDcsXG4gICAgICA3MixcbiAgICAgIDIzNCxcbiAgICAgIDI0NSxcbiAgICAgIDE3MCxcbiAgICAgIDE1LFxuICAgICAgMTI0LFxuICAgICAgMjI1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxDUTdEWUpOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDE1MzQ3NzcyOjk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MzMxNjYwOTIzMzA1Nzo5NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTEJoNlFERVArdGlya0dHQWtnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitXSjI1bitLOFo3Z2grMVlKaXpTRjkzLzN1YkVSemJnRWRvdkMraDdDU1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM2tEMVVTVUdVeHhwRUlzOStnWUZGTi9POXN1Ri9QYzdGUEJiUzNTK0d4Nzh1WEpUb1dyOGlwRXN0a2VHSjRiOXVkc1hpS3dEM0IrRUM4cWxjQVZaQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmVKZmxBdE9DZ08ybUtIdisyZVhPSTA3NXNrWms5UWt5U2VwMVFQS1lFRkpYQWxPRXZtNDBqcHpFaHdmdUE0K3I3SU9ySitEbHFyTTk4TEFUQ2Q3akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAxNTM0Nzc3Mjo5NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMzIwMTMxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRW1oXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFbWguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuVmViZ1l0eUQrTFhreXpxeWhWZk83Z1g2NGFtY2NDc0tuTEQrUHBVU0p3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg4MDkyNjkyOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
