<template>
  <div class="calendar__container">
    <v-date-picker
      mode="single"
      :min-date="tomorrowDate"
      v-model="selectedDate"
      is-expanded
    />
  </div>
</template>

<script>
export default {
  name: 'CalendarForm',
  data() {
    return {
      selectedDate: '',
    };
  },
  computed: {
    tomorrowDate() {
      const today = new Date();
      const tomorrow = new Date().setDate(today.getDate() + 1);

      return tomorrow;
    },
  },
  watch: {
    selectedDate() {
      if (!this.selectedDate) {
        return;
      }
      this.$emit('selectDate', this.selectedDate);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/calendarForm.scss';
</style>
