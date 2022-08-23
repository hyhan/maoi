<script lang="ts">
import { computed, defineComponent } from 'vue'
import 'uno.css'

export default defineComponent({
  name: 'MButton',
  setup(props) {
    const getClass = computed(() => {
      return 'py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 border-none cursor-pointer'
    })
    return {
      getClass,
    }
  },
})
</script>

<template>
  <button :class="getClass">
    <slot />
  </button>
</template>
