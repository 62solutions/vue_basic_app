import Main from "@/router/pages/Main";
import { createRouter, createWebHistory } from "vue-router";
import PostPage from "@/router/pages/PostPage";
import PostIdPage from "@/router/pages/PostIdPage";
import PostPageWithStore from "@/router/pages/PostPageWithStore";

import About from "@/router/pages/About";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    }
  
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;