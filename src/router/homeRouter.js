export default {
    path: '/home',
    component: ()=>import('../pages/home/Home'),
    children:[
        //详情
        {
            path: '/home/detial',
            component: ()=>import('../pages/home/children/detial')
        },
        //点赞
        {
            path: '/home/thumbs',
            component: ()=>import('../pages/home/children/thumbs')
        },
        //收藏
        {
            path: '/home/collection',
            component: ()=>import('../pages/home/children/collection')
        },
        //评论
        {
            path: '/home/comment',
            component: ()=>import('../pages/home/children/comment')
        },
        //分享
        {
            path: '/home/share',
            component: ()=>import('../pages/home/children/share')
        },
        //头像
        {
            path: '/home/portrait',
            component: ()=>import('../pages/home/children/portrait')
        },
        
    ]
}