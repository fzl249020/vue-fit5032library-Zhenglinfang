<script setup>
import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import LibraryRegistrationForm from './views/HomeView.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <BHeader />
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style>
/* Global container styles */
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

/* Common card styles */
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

/* Form element focus styles */
.form-control:focus,
.form-check-input:focus {
  border-color: #275fda;
  box-shadow: 0 0 0 0.25rem rgba(39, 95, 218, 0.25);
}
</style>
