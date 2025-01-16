<script setup lang="ts">

</script>

<template>
  <v-app-bar app color="primary" dark>
    <!-- Logo on the Left -->
    <v-app-bar-title>
      <v-img src="assets/logo.png" max-height="40" alt="Logo"></v-img>
    </v-app-bar-title>

    <!-- Spacer to push items to the right -->
    <v-spacer></v-spacer>

    <!-- Buttons on the Right -->
    <v-btn color="white" @click="navigateTo({ name: 'index' })">Početna</v-btn>
    <v-btn color="white" @click="navigateTo({ name: 'profil' })">Profil</v-btn>
    <v-btn color="white" @click="navigateTo({ name: 'login' })">Prijavi se</v-btn>
  </v-app-bar>
</template>

<style scoped>
a:visited {
  color: inherit; /* Keeps the original link color */
  text-decoration: none;
}
</style>