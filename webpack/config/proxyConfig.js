module.exports = {
    "proxy": {
        "/apis": { // 将www.exaple.com印射为/apis
            "target": 'https://www.amap.com/',
            "secure": false,
            "changeOrigin": true,
            "pathRewrite": {
                "^/apis": ""   //需要rewrite的,
            }
        }
    }
}