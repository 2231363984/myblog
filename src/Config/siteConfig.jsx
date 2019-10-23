import ViewDetail from "../components/ViewDetail/viewDetail";
import Home from "../components/Home/home";


export const  siteRouter=[
    {
        key: "home",
        exact: true,
        component: Home,
        url: "/home",
        permission: ['Administrator']
    },
    {
        key: "viewDetail",
        exact: true,
        component: ViewDetail,
        url: "/detail/:textid",
        permission: ['Administrator']
    },
]
export const siteNav=[
    {
        displayName: `WEB前端`,
        type: 'profile',
        key: 'WEB前端',
        permission: [],
        children: [
            {
                displayName: 'React',
                key: 'React',
                route: '/category/',
                permission: [],
            },
            {
                displayName: 'Vue',
                key: 'Vue',
                route: '/category/',
                permission: [],
            },
        ]
    },
    {
        displayName: `首页`,
        type: 'profile',
        key: '首页',
        route: '/home',
        permission: [],

    },
]