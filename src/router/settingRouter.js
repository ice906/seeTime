export default {
    path:"/setting",
    component: ()=>import("../pages/setting/Setting"),
    children: [
        //登录
        {
            path: "login",
            component: ()=>import("../pages/setting/children/login"),
        },
        //吐槽
        {
            path: "lamente",
            component: ()=>import("../pages/setting/children/lamente"),
        },
        //评分
        {
            path: "grade",
            component: ()=>import("../pages/setting/children/grade"),
        },
        //吐槽成功
        {
            path: "lamenteSuccess",
            component: ()=>import("../pages/setting/children/lamenteSuccess"),
        },
        
        //评分成功
        {
            path: "gradeSuccess",
            component: ()=>import("../pages/setting/children/gradeSuccess"),
        },
        //我的
        {
            path: "mine",
            component: ()=>import("../pages/setting/children/mine"),
        },
        //没有网络
        {
            path:"noNetwork",
            component: ()=>import("../pages/setting/children/no-network")
        },
       
    ]
}