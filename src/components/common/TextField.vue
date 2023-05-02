<template>
  <div class="text-container">
    <input
      class="text-field__input"
      :type="type"
      :placeholder="placeholder"
      :class="[{ error: isError }, { focused: isFocused }, color]"
      :value="inputValue"
      @input="handleInput"
    />
    <div
      class="text-field__message"
      :class="[{ error: isError }, { success: isSuccess }]"
    >
      <span v-if="isSuccess || isError">{{ message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    isError: {
      type: Boolean,
      default: false,
    },
    isSuccess: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'surface',
    },
  },
  data() {
    return {
      inputValue: '',
      isFocused: true,
    };
  },
  methods: {
    handleInput(event) {
      this.inputValue = event.target.value;
      this.emitInput();
    },
    emitInput() {
      this.$emit('input', this.inputValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/textField.scss';
</style>
