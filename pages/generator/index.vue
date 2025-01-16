<script setup lang="ts">

</script>

<template>
  <Navbar />
  <v-main>
    <div class="flex min-h-screen">
      <!-- Left Side: Form -->
      <v-row>
        <div class="col-6">
          <h1 class="font-bold mb-5">Form Title</h1>
          <form class="flex space-x-4">
            <!-- Dropdown Menu Example -->
            <div class="w-1/2">
              <label class="block text-sm font-medium mb-1">Dropdown Menu</label>
              <select class="w-full px-3 py-2 border rounded-md">
                <option value="" disabled selected>Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </select>
            </div>

            <!-- Input Field Example -->
            <div>
              <label class="block text-sm font-medium mb-1">Input Field</label>
              <input type="text" class="w-full px-3 py-2 border rounded-md" placeholder="Enter text"/>
            </div>
          </form>
        </div>

        <!-- Right Side: QR Code -->
        <div class="col-6">
          <div class="border p-4 text-center">
            <!-- Placeholder for QR Code -->
            <p class="text-gray-500">QR Code will appear here</p>
          </div>
        </div>
      </v-row>
    </div>
  </v-main>
</template>

<style scoped>

</style>