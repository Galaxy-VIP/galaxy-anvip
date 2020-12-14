const Discord = require('discord.js');
const HangmanGame = require('hangcord');

module.exports = {
    name: 'hangman',
    description: 'Who want to play hangman???',
    usage: '',
    guildOnly: false,
    category: 'Game',
    run(client, message, args) {
       const hangman = new HangmanGame({
  title: 'Hangman',
  color: 'RANDOM',
  timestamp: true,
  gameOverTitle: 'Game Over'
}); 

  hangman.newGame(message);
    }
}