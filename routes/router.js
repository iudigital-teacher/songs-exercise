import { createRouter, createWebHashHistory } from 'vue-router';
import CategoriesIndex from '../src/modules/categories/components/CategoriesIndex.vue';
import SongsIndex from '../src/modules/songs/components/SongsIndex.vue';
import SongsList from '../src/modules/songs/components/SongsList.vue';
import SongsCreate from '../src/modules/songs/components/SongsCreate.vue';
import SongsEdit from '../src/modules/songs/components/SongsEdit.vue';

import Login from '../src/modules/auth/components/Login.vue';
import authGuard from './auth-guard';




const routes = [
    {
        path:'/login',
        component: Login,
        name: 'mivistalogin'

    },
    { 
        path: '/categories', 
        component: CategoriesIndex
     },
    { 
        path: '/songs', 
        component: SongsIndex,
        redirect: '/songs/list',
        beforeEnter:[authGuard],
        children:[
            {
                path: 'list',
                component: SongsList
            },
            {
                path: 'create',
                component: SongsCreate
            },
            {
                path:':id/edit',
                component: SongsEdit,
                props: true
            }
        ] 
    },

  ];

//   const router = VueRouter.createRouter({
//     // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
//   })

const router = createRouter({
    history: createWebHashHistory(),
    routes

});
/*
router.beforeEach((to, from, next) => {
    console.log("To: " + to, "From: "+from, next);
  });
  */

export default router;