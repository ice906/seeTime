export default {
    path:"/setting",
    component: ()=>import("../pages/setting/Setting"),
    children: [
        //登录
        {
            path: "login",
            component: ()=>import("../pages/setting/children/login"),
        },
    ]
}