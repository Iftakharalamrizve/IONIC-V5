import { HOME_PAGE } from "../constant";
const configStore = {
  state: {
    pageDefaultBackLink: null,
    pageTitle: null,
    addButtonStatus:false
  },
  getters: {},
  mutations: {
    SET_DEFAULT_PAGE_TITLE: (state, payload) => {
        if (HOME_PAGE == payload) {
            state.addButtonStatus = true;
        } else {
            state.addButtonStatus = false;
        }
        state.pageTitle = payload;
    },
    SET_PAGE_DEFAULT_BACK_LINK: (state, payload) => {
      state.pageDefaultBackLink = payload
    }
  },
  actions: {},
};

export default configStore;
