const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "true" ;  
global.video= "true" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/kingjux/Venocyber-md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaJmfmTDJ6H7CmuBss0o" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349153355436";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "true",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "in d studios " ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "anybody";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "anybody";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "anybody";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU95OVdiL3M5MThjZXB2MSszdWZjU0dZdk85ZDlwQTFpWkhPOUhIZDZWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUll3bUJwWDYrUUg1QkYvVTRXWUV3dEhZWWYvamg5N2ZWa3JybFFJMUhFST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTRWNOdkpGN09mUWVTZVVORGxiaGZlMWV2KzZOV2p2UXNvN1luTkxBMjNnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGM3h4NDRkNTZRUmk3RGZwNlJzYUhVY29wM1pHbFJDOXdiTHNMNW9maUZBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndISWMwMTY1TDFuYStoYmtWWE9oK3k1dnZOSCtFb01wcnZyVmZsMWgxWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp6THJNTW4xYjVYMWJLRWl3V2IvUmI5UUVBbTBOQjNKbFZsVVpoMU00bWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOExYbDI3SENLckRwUWNRL21ESmlKL1RrUFJTM3pQVTI1bVZodEorS0RIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVhjNElJVm1UbCs2ZytsamEzcTVWTjBPZjhnKzMrNGUySVRHalFmWGlpTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZQazBKdCtudS8xcHhIaDhyZmF4dzg5WHc0Vmo3dnQ3bm9LaWZIS1lSTExkbUtRSW1VamhIZ2xVSU1rUHRTMjdleE5FTmZXMW1PdjduTVUwVDhCckFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJyeXY0TC9PNnRaeUVJanQrVGUyMk8xYTcyNkRHaWMycmFKQjNGTWJzUmhRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBSk1aWW1UVVN1ZUNiNGxFLW5EVDNBIiwicGhvbmVJZCI6ImRiNWI0ZjJmLTE1ODktNGM4Mi05Mjk1LTk3YjU5MjczZWQ1OSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZDlUczBla2l0Q2hsL3ZrNzRYSnlYbmI0Zzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmhjTVEwY3VJSCtTTUFqck4zNVkzS201TG8wPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IloxUUg3U0dHIiwibWUiOnsiaWQiOiIyMzQ5MTUzMzU1NDM2OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2hhbXNoaW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xcW12d0VFTTZkcmJFR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRmSEFxRGpFYzJXKzJpb3NYQ2NsZUdHT1VOVjltaFpjNGorbkJ4dTdFbVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkN4YUVRdmtJSG5RZmtJYjR5OWluMVhHcGJmM0dTQjRDLzk1c0dQV2dmUUNiZG1yRDZGd2o1dEM1aWQ3QkR5aUZwZHIwRC9qSTZOaFMyVXlrbGVCWUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI4NCt4MUlzdzJua2hjUk5QeXk4cFFzdFdqald6YmZnNlFqNHZUNGFCbUhCWGxtdDcwUkJHV1F6U2tGejYxUHRhV0VuaDZlWExDM000V2FFSWs0ZkZEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTMzNTU0MzY6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVM3h3S2c0eEhObHZ0b3FMRnduSlhoaGpsRFZmWm9XWE9JL3B3Y2J1eEpsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE0MTE0MjY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpKaSJ9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "©²⁰²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝛁𝚵𝚴𝚯𝐂𝐘𝚩𝚵𝚪-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝛁𝚵𝚴𝚯𝐂𝐘𝚩𝚵𝚪 𝚳𝐃",
  ownername:process.env.OWNER_NAME|| "It's Venocyber",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "VENOCYBER",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
 
