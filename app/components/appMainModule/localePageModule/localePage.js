(function() {
  'use strict';

  /* Common Modules 'localePageModule' Depend on */
  require('../../common/core/core');
  require('../../common/pageHeaderBreadcrumbs/pageHeaderBreadcrumbs');
  require('../../common/pageHeader/pageHeader');

  /* Components of 'localePageModule' */
  require('./upcomingElectionsList/upcomingElectionsList');
  require('./electionTypePage/electionTypePage');

  var localePageRoutes = require('./localePageRoutes');
  var localePageDirective = require('./localePageDirective');
  var LocalePageController = require('./LocalePageController');
  var localePageFactory = require('./localePageFactory');

  module.exports = angular.module('localePageModule',
    [
      'coreModules',
      'pageHeaderBreadcrumbsModule',
      'pageHeaderModule',
      'upcomingElectionsList',
      'electionTypePage'
    ])
    .config(localePageRoutes)
    .directive('localePage', localePageDirective)
    .controller('LocalePageController', LocalePageController)
    .factory('localePageFactory', localePageFactory);

})();
