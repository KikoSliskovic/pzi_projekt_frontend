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
}




.gradient-line {
  width: 50%;
  height: 2px;
  background: linear-gradient(#23a6d5, #23d5ab);
  margin-bottom: 20px;
}

.view-card-button {
  background-color: #23a6d5;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.user-data {
  width: 100%;
}

.data-item {
  margin-bottom: 15px;
}

.data-title {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.data-rectangle {
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
}

/* za mobitel */
@media (max-width: 600px) {
  .profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 0;
}

.profile-picture {
  width: 150px;
  height: 200px;
  background-color: #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-image: url('assets/60111.jpg');
  background-size: cover;
  background-position: center;
}
}

/* za vece od mobitela */
@media (min-width: 768px) {
  .user-data {
    width: 70%;
  }

  .profile-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.profile-info {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-right: 20; /* Reset the left margin */
  justify-content: center; /* Center the content */
  align-content: center;
}

.profile-picture {
  width: 150px;
  height: 200px;
  background-color: #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  background-image: url('assets/60111.jpg');
  background-size: cover;
  background-position: center;
}
}
</style>