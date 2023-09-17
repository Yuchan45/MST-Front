<script>
export default {
  name: 'UniselectMenu',
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
      return 'ua-flex ua-h-12 ua-items-center ua-text-sm ua-font-medium ua-text-grey-400 ua-px-3';
    },
  },
};
</script>
<template>
  <ul
    :id="id"
    class="ua-w-full ua-max-h-52 ua-bg-white ua-rounded-lg ua-overflow-y-auto ua-scroll-bar ua-shadow-strong"
  >
    <div v-if="isLoading" :class="`${itemClass} ua-animate-pulse`">
      Loading...
    </div>
    <li
      v-else
      v-for="(item, i) in options"
      :key="item.label + i"
      @click.stop="onClickOption(item)"
      :class="`${itemClass} ua-cursor-pointer hover:ua-bg-grey-200 hover:ua-text-grey-500`"
    >
      {{ label(item.prefix, item.label) }}
    </li>
  </ul>
</template>
