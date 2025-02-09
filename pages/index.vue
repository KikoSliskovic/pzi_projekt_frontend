<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const lectures = ref([]);

const fetchData = async () => {
  try {
    const [lecturesRes, ] = await Promise.all([
      axios.get("http://localhost:8000/api/lecture"),
    ]);

    lectures.value = lecturesRes.data;
  } catch (error) {
    console.error("Greška pri dohvaćanju podataka:", error);
  }
};

onMounted(fetchData);
</script>


<template>
  <Navbar />
  <v-main>
    <div class="fill-height" style="background-color: lightblue">
      <v-container>
        <v-row>
          <v-col>
            <nuxt-link to="/profil"> Profil </nuxt-link>
            <br>
            <nuxt-link to="/login"> Login </nuxt-link>
            <br>
            <nuxt-link to="/skener"> Skener </nuxt-link>
            <br>
            <nuxt-link to="/generator"> Generator </nuxt-link>
            <br>
            <nuxt-link to="/table"> Tablica </nuxt-link>
            <br>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-main>
</template>


<style scoped>

h1, h2 {
  text-align: center;
  margin-bottom: 10px;
}

</style>