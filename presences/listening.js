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
  console.log(`\nready!`);
  updatePresence();
});


APPID = "123456789" 
listeningto = "Spotify"
song = "" // song name
artist = ""// artist name
album = "" //album name
songid = '3UnfOb5hmnf4KF7NIgAj9a?si=XSKOLBmMQqiMn8Q-eaSddA' //song id

async function updatePresence() {
  try {
    const r = new Discord.SpotifyRPC(client)  
        .setApplicationId(APPID)
        .setURL("https://www.youtube.com/watch?v=HTp5PH8ot6Q&list=RDGMEMHDXYb1_DDSgDsobPsOFxpA&ab_channel=NightLovell") // dont change anything, the code will break ;-;
        .setDetails(song)
        .setName(listeningto)
        .setState(artist)
        
        .setStartTimestamp(startTimestamp)
        .setEndTimestamp(Date.now() + 1_000 * (2 * 60 + 56)) // Song length = 2m56s
        .setAssetsLargeImage('spotify:1124634087861268492') // check the wiki for tutorial 
        .setAssetsLargeText(album)
        .setSongId(songid) 
          
    client.user.setPresence({ activities: [r.toJSON()] });
  } catch (error) {
    console.error('Failed :', error);
  }

  setTimeout(updatePresence, 30000); 
      }

    
client.login(process.env.TOKEN)
  
