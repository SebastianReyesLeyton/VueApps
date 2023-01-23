import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    { 
        path: '/',
        redirect: '/pokemon'
    },
    {
        path: '/pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home',
                name: 'pokemon-home',
                component: () => import(/* webpackChunkName: "ListPage" */ '@/modules/pokemon/pages/ListPage') 
            },
            { 
                path: 'about',
                name: 'pokemon-about',
                component: () => import(/* webpackChunkName: "AboutPage" */ '@/modules/pokemon/pages/AboutPage')
            },
            { 
                path: 'id/:pokemonId', 
                name: 'pokemon-id',
                component: () => import(/* webpackChunkName: "PokemonPage" */ '@/modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const { pokemonId } = route.params
                    return isNaN( Number(pokemonId) ) ? { id: 1 } : { id: Number(pokemonId) }
                }
            },
            {
                path: '',
                redirect: { name: 'pokemon-home' }
            }
        ]
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