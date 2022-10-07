<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <!--v-card class="logo py-4 d-flex justify-center">
        <!NuxtLogo />
        <VuetifyLogo />
      </v-card-->
      <v-card>
        <v-card-title class="headline">
          Welcome to Anagrams!
        </v-card-title>
        <v-card-text>
          <p>
            Instructions: It looks like we're a little disorganized right now!
            We need your help unscrambling the WORD below. Place your guess in the box provided on the next page and click the "Guess" box to see if you were correct!
          </p>
          <p>
            Press "Continue" to start the game!
          </p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/anagram"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
