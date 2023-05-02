<template>
  <button
    class="text-button"
    :class="color"
    :style="{ width: `${width}px`, height: `${height}px` }"
    @click="clickEvent"
    @click.stop
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'TextButton',
  props: {
    height: Number,
    width: Number,
    color: {
      type: String,
      default: 'primary',
    },
    text: {
      type: String,
      default: 'button',
    },
    type: {
      type: String,
      default: 'type',
    },
  },
  methods: {
    clickEvent() {
      if (this.type === 'selectTime') this.$emit(this.type, this.text);
      else this.$emit(this.type);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/textButton.scss';
</style>
