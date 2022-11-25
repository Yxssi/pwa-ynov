<template>
  <div class="q-pa-xl">
    <h1>Page tutoriel VUE3</h1>
    <h2>Data & computed</h2>
    <h2>{{ message }}</h2>
    <h2>Reversed message: {{ messageReverse }}</h2>
    <q-btn @click="f" label="Change message"></q-btn>
    <hr />
    <h2>Conditional rendering</h2>

    <q-btn @click="toggleHidden" label="Toggle hidden"></q-btn>
    <div v-if="visible">
      <h3>Hidden values</h3>
    </div>
    <div v-else>
      <h3>Some data are hidden</h3>
    </div>
    <hr />
    <h2>Loops</h2>
    <div v-for="(task, index) in tasks" :key="index">
      <h3>{{task.title}}</h3>
    </div>

    <h2>Inputs</h2>
    <h3>Hello {{name}}</h3>
    <h5>Input text</h5>
    <input type="text" v-model="name">
    <h5>Checkbox</h5>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked {{checked}}</label>
    <h5>Select</h5>
    <select v-model="selected">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
</template>
<script setup>
// Syntax vue3 Composition API
import { ref, computed } from 'vue'

const visible = ref(false)
const message = ref('Hello')
const name = ref('Unknown')
const checked = ref(false)
const selected = ref('')
const tasks = ref([
  { title: 'Task 1' },
  { title: 'Task 2' },
  { title: 'Task 3' }
])

const messageReverse = computed(() => message.value.split('').reverse().join(''))

function f () {
  message.value = 'Test'
}

function toggleHidden () {
  visible.value = !visible.value
}

// watch('message', (val) => {
//   console.log('watched message value', val)
// })
</script>
