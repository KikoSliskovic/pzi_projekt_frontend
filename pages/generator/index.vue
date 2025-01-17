<script setup lang="ts">
import Navbar from '../../components/Navbar.vue'
</script>

<template>
  <Navbar />
  <v-main>
    <div class="background min-h-screen flex flex-col items-center justify-center">
      <div class="box bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <!-- Inner Box -->
        <div class="inner-box bg-white-100 p-4 rounded-lg shadow-md mb-15">
          <!-- Content for the inner box goes here -->
        </div>
        <!-- Rectangles and Labels -->
        <div class="rectangles-container flex flex-col items-center">
          <div class="rectangle-label-pair mb-4">
            <div class="rectangle mb-2"></div>
            <p class="label">Predmet</p>
          </div>
          
          <div class="rectangle-label-pair mb-4">
            <div class="rectangle mb-2"></div>
            <p class="label">Profesor</p>
          </div>
          
          <div class="rectangle-label-pair mb-4">
            <div class="rectangle mb-2"></div>
            <p class="label">Učionica</p>
          </div>
          
          <div class="rectangle-label-pair mb-4">
            <div class="rectangle mb-2"></div>
            <p class="label">Datum</p>
          </div>
        </div>
        <!-- New Rectangle for QR Code Generation -->
        <div class="rectangle-label-pair mt-4">
          <div class="rectangleQR mb-2">
            <img src="@/assets/Logo2.png" alt="QR Code" class="qr-code-image" />
          </div>
          <p class="label">Generiraj QR Kod</p>
        </div>
      </div>
    </div>
  </v-main>
</template>

<style scoped>
.background {
  background-image: url('@/assets/backgroundpattern.png');
  background-size: cover;
  background-position: center;
}

.box {
  max-width: 1000px;
  width: 100%;
  min-height: 600px; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Enhanced shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inner-box {
  max-width: 300px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for inner box */
  margin-bottom: 20px; /* Space between inner box and rectangles */
}

.rectangles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.rectangle-label-pair {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rectangle {
  width: 150px;
  height: 40px;
  background-color: white;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rectangleQR {
  width: 200px;
  height: 50px;
  background-color: white;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.qr-code-image {
  max-width: 100%;
  max-height: 50%;
}

.label {
  color: gray;
  text-align: center;
}
</style>