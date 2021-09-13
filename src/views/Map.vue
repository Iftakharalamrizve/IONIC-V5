<template>
  <ion-content>Map</ion-content>
</template>

<script >
import { defineComponent } from "vue";
import { IonContent } from "@ionic/vue";
import { MAPS_PAGE } from "../constant";
export default defineComponent({
  name: "Map",
  components: {
    IonContent
  },
  data() {
    return {};
  },
  beforeUpdate() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", MAPS_PAGE);
  },
  mounted() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", MAPS_PAGE);
  }
});
</script>

<style scoped>
</style>