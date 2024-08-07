//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://zokou_database_vs87_user:MKi0YI45cGK893rYVMQvNqbNOFnXURge@dpg-cqjndk2j1k6c739vqf8g-a.oregon-postgres.render.com/zokou_database_vs87";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "24165506084";
global.owner = process.env.OWNER_NUMBER || "24165506084";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBGVUJoZ2lnNjNHbFk3U0kzQVhmU25iOTRxSFRBSCtMU0YzdVNtQkVtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVit1QkVIeFcvbDRNTDZUUVhXb3lwaGxvVFNqd3U0UzhGRzNkRTUzdXh3ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRnVlblpydzd6QWt5bjRkeEUxUTZGTi9QSXFUR3JwSTJVV3lRWWFNNm1RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjYU95REM1cmdyZXFOTWJQT2UrdVVnRk9abi9TUVRCYWJsQVpsYWIvd2hBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktJV1dhMk5STGNyT3F3ZWtXMytlWW8zbDNhSjNDT0xPb0t5QkxzSmRjRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhnZTk3dnRmRVp1S0Jtc2taZVlpVkt1bTRVWkZxc2hCS2xicldYVXMzRUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0s5QlN1c1pvQ1Y0MmVtbU5PcUJEUFhNRUx6anUxdG4rVVpoNW9YbHBuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMytTYXlnckRQaXlzRjZtcjhkQVNBWElHWk9PcDNpZTN1UXk1STE5VmZXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5pZEk2Mk1NL0gwd1AvSUNKbC9ZNUNSL0VrRzc3cTJnTGZnR1VlYWpXMU9VMHYvME1xUkhYSGJSZzJrUVY2aXlnWnU1aTYyT2xKbC80dllqRmJpVWdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMzLCJhZHZTZWNyZXRLZXkiOiJPQTZ3ejZRcDZuZDlVKysvY0NadVpBbkdURFZWcm9OeDdpUWFHbG94cURrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzVUduWVFhNFNYeXZXaHZhUnJSckd3IiwicGhvbmVJZCI6IjdlZTU0ZDYwLWJlN2ItNDlkZC05MDBhLTAzZTc4ODI2NzM2NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNN0g5UWtmZDltcno5T3BtM0NEcEdhcTlNNmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGFxVGlpN0c5LzFIeTZobzRWQzV1UlRZNXVRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldGM1o4TEM5IiwibWUiOnsiaWQiOiIyNDM4MjgyMjY0NDk6NjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tXNm02QURFSjZBdmJVR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InltNDdselhNcTR3dFB1RGhkWWcxclNEdXd3RVVkWkViN0p3d0lXaU9jRWs9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZBWFRXK2drZDVLeUhxSVVaa293TTJ4eHVQTEo5blBSRW9XNlNKZVZCTktkZWJFM1RZTzhSWkFqYndUTmg0eVR2TUtKckFpaGEvZmREQVphcC9TYkFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJuNml2dUxpSWk1MDZCaWtDSWRrd3ZkU3huTUNJU1kwcU15bDVYMEs4eDhuNExiM0EzSGF5SlQrOFFZVDVZK1d1VlIyU3FiOW5OODNMVDRTVmZXdlZoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzgyODIyNjQ0OTo2MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjcHVPNWMxekt1TUxUN2c0WFdJTmEwZzdzTUJGSFdSRyt5Y01DRm9qbkJKIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNzYxMjU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUsyRiJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "l'éternel inconnu ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
