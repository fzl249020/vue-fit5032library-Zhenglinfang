<!-- <template>
    <div class="form">
    <h1>User Information Form / Credentials</h1>
        <form>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br>
            
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br>
            
            <label for="isAustralian">Australian Resident?</label><br>
            <input type="checkbox" id="isAustralian" name="isAustralian"><br>
            
            <label for="reason">Reason For Joining:</label><br>
            <textarea id="reason" name="reason" rows="3"></textarea><br>
            
            <label for="gender">Gender</label><br>
            <select id="gender">
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
            </select>
        </form>
    </div>
</template> -->

<!-- ------------------------------------------------------------------ -->
<!-- <template>
  <div class="container py-4">
    <h1 class="text-center mb-4">User Information Form</h1>


    <div class="row justify-content-center mb-4">
      <div class="col-12 col-lg-10">
        <form @submit.prevent="submitForm">
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="formData.username" />
            </div>
            <div class="col-12 col-md-6">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="formData.password" />
            </div>

            <div class="col-12 col-md-6">
              <div class="form-check mt-2">
                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian" />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select" id="gender" v-model="formData.gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div class="col-12">
              <label for="reason" class="form-label">Reason for joining</label>
              <textarea class="form-control" id="reason" rows="3" v-model="formData.reason"></textarea>
            </div>

            <div class="col-12 text-center">
              <button type="submit" class="btn btn-primary me-2">Submit</button>
              <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
            </div>
          </div>
        </form>
      </div>
    </div>


    <div class="row g-3" v-if="submittedCards.length">
      <div class="col-12 col-sm-6 col-lg-3" v-for="(card, index) in submittedCards" :key="index">
        <div class="card h-100">
          <div class="card-header">User Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
/* Our logic will go here */
import { ref } from 'vue';
  
const formData = ref({
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
});

const submittedCards = ref([]);

const submitForm = () => {
    submittedCards.value.push({
        ...formData.value
    });
};
</script>

<style scoped>
/* Our logic will go here */
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275FDA;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}
</style>
 -->

<template>
  <div class="container py-4">
    <h1 class="text-center mb-4">User Information Form</h1>

    <div class="row justify-content-center mb-4">
      <div class="col-12 col-lg-10">
        <form @submit.prevent="submitForm" ref="formEl">
          <div class="row g-3">
            <!-- Username -->
            <div class="col-12 col-md-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                v-model="formData.username"
                required
              />
            </div>

            <!-- Password -->
            <div class="col-12 col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                minlength="4"
                maxlength="10"
                v-model="formData.password"
              />
            </div>

            <!-- Australian Resident -->
            <div class="col-12 col-md-6 d-flex align-items-center">
              <div class="form-check mt-2 mt-md-4">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">
                  Australian Resident?
                </label>
              </div>
            </div>

            <!-- Gender -->
            <div class="col-12 col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                v-model="formData.gender"
                required
                aria-label="Select your gender"
              >
                <option value="" disabled>Select…</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Reason -->
            <div class="col-12">
              <label for="reason" class="form-label">Reason for joining</label>
              <textarea
                class="form-control"
                id="reason"
                rows="3"
                v-model.trim="formData.reason"
                placeholder="Tell us a bit about why you're joining"
              ></textarea>
            </div>

            <!-- Buttons -->
            <div class="col-12 d-flex flex-column flex-md-row justify-content-center gap-2">
              <button type="submit" class="btn btn-primary w-100 w-md-auto">Submit</button>
              <button type="button" class="btn btn-secondary w-100 w-md-auto" @click="clearForm">
                Clear
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- 你原来的卡片展示（保留） -->
    <div class="row g-3 row-cols-1 row-cols-sm-2 row-cols-lg-4" v-if="submittedCards.length">
      <div class="col" v-for="(card, index) in submittedCards" :key="card.id ?? index">
        <div class="card h-100">
          <div class="card-header">User Information</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Username: {{ card.username }}</li>
            <li class="list-group-item">Password: {{ card.password }}</li>
            <li class="list-group-item">
              Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
            </li>
            <li class="list-group-item">Gender: {{ card.gender }}</li>
            <li class="list-group-item">Reason: {{ card.reason }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 新增：PrimeVue DataTable 展示（Activity 4 要求） -->
    <div class="row mt-4" v-if="submittedCards.length">
      <div class="col-12">
        <DataTable
          :value="submittedCards"
          dataKey="id"
          paginator
          :rows="5"
          :rowsPerPageOptions="[5,10,20]"
          tableStyle="min-width: 60rem"
          class="mb-4"
        >
          <Column field="username" header="Username" sortable />
          <Column field="password" header="Password" />
          <Column header="Australian Resident" :body="row => (row.isAustralian ? 'Yes' : 'No')" sortable />
          <Column field="gender" header="Gender" sortable />
          <Column field="reason" header="Reason" />
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

/* 新增：按需引入 PrimeVue DataTable 组件 */
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const formEl = ref(null);

const formData = ref({
  username: '',
  password: '',
  isAustralian: false,
  reason: '',
  gender: ''
});

const submittedCards = ref([]);
let uid = 1; // 新增：为 DataTable 提供稳定的 dataKey

const submitForm = () => {
  if (!formEl.value.checkValidity()) {
    formEl.value.reportValidity();
    return;
  }

  submittedCards.value.unshift({
    id: uid++,            // 新增：唯一 ID
    ...formData.value
  });

  clearForm();
};

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: ''
  };
};
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275FDA;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}

@media (min-width: 992px) {
  .list-group-item {
    padding: 12px 14px;
    line-height: 1.5;
  }
}
</style>



