<template>
  <header class="header">
    <router-link to="/" class="header__title">
      <p>DINNER MATE</p>
    </router-link>
    <div v-if="!isLogin" class="header__btn">
      <router-link to="/login"> SignIn </router-link>
      <router-link to="/signup"> SignUp </router-link>
    </div>
    <div v-else class="header__btn">
      Logout
      <router-link to="/my">
        <div class="header__btn__my-btn">
          <img class="header__btn__my-btn--img" alt="mypage-btn" />
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/header.scss';
</style>
