<template>
  <v-app-bar app>
    <v-toolbar-title class="d-none d-md-flex">
      <img class="slika" src="@/assets/Logo2.png" alt="Logo" >
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn class="d-none d-md-flex" color="black" @click="navigateTo({ name: 'profil' })">Profil</v-btn>
    <v-btn class="d-none d-md-flex" color="black" @click="navigateTo({ name: 'skener' })">Skener</v-btn>
    <v-btn class="d-none d-md-flex" color="black" @click="navigateTo({ name: 'table' })">Tablica</v-btn>
    <v-btn class="d-none d-md-flex" color="black" @click="navigateTo({ name: 'generator' })">Generator</v-btn>
    <v-btn class="d-none d-md-flex login-button" @click="navigateTo({ name: 'login' })">Prijavi se</v-btn>
    <v-btn class="d-md-none" icon @click="drawer = !drawer">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" app temporary>
    <v-list>
      <v-list-item @click="navigateTo({ name: 'profil' })">Profil</v-list-item>
      <v-list-item @click="navigateTo({ name: 'skener' })">Skener</v-list-item>
      <v-list-item @click="navigateTo({ name: 'table' })">Tablica</v-list-item>
      <v-list-item @click="navigateTo({ name: 'generator' })">Generator</v-list-item>
      <v-list-item @click="navigateTo({ name: 'login' })">Prijavi se</v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.slika {
  margin-left: 50px !important;
  height: 50px !important;
}

.d-none {
  margin-right: 10px;
}

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

@media (max-width: 250px) {
  .d-none {
    display: none !important;
  }
  .d-md-flex {
    display: flex !important;
  }
}
</style>