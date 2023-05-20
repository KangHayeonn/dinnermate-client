<template>
  <header class="header">
    <router-link to="/" class="header__title">
      <p>DINNER MATE</p>
    </router-link>
    <div v-if="!isLogin" class="header__btn">
      <router-link to="/login">
        <TextButton
          :height="height"
          :width="width"
          color="secondary"
          text="SignIn"
        />
      </router-link>
      <router-link to="/signup">
        <TextButton
          :height="height"
          :width="width"
          color="secondary"
          text="SignUp"
        />
      </router-link>
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
import TextButton from './TextButton.vue';

export default {
  name: 'AppHeader',
  components: {
    TextButton,
  },
  data() {
    return {
      isLogin: false,
      width: 91,
      height: 40,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/header.scss';
</style>
