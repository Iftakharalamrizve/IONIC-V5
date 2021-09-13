<template>
  <ion-page>
    <ion-header>
      <ion-toolbar mode="md">
        <ion-title>Create New User</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <v-form @submit="onSubmit" :initial-values="initialValues" v-slot="{ errors }">
        <ion-item>
          <ion-label position="stacked">Name</ion-label>
          <v-field name="name" v-slot="{ field }" :rules="isRequired">
            <ion-input type="text" name="name" placeholder="Your name" v-bind="field" />
          </v-field>
          <span style="color:red">{{ errors.name }}</span>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Email</ion-label>
          <v-field name="email" v-slot="{ field }" :rules="isEmailAndRequired">
            <ion-input
              type="text"
              name="email"
              placeholder="Your email"
              v-bind="field"
              clear-input
            />
          </v-field>
          <span style="color:red">{{ errors.email }}</span>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Phone Number</ion-label>
          <v-field name="number" v-slot="{ field }" :rules="isRequired">
            <ion-input
              type="text"
              name="number"
              placeholder="Your number"
              v-bind="field"
              clear-input
            />
          </v-field>
          <span style="color:red">{{ errors.number }}</span>
        </ion-item>
        <ion-item>
          <ion-label position="stacked">Password</ion-label>
          <v-field name="password" v-slot="{ field }" :rules="isRequired">
            <ion-input
              type="password"
              name="password"
              placeholder="Your Password"
              v-bind="field"
              clear-input
            />
          </v-field>
          <span style="color:red">{{ errors.password }}</span>
        </ion-item>
        <ion-button
          class="button-submit"
          expand="block"
          type="submit"
          :disabled="Object.keys(errors).length!=0"
          @submit="onSubmit"
        >Submit</ion-button>
      </v-form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonItem,
  IonInput
} from "@ionic/vue";
import { defineComponent } from "vue";
import { Form, Field } from "vee-validate";

export default defineComponent({
  name: "CreateUser",
  components: {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonItem,
    IonInput,
    VForm: Form,
    VField: Field
  },
  data() {
    return {
      initialValues: {
        name: "",
        email: "",
        number: "",
        password: ""
      }
    };
  },
  methods: {
    isRequired(value, item) {
      if (value && value.trim()) {
        return true;
      }
      return ` ${item.field} is required`;
    },
    isEmailAndRequired(value) {
      if (value && value.trim()) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(String(value).toLowerCase())) {
          return true;
        }
        return ` Email is not Valid`;
      }
      return ` Email is required`;
    },
    onSubmit(data, { resetForm }) {
      resetForm();
      this.$store.commit("SET_NEW_ITEM", data);
      this.$router.push("/home");
    }
  }
});
</script>
<style lang="css">
.button-submit {
  margin: 10px;
}
</style>