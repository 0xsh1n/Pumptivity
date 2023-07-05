require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});

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
NAME = "" // make the name and details the same
details = "" // make the name and details the same
state = "" // state
largeimage = "" // image link
largeimagetext = "" //text below state
small_image = "" //small image, remove this with .setAssetSmallImage below if you dont want :)
button_name = "button"
button_link = "https://link.com"
async function updatePresence() {
  try {
    
    const rpc = new Discord.RichPresence()       
        .setApplicationId(APPID)
        .setType('STREAMING')
        .setURL("https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell") //only works with yt link
        .setDetails(details)
        .setName(NAME)
        .setState(state)
        
        .setStartTimestamp(startTimestamp)
        .setAssetsLargeImage(largeimage)
        .setAssetsLargeText(largeimagetext)
        .setAssetsSmallImage(small_image)
        .addButton(button_name, button_link)
        
          
    client.user.setPresence({ activities: [rpc.toJSON()] });
  } catch (error) {
    console.error('Failed :', error);
  }

  setTimeout(updatePresence, 30000); 
      }

    
client.login(process.env.TOKEN)

