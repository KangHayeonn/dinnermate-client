<template>
  <div v-if="basicType" class="radio-btn">
    <div v-for="(item, index) in items" :key="index">
      <input
        type="radio"
        :id="item.id"
        name="frequency1"
        class="radio-btn__input"
        :value="item.value"
        v-model="selected"
        @change="onChange($event)"
        :disabled="disabled"
        ref="radio"
      />
      <label :for="item.id" class="radio-btn__label">
        <span class="radio-btn__label-text">{{ item.value }}</span></label
      >
    </div>
  </div>
  <div v-else class="radio-btn-container">
    <div v-for="(item, index) in items" :key="index">
      <input
        type="radio"
        :id="item.id"
        name="frequency2"
        class="radio-btn-container__input"
        :value="item.value"
        @change="changeOrder($event)"
        :disabled="disabled"
        :checked="index === 0 ? true : false"
        ref="radio2"
      />
      <label :for="item.id" class="radio-btn-container__label">
        {{ item.value }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    basicType: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [
        { id: 'descending', value: '높은순' },
        { id: 'ascending', value: '낮은순' },
      ],
    },
  },
  data() {
    return {
      selected: null,
      order: '',
    };
  },
  watch: {
    disabled() {
      if (!this.disabled) {
        this.$refs.radio2.checked = true;
      }
    },
  },
  methods: {
    onChange() {
      this.$emit('select', this.selected);
    },
    changeOrder(e) {
      this.order = e.target.value;
      this.$emit('frequency', this.order);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/radioButton.scss';
</style>
