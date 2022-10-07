<template>
  <v-container>
  <v-row no-gutters>
    <v-col>
      <v-card>
      <blockquote class="blockquote">
       Unscamble the following word:
       <!--input a string here from a dictionary run by the heroku api-->
      </blockquote>
      </v-card>
  </v-col>
  <v-col
  cols="6" 
  md="0"
  >
  <!--ask for input from the user-->
  <v-form v-model="valid">
          <v-text-field
            v-model="Input"
            :rules="nameRules"
            :counter="12"
            label="Guess"
            required
          ></v-text-field>
          <v-btn color="primary">Check</v-btn> 
   </v-form>
  </v-col>
  </v-row>
<v-row>
  <v-col>
    <!--
      Add the guessed input here via a .js function
      pseudocode for function:
    -->
  </v-col>
</v-row>
  </v-container>
</template>

<!--script>
export default {
  name: 'anagrampage',
}
var called = 0
function callAPI(){
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://random-word-api.herokuapp.com/word', true)

request.onload = function () {
  var data = JSON.parse(this.response)
}
// Send request
request.send()

called ++
}
function CheckAPI() {
  if(response != word) {
        WriteLine "Would you like to try again?"
        Add new checkbox (maybe in form of message box) to ask if they would like to play again
        if(continue) {
          RestartPage() 
        }
        return "Thanks for playing"
      }
      AddInputStringBelowInputQuote()
    }
  }

</script-->
