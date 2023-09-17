<script>
import { BIconCalendar4 } from 'bootstrap-icons-vue';
import { isoToSimpleDateFormatConverter } from '@/utils/formatDate';
import Datepicker from 'vuejs3-datepicker';

export default {
  name: 'DatePicker',
  components: {
    BIconCalendar4,
    Picker: Datepicker,
  },
  props: {
    value: { type: String, default: '' },
    placeholder: String,
    lang: { type: String, default: 'en' },
  },
  data() {
    return {
      dateValue: this.value,
      isOpen: false,
    };
  },
  methods: {
    onClickDateButton() {
      this.isOpen = true;
    },
    submitDate(val) {
      this.isOpen = false;
      this.onChangeDate(val);
    },
    onChangeDate(val) {
      this.$emit('onChageDatePicker', val);
    },
  },
  computed: {
    simpleDate() {
      if (this.dateValue) return isoToSimpleDateFormatConverter(this.dateValue);
      return null;
    },
    buttonLabel() {
      return !this.dateValue ? this.placeholder : this.simpleDate;
    },
    textColor() {
      if (this.dateValue) return 'ua-text-grey-500';
      return 'ua-text-grey-400';
    },
  },
  watch: {
    value(val) {
      this.dateValue = val;
    },
  },
  mounted() {
    document.addEventListener('mousedown', (e) => {
      if (
        this.$refs.date_picker_component &&
        !this.$refs.date_picker_component.contains(e.target)
      ) {
        this.isOpen = false;
      }
    });
  },
  unmounted() {
    document.removeEventListener('mousedown', () => {
      this.isOpen = false;
    });
  },
};
</script>
<template>
  <div class="ua-w-full ua-h-full">
    <button
      @click="onClickDateButton"
      class="ua-w-full ua-h-full ua-text-sm ua-font-normal ua-flex ua-items-center ua-justify-between ua-px-2.5 ua-bg-white ua-rounded-lg ua-border ua-border-solid ua-border-grey-200 ua-shadow-grey"
      :class="textColor"
    >
      {{ buttonLabel }}
      <div class="ua-text-grey-300">
        <BIconCalendar4 class="ua-w-5 ua-h-5" />
      </div>
    </button>

    <div
      class="ua-w-full ua-h-full ua-flex ua-items-center ua-justify-center ua-fixed ua-z-20 ua-top-0 ua-left-0 ua-bg-black ua-bg-opacity-70"
      v-if="isOpen"
    >
      <div ref="date_picker_component" class="ua-w-fit">
        <Picker
          v-model="dateValue"
          :value="dateValue"
          :inline="true"
          :minimum-view="'day'"
          :maximum-view="'year'"
          :initialView="'year'"
          :language="lang"
          @selected="submitDate"
        >
        </Picker>
      </div>
    </div>
  </div>
</template>

<style lang="css">
.vuejs3-datepicker__calendar-topbar {
  background-color: #c02727 !important;
}
.vuejs3-datepicker__calendar .cell.selected {
  background-color: #c02727 !important;
}
.vuejs3-datepicker__calendar .cell.selected:hover {
  background-color: #c02727 !important;
}
.vuejs3-datepicker__calendar .cell:hover {
  border-color: #c02727 !important;
  background-color: #c02727 !important;
}
</style>
