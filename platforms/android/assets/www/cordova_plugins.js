cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.rossgerbasi.cordova.glass.core/www/cordova-glass-core.js",
        "id": "com.rossgerbasi.cordova.glass.core.GlassCore",
        "clobbers": [
            "com.rossgerbasi.cordova.glass.core"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.rossgerbasi.cordova.glass.core": "0.0.2",
    "com.rossgerbasi.cordova.glass.gesture": "0.0.1",
    "com.rossgerbasi.cordova.glass.touch": "0.0.1"
}
// BOTTOM OF METADATA
});