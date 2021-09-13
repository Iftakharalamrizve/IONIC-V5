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
import { computed, onBeforeUpdate, onMounted } from "vue";
import { useStore } from "vuex";
import { HOME_PAGE } from "../constant";
import { add } from "ionicons/icons";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonList,
    IonItem,
    IonLabel
  },
  setup() {
    //initialized global store
    const store = useStore();
    //item List computed property from global state
    const itemList = computed(() => store.state.userStore.userList);
    //when page is mount then onMounted is called
    onMounted(() => {
      store.commit("SET_DEFAULT_PAGE_TITLE", HOME_PAGE);
    });
    //after create page before  then onBeforeUpdate is called
    onBeforeUpdate(() => {
      store.commit("SET_DEFAULT_PAGE_TITLE", HOME_PAGE);
    });
    return {
      itemList,
      add
    };
  }
});
</script>

<style scoped>
</style>