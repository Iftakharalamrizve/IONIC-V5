<template>
  <ion-app>
    <ion-page>
      <ion-content class="ion-padding">
        <Form @submit="handleSubmit">
          <IonItem>
            <IonLabel position="stacked">FIRST</IonLabel>
            <Field name="name" v-slot="{ field }" :rules="isRequired">
              <IonInput type="text" name="name" v-bind="field" />
              <ErrorMessage name="name" />
            </Field>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Phone</IonLabel>
            <Field name="phone" v-slot="{ field }" :rules="isRequired">
              <IonInput type="text" name="phone" v-bind="field" />
              <ErrorMessage name="phone" />
            </Field>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">EMAIL</IonLabel>
            <Field name="email" v-slot="{ field }" :rules="isRequired">
              <IonInput type="email" name="email" v-bind="field" />
              <ErrorMessage name="email" />
            </Field>
            <!-- <ErrorMessage name="email" /> -->
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">PASSWORD</IonLabel>
            <Field name="password" v-slot="{ field }" :rules="isRequired">
              <IonInput type="password" name="password" v-bind="field" />
            </Field>
            <ErrorMessage name="password" />
            <!-- <ErrorMessage class="danger" name="password" /> -->
          </IonItem>

          <IonButton type="submit">Login</IonButton>
        </Form>
      </ion-content>
    </ion-page>
  </ion-app>
</template>

<script>
import { defineComponent } from "vue";
import {
  IonApp,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonPage,
  IonContent
} from "@ionic/vue";
import { Form, Field, ErrorMessage } from "vee-validate";
export default defineComponent({
  name: "App",
  data(){
    return{
      formData :null
    }
  },
  computed:{
    isRequired(value){
      return value
    }
  },
  methods:{
    handleSubmit (values){
      this.formData = values;
    }
  },
  // setup(props, context) {
    
  //   const formData = ref(null);

  //   const handleSubmit = values => {
  //     formData.value = values;
  //     console.log(props,context)
  //   };

  //   const isRequired = value => {
  //     if (value && value.trim()) {
  //       return true;
  //     }
  //     return "This is required";
  //   };
  //   return {
  //     handleSubmit,
  //     isRequired,
  //     formData
  //   };
  // },
  components: {
    IonApp,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonPage,
    IonContent,
    // vee-validate components
    Form,
    Field,
    ErrorMessage
  }
});
</script>

<style>
</style>
