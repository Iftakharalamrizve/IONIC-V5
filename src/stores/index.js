
import { createStore } from "vuex";
import configStore from "./configStore";
import userStore from "./userStore";
const store = createStore({
    modules: {
    configStore,
    userStore,
    },
});
export default store;