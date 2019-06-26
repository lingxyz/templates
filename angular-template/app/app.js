/**app JS  依赖的JS CSS
 * @param {string} 'angular'                 angular.min.js
 * @param {string} 'routes'                  routes.js
 * @param {string} 'js/controllers/mainCtrl' mainCtrl.js
 */
require(['lib/angular', 'routes', 'ctrl/mainCtrl'], function (angular) {
    /*angular JS加载完 页面应用才会开始运行*/
    angular.element(document).ready(function () {
    	/*手动启动 angular hwzgapp模块加载*/
        angular.bootstrap(document, ['mwapp']);
        $('html').addClass('ng-app');
        $('.views').addClass('views-in');
    });
})