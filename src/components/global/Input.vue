<script>
import { BIconXLg, BIconQuestionCircleFill } from 'bootstrap-icons-vue';
import Tooltip from './Tooltip.vue';

export default {
  name: 'Input',
  components: { BIconXLg, BIconQuestionCircleFill, Tooltip },
  props: {
    id: { type: String, required: true },
    label: String,
    placeholder: String,
    value: String,
    isClearable: Boolean,
    hasIcon: Boolean,
    disabled: Boolean,
    helpTextMsg: String,
    isHelperIconType: Boolean,
    customHeight: { type: String, default: 'ua-h-[42px]' },
  },
  data() {
    return {
      showClearIcon: false,
    };
  },
  methods: {
    input(e) {
      this.$emit('onChangeInput', e.target.value);
    },
    onFocus(e) {
      this.$emit('onFocus', e.target.value);
      this.showClearIcon = true;
    },
    onClear() {
      this.$emit('onChangeInput', '');
    },
  },
  computed: {
    inputContainerClass() {
      const padding = this.hasIcon ? 'ua-pr-2' : 'ua-pr-2.5';
      const clearable = this.isClearable ? 'ua-pr-8' : padding;
      const height = this.label ? this.customHeight : 'ua-h-full';
      return `${clearable} ${height}`;
    },
    tooltipRef() {
      return `${this.id}-tooltip-target`;
    },
  },
  mounted() {
    document.addEventListener('mousedown', (e) => {
      if (
        this.$refs.input_component &&
        !this.$refs.input_component.contains(e.target)
      ) {
        this.showClearIcon = false;
      }
    });
  },
  unmounted() {
    document.removeEventListener('mousedown', () => {
      this.showClearIcon = false;
    });
  },
};
</script>

<template>
  <div :id="id" class="ua-w-full ua-h-full ua-space-y-2">
    <div
      v-if="!!label"
      class="ua-flex ua-gap-2 ua-items-center ua-text-grey-400"
    >
      <p class="ua-text-sm ua-font-medium">
        {{ label }}
      </p>
      <div class="ua-relative">
        <BIconQuestionCircleFill
          v-if="helpTextMsg && !!isHelperIconType"
          :id="tooltipRef"
          class="ua-w-auto ua-h-3.5 ua-relative"
        ></BIconQuestionCircleFill>
        <Tooltip
          :parentRef="tooltipRef"
          :message="helpTextMsg"
          placement="right"
        />
      </div>
    </div>
    <div
      ref="input_component"
      class="ua-w-full ua-relative ua-flex ua-items-center ua-gap-2 ua-pl-2.5 ua-bg-white ua-rounded-lg ua-border ua-border-solid ua-border-grey-200 ua-shadow-default"
      :class="inputContainerClass"
    >
      <slot v-if="hasIcon"></slot>
      <input
        :placeholder="placeholder"
        :value="value"
        :disabled="disabled"
        @input="input"
        @focus="onFocus"
        class="ua-w-full ua-text-sm ua-font-normal ua-border-none ua-outline-0"
      />
      <button
        v-show="showClearIcon && isClearable && value"
        @click="onClear"
        class="ua-w-5 ua-h-5 ua-absolute ua-right-2.5 ua-flex ua-items-center ua-justify-center ua-rounded-full hover:ua-bg-grey-200"
      >
        <BIconXLg class="ua-w-3 ua-h-3 ua-text-grey-500"></BIconXLg>
      </button>
    </div>
    <p
      v-if="helpTextMsg && !isHelperIconType"
      class="ua-text-xs ua-font-normal ua-text-grey-400"
    >
      {{ helpTextMsg }}
    </p>
  </div>
</template>
