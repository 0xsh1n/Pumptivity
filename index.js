const colors = require('ansi-colors'); 
const express = require('express');   
   const app = express();   
  
   app.get('/', (req, res) => {   
       res.send('working');   
   });   
  
   const PORT = process.env.PORT || 3000;   
   app.listen(PORT, () => {   
       console.log('Server is running on port ' + PORT);   
   });

 const scriptAuthor = 'pumpkin.dnd'; 
  
  
 function getRandomColor(allColors) { 
     const randomIndex = Math.floor(Math.random() * allColors.length); 
     return allColors[randomIndex]; 
 } 
  
 function main() { 
     const allColors = [ 
         colors.red, 
         colors.cyan, 
         colors.cyanBright, 
         colors.blueBright, 
         colors.cyanBright, 
         colors.magentaBright, 
         colors.yellowBright 
     ]; 
  
     const color = getRandomColor(allColors); 
     
     console.log('\n')
  
     const pattern = 
         "  _      __ ___ _          _   _   _ \n" + 
         " /  | | (_   | / \\ |\\/|   |_) |_) /  \n" + 
         " \\_ |_| __)  | \\_/ |  |   | \\ |   \\_  \n" + "\n" + " Made by kinxyz/pumpkin.dnd"; 
  
     const lines = pattern.split("\n"); 
  
     const bracketColor = color.red('['); 
     const secbracketColor = color.red(']'); 
     const exclamationColor = color('!'); 
  
   for (const line of lines) { 
         console.log(color(line)); 
 } 
     console.log(`\n ${bracketColor}${exclamationColor}${secbracketColor} Which presence would you like to start?\n\n ${bracketColor}${colors.red('1')}${secbracketColor}${color.yellow(' Playing Status')}\n ${bracketColor}${colors.red('2')}${secbracketColor}${color.yellow(' Listening Status')}\n ${bracketColor}${colors.red('3')}${secbracketColor}${color.yellow(' Streaming Status')}`); 
  
 } 
  
 main(); 
  
  
 const readline = require('readline'); 
 const rl = readline.createInterface({ 
     input: process.stdin, 
     output: process.stdout 
 }); 
  
 rl.question(' > ', (status) => { 
     rl.close(); 
  
     if (status == 1) { 
         console.clear(); 
         require('./presences/playing.js'); 
     } else if (status == 2) { 
         console.clear(); 
         require('./presences/listening.js'); 
     } else if (status == 3) { 
         console.clear(); 
         require('./presences/streaming.js'); 
     } else { 
         console.log(`[${colors.red.bold('-')}] Invalid option, Select Options First!`); 
         process.exit(); 
     } 
 }); 
  
  
 if (scriptAuthor !== 'pumpkin.dnd') { 
   console.log('\x1b[31mUnauthorized access!\x1b[0m'); 
   let counter = 5; 
   console.log('\x1b[33mClosing Script...\x1b[0m');  
   const countdownInterval = setInterval(() => { 
     if (counter === 0) { 
       clearInterval(countdownInterval); 
       process.exit(0); 
     } else { 
       console.log(`\x1b[33m${counter}\x1b[0m`); 
       counter--; 
     } 
   }, 1000); 
 } 