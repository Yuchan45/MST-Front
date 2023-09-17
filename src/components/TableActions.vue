<script>
// @ is an alias to /src
import UniselectMenu from './global/UniselectMenu.vue';
import MenuList from './global/MenuList.vue';

export default {
  name: 'TableActions',
  components: { UniselectMenu, MenuList },
  props: {
    id: String,
    options: { type: Array, default: () => [] },
    index: Number,
    rowsLength: Number,
    menuWith: { type: String, default: 'ua-w-44' },
  },
  emits: ['onClickOption'],
  data() {
    return { showList: false };
  },
  methods: {
    onClickOption(value) {
      this.showList = false;
      this.$emit('onClickOption', value);
    },
    onClickShowMenu() {
      this.showList = !this.showList;
    },
  },
  computed: {
    className() {
      const position =
        (this.index + 1 > this.rowsLength - 2 && this.rowsLength > 2) ||
        (this.index + 1 > this.rowsLength - 1 && this.rowsLength > 1)
          ? 'ua-bottom-0'
          : 'ua-top-0';
      return `${position} ${this.menuWith}`;
    },
  },
  mounted() {
    document.addEventListener('mousedown', (e) => {
      if (
        this.$refs.table_actions_component &&
        !this.$refs.table_actions_component.contains(e.target)
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
  <div class="ua-relative" ref="table_actions_component">
    <div
      v-show="showList"
      class="ua-absolute ua-z-[70] ua-right-10"
      :class="className"
    >
      <UniselectMenu
        v-if="false"
        :id="`uniselectmenu-${id}`"
        :options="options"
        @onClickOption="onClickOption"
      />
      <MenuList
        v-else
        :id="`uniselectmenu-${id}`"
        :options="options"
        @onClickOption="onClickOption"
      />
    </div>
    <button
      @click.stop="onClickShowMenu"
      class="ua-w-7 ua-h-7 ua-flex ua-items-center ua-justify-center ua-rounded-full hover:ua-bg-grey-200"
    >
      <BIconThreeDotsVertical
        class="ua-h-5 ua-w-5 ua-text-grey-400"
      ></BIconThreeDotsVertical>
    </button>
  </div>
  <div
    v-show="showList"
    class="ua-fixed ua-top-0 ua-left-0 ua-z-[60] ua-w-full ua-h-full ua-bg-black ua-bg-opacity-50"
  ></div>
</template>
