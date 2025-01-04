import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/features/counters/countersSlice";
import postsReducer from "../components/features/posts/postSlice";

const store = configureStore({
  reducer: {
    counters: counterReducer,
    posts: postsReducer,
  },
});

export default store;
