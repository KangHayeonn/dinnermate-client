<template>
  <div class="slider-container">
    <span :id="`${type}Preview`" class="slider-preview">{{ previewText }}</span>
    <input
      type="range"
      :id="`${type}Slider`"
      class="slider"
      min="0"
      max="10"
      step="1"
      @input="rangeEvent"
      v-on:value="sliderValue"
      v-model="sliderValue"
      :disabled="disabled"
    />
    <div class="slider-content-container">
      <span class="slider-content">{{ minText }}</span>
      <span class="slider-content">{{ maxText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderForm',
  props: {
    type: {
      type: String,
      default: 'distance',
    },
    minText: {
      type: String,
      default: 'min',
    },
    maxText: {
      type: String,
      default: 'max',
    },
    disabled: Boolean,
  },
  data() {
    return {
      sliderValue: 0,
      previewText: '상관없음',
    };
  },
  watch: {
    disabled: function () {
      if (!this.disabled) {
        this.sliderValue = 0;
        this.getLeftColor(0);
        this.getPreviewPosition(0);
      }
    },
    sliderValue: function () {
      if (this.sliderValue === 0) this.previewText = '상관없음';
      else {
        const unit = this.type === 'distance' ? 'km' : '만원';
        this.previewText = `${this.sliderValue}${unit}`;
        this.getLeftColor(this.sliderValue);
        this.getPreviewPosition(this.sliderValue);
      }
    },
  },
  methods: {
    rangeEvent(e) {
      this.sliderValue = Number(e.target.value);
      this.getLeftColor(this.sliderValue);
      this.getPreviewPosition(this.sliderValue);
      this.$emit(this.type, this.sliderValue);
    },
    getLeftColor(value) {
      const primaryColor = '#415A77';
      const secondaryColor = '#778DA9';
      const percentage = (value / 10) * 100;
      const slider = document.querySelector(`#${this.type}Slider`);
      slider.style.background = `linear-gradient(to right,
                                ${primaryColor} 0%, ${primaryColor} ${percentage}%,
                                ${secondaryColor} ${percentage}%, ${secondaryColor} 100%)`;
    },
    getPreviewPosition(value) {
      const preview = document.querySelector(`#${this.type}Preview`);
      const newVal = (value * 100) / 10;
      if (value === 0) preview.style.left = '1.25rem';
      else if (value === 10) preview.style.left = 'calc(100% - 1rem)';
      else preview.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/sliderForm.scss';
</style>
