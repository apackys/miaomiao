export default{
    path:'/mine',
    component : ()=>import('@/views/Mine'),
    children:[
        {
            path:'center',
            component : ()=>import('@/views/Center'),
        },
        {
            path:'login',
            component : ()=>import('@/components/Login'),
        },
        {
            path:'register',
            component : ()=>import('@/components/Register'),
        },
        {
            path:'findPassword',
            component : ()=>import('@/components/FindPassword'),
        },
        ,
        {
            path : '/mine',
            redirect : 'center'
        }
        
    ]
}