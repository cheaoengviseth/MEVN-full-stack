import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import Post from "../views/Post.vue";
import EditPost from "../views/EditPost.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/add-post",
        name: "add-post",
        component: AddPost,
    },
    {
        path: "/post/:id",
        name: "post",
        component: Post,
    },
    {
        path: "/edit-post/:id",
        name: "edit-post",
        component: EditPost,
    },
    {
        path: "/about",
        name: "About",
        component: () => import ("../views/About.vue"),
    },
];

export default new VueRouter({
    routes
});