module.exports = {
    devServer: {
        proxy: {
            "userController": {
                target: "http://77475x.natappfree.cc",
                changeOrigin: true
            }, 
            "imageController": {
                target: "http://77475x.natappfree.cc",
                changeOrigin: true
            }, 
        }
    }
}