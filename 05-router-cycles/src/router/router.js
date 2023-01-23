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
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DBZLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import(/* webpackChunkName: "DBZLayout" */ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import(/* webpackChunkName: "DBZLayout" */ '@/modules/dbz/pages/About')
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
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