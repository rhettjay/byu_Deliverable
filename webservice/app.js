const { request } = require('express')
const express = require('express')
const app = express()
const port = 3001
const myHeader = new Headers(); // Currently empty but will eventually include instructions on usage

app.get('/word', (req, res) => {
    var unscrambledWord = getData()
//    var response = scrambleWord(unscrambledWord)

    res.send(response)
})
app.post('/check', (req, res) => {
//   var win = checkWord()
//   if(win) {
//      NumOfApiCalls(win)
//      }
//   response = {
//    Win:"Nope",
//    response: req.body 
//      }
//   storeData
    res.send(response)
  })
app.listen(port, () => {
  console.log(`Express Server Listening on  ${port}`)
})

function getData() {
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await response.json()
  }

/*
function checkWord {
    if(req.body == unscrambledWord) {
        return 0   
    }
    return 1
}
function scrambleWord(word) {
    split word[i]
    for uniq.i in wordarray:
        replace with random c less or equal to word.length
        translate back to letters
    return scambledWord
}
function NumOfApiCalls() {
        switch(called) {
        case 0: 
          return "First try?! Stellar Mind!"
          break;
        case < 3:
          return "Nice Guesswork!"
          break;
        case < 5:
          return "That was a tough one!"
          break;
        case >= 6:
          return "Way to stick with !"
          break;
        }
        }
      */