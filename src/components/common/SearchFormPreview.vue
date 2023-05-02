<template>
  <ul class="search-preview">
    <li
      class="search-preview__list"
      v-for="(li, idx) in myList"
      :key="idx"
      @mousedown="changeValue(li)"
    >
      {{ li }}
    </li>
  </ul>
</template>

<script>
import { debounce } from '@/utils/common';
// import Search from '@/api/search/search';

export default {
  name: 'SearchFormPreview',
  props: {
    searchValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      myList: ['성공'],
      searchDebouncing: debounce(() => {
        /*Search.getSearchCompany(this.searchValue)
          .then((res) => {
            if (res.data.success === false) this.myList = ['실패'];
            else this.myList = ['성공'];
          })
          .catch(() => {
            this.myList = ['실패'];
          });*/
      }, 200),
    };
  },
  watch: {
    searchValue() {
      this.searchDebouncing();
    },
  },
  methods: {
    changeValue(nowValue) {
      this.$emit('changeValue', nowValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/searchFormPreview.scss';
</style>
