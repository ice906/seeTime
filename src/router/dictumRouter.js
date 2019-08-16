export default {
    path: '/dictum',
    component: ()=>import('../pages/dictum/Dictum'),
    children: [
        //候风物
        {
            path: 'scenery',
            component: ()=>import('../pages/dictum/children/scenery'),
        },
        // 名言
        {
            path: 'story',
            component: ()=>import('../pages/dictum/children/story'),
        }
    ]
} 