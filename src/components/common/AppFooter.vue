<template>
  <footer class="footer">
    <div class="footer-description">
      <div class="copyright">Copyright (C) 2023 WEB Project.</div>
      <div class="developers">
        <div class="row">
          <div class="title">Made By</div>
          <p>{{ developer }}</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      developer: 'Lydia',
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/common/footer.scss';
</style>
