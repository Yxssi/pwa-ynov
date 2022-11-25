<template>
  <div class="q-pa-xl">
    <h2>Async hook</h2>
    {{result}}
    <div v-if="loading">Result are loading wait a bit</div>
    <div v-else>
      {{result}}
    </div>
    <hr>
    <h1>Page tutoriel</h1>
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
<script>
// Syntax vue2 Option API
export default {
  data: () => ({
    visible: false,
    message: 'Hello',
    name: 'Unknown',
    checked: false,
    selected: '',
    tasks: [
      { title: 'Task 1' },
      { title: 'Task 2' },
      { title: 'Task 3' }
    ],
    result: [],
    loading: false
  }),
  mounted () {
    console.log('Component mounted')
  },
  async created () {
    console.log('Component created')
    await this.loadResult()
  },
  computed: {
    messageReverse () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    f () {
      this.message = 'Test'
    },
    async loadResult () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.result = [
          { title: 'Task 1' },
          { title: 'Task 2' },
          { title: 'Task 3' }
        ]
      }, 2000)
    },
    toggleHidden () {
      this.visible = !this.visible
    }
  },
  watch: {
    message (oldVal, newVal) {
      console.log(oldVal, newVal)
    }
  }
}
</script>
