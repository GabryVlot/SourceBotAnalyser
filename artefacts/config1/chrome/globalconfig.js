define('global_context', [], function() { // @TODO deprecate global_context, use SH.* instead
    'use strict';
    return {
        // app info
        'artifactName': SH.artifactName,
        'appName': SH.appName,
        'appVersion' : SH.appVersion,
        'appFolder' : SH.appFolder,
        'appCommonVersion' : SH.appCommonVersion,
        'locale' : SH.locale,
        'shlocale' : SH.shlocale,
        'country' : SH.country,
        'gsConfig' : SH.gsConfig,
        'staticUrl' : '//3-cache1.stubhubstatic.com', // @TODO deprecate staticUrl
        // logger
        'loggerURL': 'https://log.' + SH.targetHost + '.com',
        // tracker
        'trkAccount': SH.trackerAccount,
        'enableTracker': 'true',
        'enableLog' : SH.enableLog,
        'OMN': SH.OMN,
        'apiUrl' : 'https://api.stubhub.com',
        'icms' : SH.icmsServer + SH.icmsTemplatePath,
        'target_host' : SH.targetHost
    };
});



// config.js is been bundled with module-app now
// Currently bundling is done for homepage only so if condition is for homepage
if(SH.appName == 'homepage') {
    require([
        'global_context'
    ], function(gc) {

        requirejs.config(SH.requirejs.config);
        require(['sh-ajax-module', 'main', 'submarine'], function() {
            require(['message-banner'], function (MessageBanner) {
                if(SH.appName !== 'event') {
                    var msgBanner = new MessageBanner({
                        'element' : '#message-banner-container',
                        'attributes' : {
                            'message' : 'common.components.message_banner.sitedown.text',
                            'icon' : 'alert4b_info',
                            'timer': 120000
                        }
                    });
                }

            });
        });
    });
}else {
    require([
        SH.app.staticHost + '/resources/shape/scripts/' + SH.appFolder + '/config.js',
        'global_context'
    ], function(config, gc) {

        requirejs.config(SH.requirejs.config);
        require(['common-login'], function() {
            require(['sh-ajax-module', 'main', 'submarine'], function() {
                require(['message-banner'], function (MessageBanner) {
                    if(SH.appName !== 'event') {
                        var msgBanner = new MessageBanner({
                            'element' : '#message-banner-container',
                            'attributes' : {
                                'message' : 'common.components.message_banner.sitedown.text',
                                'icon' : 'alert4b_info',
                                'timer': 120000
                            }
                        });
                    }
                });
            });
        });
    });
}