<template>
  <div>
    <h1>Redis Example</h1>
    
    <div>
      <h2>Set Key/Value</h2>
      <input v-model="key" placeholder="Key">
      <input v-model="value" placeholder="Value">
      <button @click="setKeyValue">Set</button>
    </div>
    
    <div>
      <h2>Get Value</h2>  
      <input v-model="getKey" placeholder="Key">
      <button @click="getValue">Get</button>
      <p>Value: {{getResult}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: '',
      value: '',
      getKey: '',
      getResult: ''
    }
  },
  
  methods: {
    async setKeyValue() {
      await $fetch('/api/redis', {
        method: 'POST',
        body: { key: this.key, value: this.value }
      })
      this.key = ''
      this.value = ''
    },
    
    async getValue() {
      const { value } = await $fetch(`/api/redis?key=${this.getKey}`) 
      this.getResult = value
      this.getKey = ''
    }
  }
}
</script> 