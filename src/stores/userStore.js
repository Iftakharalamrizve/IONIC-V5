const userStore = {
  state: {
   userList:[]
  },
  getters: {},
  mutations: {
    SET_NEW_ITEM(state, payload) {
      state.userList = state.userList.concat(payload)
    }
  },
  actions: {},
};

export default userStore;
