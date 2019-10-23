import ViewDetail from "../components/ViewDetail/viewDetail";
import Home from "../components/Home/home";
import Category from "../components/Category/category";


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
    {
        key: "Category",
        exact:false,
        component: Category,
        url: "/category",
        permission: ['Administrator']
    },
]
export const siteNav=[
    {
        displayName: `首页`,
        type: 'chrome',
        key: '首页',
        route: '/home',
        permission: [],

    },
    {
        displayName: `WEB前端`,
        type: 'html5',
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
        displayName: `Demo`,
        type: 'profile',
        key: 'Demo',
        route: '/category/',
        permission: [],

    },
]