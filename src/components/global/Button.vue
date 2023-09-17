<script>
export default {
  name: 'Button',
  props: {
    label: String,
    theme: {
      type: String,
      default: 'default',
    },
    size: { type: String, default: 'm' },
    hasIcon: Boolean,
    disabled: Boolean,
    loading: Boolean,
    leftAlignedIcon: Boolean,
  },
  data() {
    return {
      themes: {
        default: 'ua-bg-white ua-text-grey-500',
        darkRed:
          'ua-bg-red-200 ua-text-white hover:ua-bg-red-400 disabled:ua-bg-grey-200 disabled:ua-text-grey-300 disabled:ua-pointer-events-none',
        silver:
          'ua-bg-white ua-text-grey-400 ua-border ua-border-solid ua-border-grey-200 ua-shadow-grey',
      },
      sizes: {
        xs: { font: 'ua-text-xs', iconSize: 'ua-w-3 ua-h-3' },
        s: { font: 'ua-text-sm', iconSize: 'ua-w-4 ua-h-4' },
        m: { font: 'ua-text-sm', iconSize: 'ua-w-5 ua-h-5' },
        l: { font: 'ua-text-base', iconSize: 'ua-w-5 ua-h-5' },
        xl: { font: 'ua-text-lg', iconSize: 'ua-w-5 ua-h-5' },
      },
    };
  },
  methods: {
    onClickButton() {
      this.$emit('onClick');
    },
  },
  computed: {
    styles() {
      const fontSize = this.sizes[this.size]?.font;
      const disabledClass =
        'ua-bg-grey-200 ua-text-grey-300 ua-pointer-events-none';
      if (this.loading) return disabledClass;
      return `${fontSize} ${this.themes[this.theme]}`;
    },
  },
};
</script>

<template>
  <button
    @click="onClickButton"
    class="ua-h-full ua-w-full ua-font-medium ua-flex ua-items-center ua-justify-center ua-rounded-md"
    :class="styles"
    :disabled="disabled || loading"
  >
    <div v-if="loading" class="ua-flex">
      <div class="ua-animate-pulse ua-mr-4 ua-text-grey-400">Loading...</div>
      <div
        class="ua-w-4 ua-h-4 ua-text-grey-300 ua-border-r-transparent ua-rounded-full ua-border-2 ua-border-solid ua-animate-spin"
      ></div>
    </div>
    <div
      v-else
      class="ua-flex ua-gap-2 ua-items-center"
      :class="leftAlignedIcon ? 'ua-flex-initial' : 'ua-flex-row-reverse'"
    >
      <div v-show="hasIcon" :class="this.sizes[this.size]?.iconSize">
        <slot></slot>
      </div>
      <p>
        {{ label }}
      </p>
    </div>
  </button>
</template>
