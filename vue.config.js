module.exports = {
    devServer: {
        proxy: {
            "userController": {
                target: "http://zuukfc.natappfree.cc",
                changeOrigin: true
            },
            "imageController": {
                target: "http://zuukfc.natappfree.cc",
                changeOrigin: true
            },
            '/ajax':{
                target:"http://localhost:7000",
                changeOrgin:true
            }
        }
    }
}