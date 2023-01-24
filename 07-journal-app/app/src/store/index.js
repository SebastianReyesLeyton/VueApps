import { createStore } from "vuex";

import journalModule from "@/store/journal";

const store = createStore({
    modules: {
        journal: journalModule
    }
});

export default store;