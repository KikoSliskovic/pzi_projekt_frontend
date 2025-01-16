<script setup lang="ts">

import { ref } from 'vue'
const message = ref("Hello, world!")

</script>


<template>
  <Navbar />
  <v-main>
    <div class="fill-height" style="background-color: darkgray">
      <v-container>
        <v-row>
          <v-col>
            <div class="tw-text-red-800 tw-text-3xl">{{ message }}</div>

            <br>

            <nuxt-link to="/profil"> Profil </nuxt-link>
            <br>
            <nuxt-link to="/login"> Login </nuxt-link>
            <br>
            <nuxt-link to="/skener"> Skener </nuxt-link>
            <br>
            <nuxt-link to="/generator"> Generator </nuxt-link>

          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>


<style scoped>



</style>