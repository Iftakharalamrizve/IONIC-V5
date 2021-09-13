<template>
  <ion-content>
    <ion-list v-for="(item,i) in itemList" :key="i">
      <ion-item>
        <ion-label>
          <h2>Name {{item.name}}</h2>
          <h3>Email : {{item.email}}</h3>
          <p>Phone : {{item.number}}</p>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script >
import { defineComponent } from "vue";
import { IonContent, IonList, IonItem, IonLabel } from "@ionic/vue";
import { HOME_PAGE } from "../constant";
import { add } from "ionicons/icons";
import { mapState } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonList,
    IonItem,
    IonLabel
  },
  computed: {
    ...mapState({
      itemList: state => state.userStore.userList
    })
  },
  data() {
    return { add };
  },
  beforeUpdate() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", HOME_PAGE);
  },
  mounted() {
    this.$store.commit("SET_DEFAULT_PAGE_TITLE", HOME_PAGE);
  }
});
</script>

<style scoped>
</style>