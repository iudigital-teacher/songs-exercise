import { createRouter, createWebHashHistory } from 'vue-router';
import CategoriesIndex from '../src/modules/categories/components/CategoriesIndex.vue';
import SongsIndex from '../src/modules/songs/components/SongsIndex.vue';
import SongsList from '../src/modules/songs/components/SongsList.vue';
import SongsCreate from '../src/modules/songs/components/SongsCreate.vue';



const routes = [
    { 
        path: '/categories', 
        component: CategoriesIndex
     },
    { 
        path: '/songs', 
        component: SongsIndex 
    },
    {
        path: '/list',
        component: SongsList
    },
    {
        path: '/create',
        component: SongsCreate
    }
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

export default router;