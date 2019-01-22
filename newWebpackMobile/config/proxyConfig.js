module.exports = {
    "proxy": {
        "/apis": { // 将www.exaple.com印射为/apis
            "target": 'http://10.222.1.52:8084/',
            "secure": false,
            "changeOrigin": true,
            "pathRewrite": {
                "^/apis": ""   //需要rewrite的,
            }
        }
    }
}