<template>
  <ion-tabs>
    <!-- Tab bar -->
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="schedule" href="/home">
        <ion-icon :icon="people"></ion-icon>
        <ion-label>User List</ion-label>
      </ion-tab-button>
      <ion-tab-button tab="map" href="/map">
        <ion-icon :icon="map"></ion-icon>
        <ion-label>Map</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="about" href="/account">
        <ion-icon :icon="person"></ion-icon>
        <ion-label>Account</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>
<script>
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/vue";
import { person, map, people } from "ionicons/icons";
export default {
  name: "BottomTabBar",
  components: {
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs
  },
  data() {
    return { person, map, people };
  }
};
</script>