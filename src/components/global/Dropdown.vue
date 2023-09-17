<script>
import MenuList from './MenuList.vue';

export default {
  name: 'Dropdown',
  components: { MenuList },
  props: {
    id: String,
    label: String,
    placeholder: String,
    options: { type: Array, default: () => [{ id: null, label: '' }] },
    value: Object,
    isLoading: Boolean,
    noBorder: Boolean,
    inputCustomHeight: { type: String, default: 'ua-h-[42px]' },
  },
  data() {
    return {
      selectedOption: this.value,
      showList: false,
    };
  },
  methods: {
    onClickOption(value) {
      this.selectedOption = value;
      this.showList = false;
      this.$emit('onClickOption', value);
    },
    onClickShowList() {
      this.showList = !this.showList;
    },
  },
  computed: {
    dropdownLabel() {
      if (this.showList) return '';
      else if (this.selectedOption) return this.selectedOption.label;
      return this.placeholder;
    },
    textColor() {
      if (this.selectedOption && !this.noBorder)
        return 'ua-text-grey-500 ua-font-normal';
      if (this.selectedOption && this.noBorder)
        return 'ua-text-grey-500 ua-font-medium';
      return 'ua-text-grey-400 ua-font-normal';
    },
    iconPath() {
      return !this.showList
        ? require('@/assets/img/iconChevronDown.svg')
        : require('@/assets/img/iconChevronUp.svg');
    },
  },
  watch: {
    value(val) {
      this.selectedOption = val;
    },
  },
  mounted() {
    document.addEventListener('mousedown', (e) => {
      if (
        this.$refs.dropdown_component &&
        !this.$refs.dropdown_component.contains(e.target)
      ) {
        this.showList = false;
      }
    });
  },
  unmounted() {
    document.removeEventListener('mousedown', () => {
      this.showList = false;
    });
  },
};
</script>

<template>
  <div :id="id" class="ua-h-full ua-w-full">
    <div class="ua-space-y-2 ua-h-full ua-w-full">
      <div
        v-if="!!label"
        class="ua-flex ua-gap-2 ua-items-center ua-text-grey-400"
      >
        <p class="ua-text-sm ua-font-medium">
          {{ label }}
        </p>
      </div>
      <div
        class="ua-relative ua-w-full"
        :class="!!label ? inputCustomHeight : 'ua-h-full'"
        ref="dropdown_component"
      >
        <button
          @click="onClickShowList"
          class="ua-w-full ua-h-full ua-relative ua-flex ua-items-center ua-px-2.5 ua-bg-white ua-rounded-lg"
          :class="
            noBorder
              ? 'ua-border-none'
              : 'ua-border ua-border-solid ua-border-grey-200 ua-shadow-default'
          "
        >
          <label
            class="ua-w-[calc(100%-40px)] ua-absolute ua-left-2.5 ua-h-5 ua-text-left ua-text-sm ua-truncate"
            :class="textColor"
          >
            {{ dropdownLabel }}
          </label>
          <img
            :src="iconPath"
            alt="icon"
            class="ua-h-5 ua-w-5 ua-absolute ua-right-2.5"
          />
        </button>

        <div
          v-show="showList"
          class="ua-absolute ua-top-full ua-z-[70] ua-w-full"
        >
          <MenuList
            :id="'dropdown-menu' + id"
            :options="options"
            :isLoading="isLoading"
            @onClickOption="onClickOption"
          />
        </div>
      </div>
    </div>
    <div
      v-show="showList"
      class="ua-fixed ua-top-0 ua-left-0 ua-z-[60] ua-w-full ua-h-full ua-bg-black ua-bg-opacity-50"
    ></div>
  </div>
</template>
