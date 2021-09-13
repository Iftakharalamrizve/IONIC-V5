<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start"></ion-buttons>
        <ion-title class="ion-text-center">{{pageTitle}}</ion-title>
        <ion-buttons v-if="addButtonStatus" slot="end">
          <slot name="actions-end">
            <ion-button  @click="$router.push('/user/create')" >
              <ion-icon slot="icon-only" :icon="add"></ion-icon>
            </ion-button>
          </slot>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-router-outlet />
      <bottom-tab-bar />
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons
} from "@ionic/vue";
import { add } from "ionicons/icons";

import BottomTabBar from "./BottomTabBar.vue";
import { mapState } from "vuex";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    BottomTabBar
  },
  data() {
    return { add };
  },
  computed: {
    ...mapState({
      pageTitle: state => state.configStore.pageTitle,
      addButtonStatus: state => state.configStore.addButtonStatus
    })
  }
};
</script>