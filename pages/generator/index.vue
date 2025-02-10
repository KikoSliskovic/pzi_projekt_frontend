<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Navbar from '../../components/Navbar.vue';
import axios from 'axios';

// Kreiramo reaktivne varijable za dropdown podatke
const subjects = ref([]);
const professors = ref([]);
const classrooms = ref([]);

// Selektirane vrijednosti
const selectedSubject = ref(null);
const selectedProfessor = ref(null);
const selectedClassroom = ref(null);
const date = ref(new Date().toISOString().slice(0, 10)); // Automatski postavi na danas

onMounted(async () => {
  // Učitaj podatke za dropdown menije
  try {
    const responseProfessors = await axios.get('http://localhost:8000/api/professors');
    professors.value = responseProfessors.data;
  } catch (error) {
    console.error('Error loading data:', error);
  }

  try {
    const responseSubjects = await axios.get('http://localhost:8000/api/subjects');
    subjects.value = responseSubjects.data;
  } catch (error) {
    console.error('Error loading data:', error);
  }

  try {
    const responseClassrooms = await axios.get('http://localhost:8000/api/classrooms');
    classrooms.value = responseClassrooms.data;
  } catch (error) {
    console.error('Error loading data:', error);
  }

});

const generateQRCode = () => {
  console.log('QR Code generation triggered!');
  // You can add logic to generate the QR code here
};

const showImage = ref(false);  // Reactive variable to control visibility of the image
const toggleImage = () => {
  showImage.value = !showImage.value;  // Toggle the value of showImage
}
</script>

<template>
  <Navbar />
  <v-main>
    <div class="background min-h-screen flex flex-col items-center justify-center">
      <div class="box bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
        <!-- Inner Box -->
        <div class="inner-box bg-white-100 p-4 rounded-lg shadow-md mb-15">
          <!-- PNG Image Inside the Inner Box -->
           <!-- Conditionally render the image when showImage is true -->
          <div v-if="!showImage" class="image-container mb-4">
            <img src="C:\laragon\www\Projekt PZI najnovije\pzi_projekt_frontend\assets\2.png" alt="QR-code image" class="inner-box-image" />
          </div>
          <div v-if="showImage" class="image-container mb-4">
            <img src="C:\laragon\www\Projekt PZI najnovije\pzi_projekt_frontend\assets\1.png" alt="QR-code image" class="inner-box-image" />
          </div>
        </div>
        <!-- Rectangles and Labels -->

        <!-- Dropdown meniji u jednom redu -->
        <div class="dropdown-container flex gap-4 w-full">
          
          <v-select 
            v-model="selectedProfessor"
            :items="professors"
            item-title="name"
            item-value="id"
            label="Profesor"
            outlined
            dense
            class="dropdown"
          ></v-select>

          <v-select
            v-model="selectedSubject"
            :items="subjects"
            item-value="id"
            item-title="subject_name"
            label="Kolegij"
            dense
            outlined
            class="dropdown"
          ></v-select>

          <v-select
            v-model="selectedClassroom"
            :items="classrooms"
            item-title="name"
            item-value="id"
            label="Učionica"
            outlined
            dense
            class="dropdown"
          ></v-select>
        </div>

        <!-- Generiraj QR Kod -->
        <div class="rectangle-label-pair mt-4">

          <v-btn @click="toggleImage"  style="background-color: rgb(0, 67, 122);"
            class="rectangleQR mb-2" rounded block>
            <img src="@/assets/dugme_prijava_bijelo.svg" alt="QR Code" class="qr-code-image" />
          </v-btn>

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
  min-height: 700px; 
  box-shadow: 0 8px 150px rgba(0, 0, 0, 0.596);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.inner-box {
  max-width: 320px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Shadow for inner box */
}

.inner-box-image {
  width: 100%;
  max-width: auto;  /* Adjust the size as needed */
  height: auto;
}

.rectangles-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.dropdown-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1%;
}

.dropdown {
  flex: 1; /* Omogućuje da svi dropdowni zauzmu jednaku širinu */
  border-radius: 20px; /* Zaobljeni rubovi */
}

.rectangle-label-pair {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding-top: 3%;
}

.rectangle {
  width: 10px;
  height: 20px;
  background-color: white;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rectangleQR {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;  /* Set a fixed width for a square shape */
  height: 50px; /* Set a fixed height to match the width */
  padding: 0;    /* Remove padding to keep it perfectly square */
  border-radius: 8px; /* Slightly rounded corners */
}

.qr-code-image {
  max-width: 22%;
  max-height: 22%;
  object-fit: contain; /* Ensures the logo fits within the button */
}


.label {
  color: gray;
  text-align: center;
  margin-bottom: 0px;
}

.v-select {
  width: 100%;
}
</style>