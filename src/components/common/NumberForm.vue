<template>
  <div class="number-container">
    <img
      src="@/assets/images/minusIcon.svg"
      alt="감소"
      :class="{ 'number-disabled': disabled }"
      @click="minus"
    />
    <input
      v-if="isInputMode"
      type="number"
      class="number-input"
      :value="defaultValue"
      @keypress.enter="enterEvent"
      @blur="saveNumber"
      ref="number"
    />
    <p
      v-else
      :class="{ 'number-content': true, 'number-content__zero': isZero() }"
      @click="focusInput"
    >
      {{ getNumber() }}
    </p>
    <img
      src="@/assets/images/plusIcon.svg"
      alt="증가"
      :class="{ 'number-disabled': disabled }"
      @click="plus"
    />
  </div>
</template>

<script>
export default {
  name: 'NumberForm',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      number: 0,
      isInputMode: false,
    };
  },
  computed: {
    defaultValue() {
      return this.isZero() ? '' : this.number;
    },
  },
  methods: {
    getNumber() {
      return this.isZero() ? '선택' : `${this.number}명`;
    },
    minus() {
      if (this.disabled || this.isZero()) return;
      this.number -= 1;
    },
    plus() {
      if (this.disabled || this.isOutOfScope(this.number + 1)) return;
      this.number += 1;
    },
    isZero() {
      return this.number === 0;
    },
    isOutOfScope(number) {
      if (number < 0 || number > 999) return true;
      return false;
    },
    enterEvent(e) {
      if (e.key === 'Enter') e.target.blur();
    },
    saveNumber(e) {
      this.changeMode();
      const inputNumber = Number(e.target.value);

      if (this.isOutOfScope(inputNumber)) this.number = 0;
      else this.number = inputNumber;
    },
    focusInput() {
      this.changeMode();
      this.$nextTick(() => this.$refs.number.focus());
    },
    changeMode() {
      if (this.disabled) return;
      this.isInputMode = !this.isInputMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/numberForm.scss';
</style>
