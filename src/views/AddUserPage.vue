<template>
  <base-layout-without-tab page-title="Add User" page-default-back-link="/home">
    <create-user-form></create-user-form>
  </base-layout-without-tab>
</template>

<script>
import CreateUserForm from "../components/users/CreateUserForm.vue";
import BaseLayoutWithoutTab from "../components/BaseLayoutWithoutTab.vue";
export default {
  components: {
    CreateUserForm,
    BaseLayoutWithoutTab
  },

  methods: {}
};
</script>