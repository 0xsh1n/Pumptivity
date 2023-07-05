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
NAME = "Github"
details = "hallo"
state = "hi"
largeimage = "https://cdn.discordapp.com/attachments/806789987458220072/1125559582291411124/d6481e44f1caef01dc9318e82c2b7d03.gif" 
largeimagetext = "hi"
small_image = "https://cdn.discordapp.com/attachments/806789987458220072/1125448607584239776/IMG_20230626_025236_715.jpg"
button_name = "Github"
button_link = "https://github.com/FriendlyPumpkin"
async function updatePresence() {
  try {
    
    const rpc = new Discord.RichPresence()       
        .setApplicationId(APPID)
        .setType('STREAMING')
        .setURL("https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell")
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

