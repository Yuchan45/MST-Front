<script>
import { BIconPencil, BIconTrash } from 'bootstrap-icons-vue';

export default {
  name: 'ActionIcons',
  props: {
    values: { type: Array, default: () => [] },
    showDeleteOnly: Boolean,
  },
  components: {
    BIconPencil,
    BIconTrash,
  },
  methods: {
    onCLickEdit() {
      this.$emit('onCLickEdit');
    },
    onCLickDelete() {
      this.$emit('onCLickDelete');
    },
  },
};
</script>

<template>
  <div class="ua-flex ua-gap-3">
    <button
      v-show="!showDeleteOnly"
      @click="onCLickEdit"
      class="ua-w-7 ua-h-7 ua-flex ua-items-center ua-justify-center ua-rounded-full hover:ua-bg-grey-200"
    >
      <BIconPencil class="ua-h-5 ua-w-5 ua-text-grey-400"></BIconPencil>
    </button>
    <button
      @click="onCLickDelete"
      class="ua-w-7 ua-h-7 ua-flex ua-items-center ua-justify-center ua-rounded-full hover:ua-bg-red-100 hover:ua-bg-opacity-40"
    >
      <BIconTrash class="ua-h-5 ua-w-5 ua-text-red-200"></BIconTrash>
    </button>
  </div>
</template>
