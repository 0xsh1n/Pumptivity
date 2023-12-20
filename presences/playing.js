
const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    checkUpdate: false
});

let startTimestamp = Date.now();
client.on('ready', () => {
  console.log(`ready!`);
  updatePresence();
});


APPID = "123456789" 
NAME = "" //name of the game
details = "" //details
state = "" // state
largeimage = "" // large img
largeimagetext = "hi" //you can keep this
button_name = "button"
button_link = "https://link.com"
async function updatePresence() {
  try {
    
    const rpc = new Discord.RichPresence()       
        .setApplicationId(APPID)
        .setType('PLAYING')
        .setURL("https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell") // twitch/yt url
        .setDetails(details)
        .setName(NAME)
        .setState(state)
        
        .setStartTimestamp(startTimestamp)
        .setAssetsLargeImage(largeimage)
        .setAssetsLargeText(largeimagetext)
        .addButton(button_name, button_link)
        
          
    client.user.setPresence({ activities: [rpc.toJSON()] });
  } catch (error) {
    console.error('Failed :', error);
  }

  setTimeout(updatePresence, 30000); 
      }

    
client.login(process.env.TOKEN)
    
