<template>
  <ion-content>Account</ion-content>
</template>

<script >
import { defineComponent } from "vue";
import { IonContent } from "@ionic/vue";
import { ACCOUNT_PAGE } from "../constant";
export default defineComponent({
  name: "Account",
  components: {
    IonContent
  },
  data() {},
  beforeUpdate() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", ACCOUNT_PAGE);
  },
  mounted() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", ACCOUNT_PAGE);
  }
});
</script>

<style scoped>
</style>