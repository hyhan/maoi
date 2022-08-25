<script lang="ts">
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import 'uno.css'

type ButtonSize = 'large' | 'medium' | 'small'
const props = {
  size: {
    type: String as PropType<ButtonSize>,
    default: 'medium',
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'blue',
  },
  icon: {
    type: String,
    default: '',
  },
}

export default defineComponent({
  name: 'MButton',
  props,
  setup(props) {
    const sizeMap = {
      small: {
        x: 2,
        y: 1,
        text: 'sm',
      },
      medium: {
        x: 3,
        y: 1.5,
        text: 'base',
      },
      large: {
        x: 4,
        y: 2,
        text: 'lg',
      },
    }

    const getClass = computed(() => {
      const { color, size, plain, round } = props
      return `
          py-${sizeMap[size].y}
          px-${sizeMap[size].x}
          ${round ? 'rounded-full' : 'rounded-lg'}
          bg-${color}-${plain ? '100' : '500'}
          hover:bg-${color}-400
          border-${color}-${plain ? '500' : '500'}
          cursor-pointer
          border-solid
          text-${plain ? `${color}-500` : 'white'}
          text-${sizeMap[size].text}
          hover:text-white
          transition duration-300 ease-in-out transform
          mx-1
          `
    })

    return {
      getClass,
    }
  },
})
</script>

<template>
  <button :class="getClass">
    <i v-if="icon !== ''" :class="`i-ic-baseline-${icon} p-3`" />
    <slot />
  </button>
</template>
