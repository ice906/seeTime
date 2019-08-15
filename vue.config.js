module.exports = {
    devServer: {
        proxy: {
            "userController": {
                target: "http://jrie2d.natappfree.cc",
                changeOrigin: true
            },
            "/ajax": {
                target: "http://localhost:8000",
                changeOrigin: true
            },
        }
    }
}