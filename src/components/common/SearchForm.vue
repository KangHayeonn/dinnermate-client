<template>
  <div>
    <section class="search-area">
      <div
        class="search-container"
        :class="[
          { 'search-container__border': bordered },
          background
            ? 'search-container__background'
            : 'search-container__surface',
          { 'search-container__focus': isFocus },
        ]"
      >
        <div class="search">
          <input
            type="text"
            ref="input"
            :placeholder="setPlaceholder"
            v-model="value"
            @focus="activeFocus"
            @blur="inactiveFocus"
          />
          <img src="@/assets/images/searchIcon.svg" alt="search" />
        </div>
        <SearchFormPreview
          :search-value="value"
          @changeValue="changeValue"
          v-if="!isAddress"
          v-show="isFocus"
        />
      </div>
    </section>
  </div>
</template>

<script>
import SearchFormPreview from '@/components/common/SearchFormPreview.vue';

export default {
  name: 'SearchForm',
  components: {
    SearchFormPreview,
  },
  props: {
    type: {
      type: String,
      default: '주소',
    },
    bordered: Boolean,
    background: Boolean,
  },
  data() {
    return {
      placeholder: '',
      value: '',
      isFocus: false,
    };
  },
  computed: {
    setPlaceholder() {
      if (this.isAddress) return '주소를 입력하세요.';
      else return '회사 명을 입력하세요.';
    },
    isAddress() {
      return this.type === '주소';
    },
  },
  methods: {
    activeFocus() {
      this.isFocus = true;
    },
    inactiveFocus() {
      this.isFocus = false;
    },
    changeValue(nowValue) {
      this.value = nowValue;
      this.$refs.input.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/searchForm.scss';
</style>
