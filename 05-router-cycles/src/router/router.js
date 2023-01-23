import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { 
        path: '/', 
        component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage') 
    },
    { 
        path: '/about', 
        component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
    },
    { 
        name: 'pokemon-id',
        path: '/:pokemonId', 
        component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
        props: ( route ) => {
            const { pokemonId } = route.params
            return isNaN( Number(pokemonId) ) ? { id: 1 } : { id: Number(pokemonId) }
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: () => import(/* webpackChunkName: "NotFound" */ '@/modules/shared/pages/NoPageFound')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;