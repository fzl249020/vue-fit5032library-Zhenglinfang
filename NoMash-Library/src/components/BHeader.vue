<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAuthenticated = ref(false)
const username = ref('')

// Check auth status when component mounts
onMounted(() => {
  updateAuthStatus()
  // Add event listener for storage changes
  window.addEventListener('storage', updateAuthStatus)
})

const updateAuthStatus = () => {
  isAuthenticated.value = localStorage.getItem('isAuthenticated') === 'true'
  username.value = localStorage.getItem('username') || ''
}

const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('username')
  updateAuthStatus()
  router.push('/login')
}
</script>

<template>
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active" aria-current="page">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="active">
            About
          </router-link>
        </li>
      </ul>

      <div v-if="isAuthenticated" class="d-flex align-items-center">
        <span class="me-3">Welcome, {{ username }}!</span>
        <button @click="logout" class="btn btn-outline-danger">Logout</button>
      </div>
      <div v-else>
        <router-link to="/login" class="btn btn-primary">Login</router-link>
      </div>
    </header>
  </div>
</template>

<style scoped>
.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.form-control-dark {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: var(--bs-gray);
}
.form-control-dark:focus {
  color: #fff;
  background-color: var(--bs-dark);
  border-color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.25);
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.text-small {
  font-size: 85%;
}

.dropdown-toggle {
  outline: 0;
}
</style>
