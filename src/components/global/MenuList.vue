<script>
export default {
  name: 'MenuList',
  props: {
    id: String,
    options: { type: Array, default: () => [] },
    isLoading: Boolean,
  },
  methods: {
    onClickOption(value) {
      this.$emit('onClickOption', value);
    },
    label(prefix, label) {
      if (prefix) return `${prefix} ${label}`;
      return label;
    },
  },
  computed: {
    itemClass() {
      return 'ua-flex ua-h-14 ua-items-center ua-text-sm ua-font-medium ua-text-grey-500 ua-px-3';
    },
  },
};
</script>
<template>
  <ul
    :id="id"
    class="ua-w-full ua-max-h-52 ua-space-y-1 ua-p-2.5 ua-overflow-y-auto ua-bg-white ua-rounded-lg ua-scroll-bar"
  >
    <div v-if="isLoading" :class="`${itemClass} ua-animate-pulse`">
      Loading...
    </div>
    <li
      v-else
      v-for="(item, i) in options"
      :key="item.label + i"
      @click="onClickOption(item)"
      :class="`${itemClass} ua-cursor-pointer ua-rounded-md hover:ua-bg-grey-200`"
    >
      {{ label(item.prefix, item.label) }}
    </li>
  </ul>
</template>
