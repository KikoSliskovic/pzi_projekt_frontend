<script setup lang="ts">

</script>

<template>
  <v-container
      class="d-flex justify-center align-center"
      style="height: 100vh; background-image: url('assets/pozadina.png'); background-size: cover; background-position: center;"
  >    <v-row class="d-flex justify-center align-center" style="width: 100%;">
      <v-col cols="12" style="max-width: 80%">
        <v-card class="pa-13">
          <v-card-title class="text-h5 pb-8">Prijava u sustav</v-card-title>
          <v-card-text>
            <v-form ref="loginForm">
              <v-text-field label="E-pošta" type="email" required></v-text-field>
              <v-text-field label="Lozinka" type="password" required></v-text-field>

            </v-form>
          </v-card-text>
        </v-card>
        <nuxt-link to="/profil">
          <v-img
              src="assets/dugme_prijava.svg"
              max-height="70"
              alt="Logo2"
              style="display: block; margin: auto; margin-top: 20px"
          ></v-img>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>