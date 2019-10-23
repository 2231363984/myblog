import ViewDetail from "../Components/ViewDetail/viewDetail";
import Home from "../Components/Home/home";


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