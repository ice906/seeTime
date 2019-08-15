export default {
    path: '/diagram',
    component: ()=>import('../pages/diagram/Diagram'),
    children: [
        //候风物
        {
            path: 'scenery',
            component: ()=>import('../pages/diagram/children/scenery'),
        },
        // 图片
        {
            path: 'photoShow',
            component: ()=>import('../pages/diagram/children/photoShow'),
        },
        
    ]
}