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
        }
    }
}