<script setup lang="ts">
import { ref, computed } from 'vue'
import Navbar from '../../components/Navbar.vue'

const columns = [{
  key: 'predmet',
  label: 'Subject'
}, {
  key: 'status',
  label: 'Status'
}, {
  key: 'classroom',
  label: 'Classroom'
}, {
  key: 'date',
  label: 'Date'
}, {
  key: 'professor',
  label: 'Professor'
}]

const people = [{
  id: 1,
  predmet: 'PZI',
  status: 'Prisutan',
  classroom: '108',
  date: '2024-10-01',
  professor: 'T.Volarić'
}, {
  id: 2,
  predmet: 'UMJETNA INTEL.',
  status: 'Pristuan',
  classroom: '108',
  date: '2024-10-02',
  professor: 'T.Volarić'
}, {
  id: 3,
  predmet: 'PROGRAMIRANJE',
  status: 'Odsutan',
  classroom: '108',
  date: '2024-10-03',
  professor: 'T.Volarić'
}, {
  id: 4,
  predmet: 'MATEMATIKA 2',
  status: 'Pristuan',
  classroom: '108',
  date: '2024-10-04',
  professor: 'T.Volarić'
}, {
  id: 5,
  predmet: 'KDM',
  status: 'Pristuan',
  classroom: '108',
  date: '2024-10-05',
  professor: 'T.Volarić'
}]

const subjects = ['All', 'PZI', 'UMJETNA INTEL.', 'PROGRAMIRANJE', 'MATEMATIKA 2', 'KDM']
const selectedSubject = ref('All')

const filteredPeople = computed(() => {
  if (selectedSubject.value === 'All') {
    return people
  }
  return people.filter(person => person.predmet === selectedSubject.value)
})
</script>

<template>
  <Navbar />
  <v-main>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>
              <label for="subject-select">Subject</label>
              <select id="subject-select" v-model="selectedSubject">
                <option v-for="subject in subjects" :key="subject" :value="subject">{{ subject }}</option>
              </select>
            </th>
            <th v-for="column in columns.slice(1)" :key="column.key">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="person in filteredPeople" :key="person.id">
            <td>{{ person.predmet }}</td>
            <td>{{ person.status }}</td>
            <td>{{ person.classroom }}</td>
            <td>{{ person.date }}</td>
            <td>{{ person.professor }}</td>
          </tr>
        </tbody>
      </table>
      <div class="logo-container">
        <img src="@/assets/Logo2.png" alt="Logo" class="logo">
      </div>
    </div>
  </v-main>
</template>

<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: -50px;
}

table {
  width: 80%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
}

th {
  background-color: #f2f2f2;
  text-align: left;
}

select {
  margin-left: 8px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.logo-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 100px;
  margin-top: 50px; 
}
</style>