<script setup lang="ts">
import { useRouter, RouteLocationRaw } from 'vue-router';

const router = useRouter();

function navigateTo(route: RouteLocationRaw) {
  router.push(route);
}
</script>

<template>
  <v-app-bar app color="white" dark>
    <!-- Logo on the Left -->
    <v-app-bar-title>
      <router-link to="/profil">
        <v-img src="assets/Logo2.png" max-height="55" alt="Logo"></v-img>
      </router-link>
    </v-app-bar-title>

    <!-- Spacer to push items to the right -->
    <v-spacer></v-spacer>

    <!-- Buttons on the Right -->
    <v-btn color="black" @click="navigateTo({ name: 'index' })">Početna</v-btn>
    <v-btn color="black" @click="navigateTo({ name: 'profil' })">Profil</v-btn>
    <v-btn color="black" @click="navigateTo({ name: 'skener' })">Skener</v-btn>
    <v-btn color="black" @click="navigateTo({ name: 'table' })">Tablica</v-btn>
    <v-btn color="black" @click="navigateTo({ name: 'generator' })">Generator</v-btn>
    <v-btn class="login-button" @click="navigateTo({ name: 'login' })">Prijavi se</v-btn>
  </v-app-bar>
</template>

<style scoped>
.bold-text {
  font-weight: bold;
}

.login-button {
  background-color: rgb(54, 134, 255);
  color: white;
  font-weight: bold;
  border-radius: 8px;
}

a:visited {
  color: inherit; /* Keeps the original link color */
  text-decoration: none;
}
</style>