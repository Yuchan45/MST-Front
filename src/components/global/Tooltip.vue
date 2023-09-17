<script>
export default {
  name: 'Tooltip',
  props: {
    parentRef: String,
    message: String,
    placement: { type: String, default: 'bottom' },
    maxWidth: { type: String, default: 'ua-max-w-[156px]' },
    hasCustomChildren: Boolean,
    theme: { type: String, default: 'grey' },
  },
  data() {
    return {
      showLocal: false,
      placementOptions: {
        top: {
          position: `ua-left-1/2 -ua-translate-x-1/2 ua-bottom-[calc(100%+14px)]`,
          arrow: '-ua-bottom-1 ua-left-1/2 -ua-translate-x-1/2',
        },
        bottom: {
          position: `ua-left-1/2 -ua-translate-x-1/2 ua-top-[calc(100%+14px)]`,
          arrow: '-ua-top-1 ua-left-1/2 -ua-translate-x-1/2',
        },
        right: {
          position: 'ua-top-1/2 -ua-translate-y-1/2 ua-left-[calc(100%+14px)]',
          arrow: '-ua-left-1 ua-top-1/2  -ua-translate-y-1/2',
        },
        left: {
          position: 'ua-top-1/2 -ua-translate-y-1/2 ua-right-[calc(100%+14px)]',
          arrow: '-ua-right-1 ua-top-1/2  -ua-translate-y-1/2',
        },
      },
      themes: {
        grey: {
          container: 'ua-bg-grey-300 ua-text-white',
          arrow: 'ua-bg-grey-300',
        },
        white: {
          container:
            'ua-bg-white ua-text-grey-500 ua-border ua-border-solid ua-border-grey-200',
          arrow: 'ua-bg-transparent',
        },
      },
    };
  },
  methods: {},
  computed: {
    containerClass() {
      return `${this.placementOptions[this.placement]?.position} ${
        this.maxWidth
      } ${this.themes[this.theme].container}`;
    },
    arrowClass() {
      return `${this.placementOptions[this.placement]?.arrow} ${
        this.themes[this.theme].arrow
      }`;
    },
  },
  mounted() {
    const parent = document.querySelector(`#${this.parentRef}`);
    parent?.addEventListener('mouseenter', () => {
      this.showLocal = true;
    });
    parent?.addEventListener('mouseleave', () => {
      this.showLocal = false;
    });
  },
  unmounted() {
    parent?.removeEventListener('mouseenter', () => {
      this.showLocal = false;
    });
    parent?.removeEventListener('mouseleave', () => {
      this.showLocal = false;
    });
  },
};
</script>

<template>
  <div
    v-show="showLocal"
    ref="tooltip_container"
    class="ua-absolute ua-z-10 ua-p-2.5 ua-rounded-lg ua-text-xs ua-font-normal ua-w-max ua-min-w-[156px]"
    :class="containerClass"
  >
    <div
      class="ua-absolute ua-h-2 ua-w-2 ua-rotate-45"
      :class="arrowClass"
    ></div>
    <p v-if="!hasCustomChildren">{{ message }}</p>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
