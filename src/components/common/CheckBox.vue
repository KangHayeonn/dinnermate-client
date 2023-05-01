<template>
  <div class="checkbox">
    <input
      type="checkbox"
      class="checkbox__input"
      :checked="checked"
      :disabled="disabled"
      ref="checkbox"
      @change="check"
    />
    <span class="checkbox__content">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    text: {
      type: String,
      default: '요소',
    },
    checked: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    disabled() {
      if (!this.disabled) {
        this.$refs.checkbox.checked = false;
      }
    },
  },
  methods: {
    check(e) {
      this.$emit('check', e.target.checked, this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/checkBox.scss';
</style>
