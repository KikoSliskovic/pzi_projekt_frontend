<script setup lang="ts">
import { ref } from 'vue';

const userData = ref([
  { title: 'Korisnička oznaka', text: 'Ante Šimić' },
  { title: 'Datum rođenja', text: '25.2.2003' },
  { title: 'E-mail', text: 'ante.simic@fpmoz.sum.ba' },
  { title: 'Uloga', text: 'Ostalo' },
  { title: 'Organizacija', text: 'FPMOZ' },
  { title: 'Povezanost s ustanovom', text: 'Student' },
  { title: 'Edu-ID', text: 'ante.simic@fpmoz.sum.ba' },
  { title: 'Akademsko zvanje', text: '' },
  { title: 'Akademski stupanj', text: '' },
]);
</script>

<template>
  <Navbar />
  <v-main>
    <div>
      <h1 class="blue-title">Moji podaci EDU-ID (Ante Šimić)</h1>
      <h2 class="ispod-naslova">Profil / Ante Šimić</h2>
      <div class="profile-section">
        <div class="profile-info">
          <div class="profile-picture"></div>
          <div class="gradient-line"></div>
          <a href="https://eduid.sum.ba/cards/be5ebe40-57a1-103b-a181-001994087817" target="_blank">
            <button class="view-card-button">Pogledaj digitalnu iskaznicu</button>
          </a>
        </div>
        <div class="user-data">
          <div v-for="(item, index) in userData" :key="index" class="data-item">
            <h3 class="data-title">{{ item.title }}</h3>
            <div class="data-rectangle">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </v-main>
</template>

<style scoped>
.blue-title {
  color: rgb(23, 97, 255);
  font-size: 2.5em;
  margin-left: 40px;
  margin-top: 20px;
}

.ispod-naslova {
  margin-left: 40px;
  margin-top: 10px;
  font-size: 1em;
  color: gray;
}

.profile-section {
  display: flex;
  justify-content: center;
  margin-top: 70px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 90px; 
}

.profile-picture {
  margin-top: 100px;
  margin-left:4em ;
  width: 150px;
  height: 200px;
  background-color: lightgray;
  border-radius: 15px;
  background-image: url('assets/60111.jpg');
  background-size: cover;
  background-position: center;
}

.gradient-line {
  margin-left: 4em;
  height: 3px;
  background: linear-gradient( rgba(23, 97, 255, 1), rgba(255, 255, 255, 0));
  margin-top: 20px;
  width: 100%;
}

.view-card-button {
  margin-left: 4em;
  display: block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: rgb(23, 97, 255);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.user-data {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px; /* Increased gap */
  margin-left: 2em;
  margin-top: 70px;
}

.data-item {
  width: 200px;
}

.data-title {
  font-size: 1em;
  color: rgb(23, 97, 255);
  margin-bottom: 5px;
}

.data-rectangle {
  width: 120%;
  height: 50px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>  