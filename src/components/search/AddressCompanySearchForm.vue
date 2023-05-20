<template>
  <div class="main-search">
    <DropdownMenu :menu-items="menuList" />
    <SearchForm />
  </div>
</template>

<script>
import DropdownMenu from '../common/DropdownMenu.vue';
import SearchForm from '../common/SearchForm.vue';

export default {
  name: 'AddressCompanySearchForm',
  components: {
    DropdownMenu,
    SearchForm,
  },
  data() {
    return {
      menuList: ['주소', '회사'],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/styles/components/search/addressCompanySearchForm.scss';
</style>
