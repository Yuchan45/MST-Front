<script>
import { BIconX } from 'bootstrap-icons-vue';
export default {
  name: 'Modal',
  components: {
    BIconX,
  },
  props: {
    showExitIcon: { type: Boolean, default: true },
  },
  methods: {
    onCloseModal() {
      this.$emit('onCloseModal');
    },
  },
};
</script>

<template>
  <div
    class="ua-fixed ua-top-0 ua-left-0 ua-w-full ua-h-full ua-z-50 ua-flex ua-items-center ua-justify-center ua-bg-black ua-bg-opacity-70"
  >
    <div class="ua-relative ua-rounded-lg ua-bg-white">
      <button
        v-show="showExitIcon"
        @click="onCloseModal"
        class="ua-absolute ua-top-5 ua-right-0 ua-mr-4 ua-w-6 ua-h-6 ua-flex ua-items-center ua-justify-center ua-rounded-full ua-text-grey-300 hover:ua-bg-grey-200 hover:ua-text-grey-400"
      >
        <BIconX class="ua-w-full ua-h-full"></BIconX>
      </button>
      <slot></slot>
    </div>
  </div>
</template>
