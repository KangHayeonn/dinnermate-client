<template>
  <div class="main-container">
    <div class="main-title">
      <img alt="logo" class="main-title__logo" />
      <h1>DINNER MATE</h1>
    </div>
    <AddressCompanySearchForm />
  </div>
</template>

<script>
import AddressCompanySearchForm from '@/components/search/AddressCompanySearchForm.vue';

export default {
  name: 'MainPage',
  components: {
    AddressCompanySearchForm,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/styles/page/mainPage.scss';
</style>
