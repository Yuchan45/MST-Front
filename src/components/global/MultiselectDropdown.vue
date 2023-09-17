<script>
import MultiselectMenu from './MultiselectMenu.vue';

export default {
  name: 'MultiselectDropdown',
  components: { MultiselectMenu },
  props: {
    id: String,
    label: String,
    placeholder: String,
    options: Array,
    value: Array,
    selectedItemsLabel: String,
    isLoading: Boolean,
    noBorder: Boolean,
    size: String,
    isCreatable: Boolean,
    filterLocally: { type: Boolean, default: true },
    disabled: Boolean,
    searchValue: Object,
    inputCustomHeight: { type: String, default: 'ua-h-[42px]' },
  },
  emits: ['onChangeValue'],
  data() {
    return {
      showList: false,
      selectedItems: this.value || [],
      checkedSelectAll: false,
    };
  },
  methods: {
    onClickShowList() {
      this.showList = !this.showList;
    },
    onChangeCheckbox(value) {
      if (this.selectedItems.find((i) => i.id === value.id)) {
        this.checkedSelectAll = false;
        this.selectedItems = this.selectedItems.filter(
          (i) => i.id !== value.id
        );
      } else {
        this.selectedItems = [...this.selectedItems, value];
      }
      this.$emit('onChangeValue', this.selectedItems);
    },
    onChangeSelectAll(val) {
      this.checkedSelectAll = val;
      if (val) {
        this.selectedItems = this.options;
      } else {
        this.selectedItems = [];
      }
      this.$emit('onChangeValue', this.selectedItems);
    },
    onClear() {
      this.selectedItems = [];
      this.checkedSelectAll = false;
      this.$emit('onChangeValue', this.selectedItems);
    },
    onRemoveItem(value) {
      this.checkedSelectAll = false;
      this.selectedItems = this.selectedItems.filter((i) => i.id !== value.id);
      this.$emit('onChangeValue', this.selectedItems);
    },
  },
  computed: {
    dropdownLabel() {
      if (this.showList) return '';
      const selectedCount = this.selectedItems?.length;
      const optionCount = this.options.length;
      if (selectedCount) {
        if (selectedCount === 1) return this.selectedItems[0].label;
        else if (selectedCount === optionCount) return 'All';
        return `${selectedCount} ${this.selectedItemsLabel} selected`;
      }
      return this.placeholder;
    },
    iconPath() {
      return !this.showList
        ? require('@/assets/img/iconChevronDown.svg')
        : require('@/assets/img/iconChevronUp.svg');
    },
    buttonClass() {
      const noBorderClass = this.noBorder
        ? 'ua-border-none'
        : 'ua-border ua-border-solid ua-border-grey-200 ua-shadow-default';
      return `${noBorderClass}`;
    },
    showMenu() {
      return this.showList && (this.options?.length || this.isLoading);
    },
  },
  watch: {
    value(val) {
      this.selectedItems = val || [];
      if (val?.length !== this.options?.length) {
        this.checkedSelectAll = false;
      } else {
        this.checkedSelectAll = true;
      }
    },
  },
  mounted() {
    document.addEventListener('mousedown', (e) => {
      if (
        this.$refs.multiselect_component &&
        !this.$refs.multiselect_component.contains(e.target)
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
  <div :id="id" class="ua-w-full ua-h-full">
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
        ref="multiselect_component"
      >
        <button
          @click="onClickShowList"
          class="ua-w-full ua-h-full ua-relative ua-flex ua-items-center ua-px-2.5 ua-py-0.5 ua-bg-white ua-rounded-lg"
          :class="buttonClass"
        >
          <div
            class="ua-w-[calc(100%-20px)] ua-h-fit ua-flex ua-text-left ua-text-sm"
          >
            <label
              class="ua-w-full ua-text-grey-400 ua-font-normal ua-truncate"
            >
              {{ dropdownLabel }}
            </label>
          </div>
          <img
            :src="iconPath"
            alt="icon"
            class="ua-h-5 ua-w-5 ua-absolute ua-right-2.5"
          />
        </button>

        <div
          v-show="showMenu"
          class="ua-absolute ua-top-full ua-z-[70] ua-w-full"
        >
          <MultiselectMenu
            :id="'multiselect-menu' + id"
            :value="selectedItems"
            :options="options"
            :isLoading="isLoading"
            v-model:checkedSelectAll="checkedSelectAll"
            @onChangeCheckbox="onChangeCheckbox"
            @onChangeSelectAll="onChangeSelectAll"
            @onClear="onClear"
            @hideList="showList = false"
          />
        </div>
      </div>
    </div>
    <div
      v-show="showMenu"
      class="ua-fixed ua-top-0 ua-left-0 ua-z-[60] ua-w-full ua-h-full ua-bg-black ua-bg-opacity-50"
    ></div>
  </div>
</template>
