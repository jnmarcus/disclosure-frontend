'use strict';

function appRoutes($stateProvider) {

  var home = {
    name: 'home', // state name
    url: '/', // url path that activates this state
    template: '<home-page class="page-fade"></home-page>', // generate the Directive "homeView" - when calling the directive in HTML, the name must not be camelCased
    ncyBreadcrumb: {
      label: 'Home'
    },
    data: {
      moduleClasses: 'page', // assign a module class to the <body> tag
      pageClasses: 'home', // assign a page-specific class to the <body> tag
      pageTitle: 'Home' // set the title in the <head> section of the index.html file
    }
  };

  var appMain = {
    name: 'appMain',
    abstract: true,  // This makes it so that the url for this route doesn't actually resolve
    url: '/app-main',
    template: '<app-main class="page-fade"></app-main>',
    controller: ['$rootScope', function($rootScope) {
      // https://github.com/caciviclab/disclosure-frontend/issues/182
      // angular-breadcrumb uses the child state to render the breadcrumb
      // labels. This isn't compatible with how we're using `controllerAs`
      // syntax and directives with isolate scope. To work-around, store the
      // breadcrumb state on the root scope and then copy it to the child scope
      // as needed.
      $rootScope.breadcrumb = {};
    }]
  };

  var about = {
    name: 'appMain.about', // state name
    url: '^/about', // The ^ character makes this url override the parent url
    template: '<about-page></about-page>', // generate the Directive "aboutPage"
    ncyBreadcrumb: {
      label: 'About',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page', // assign a module class to the <body> tag
      pageClasses: 'aboutPage', // assign a page-specific class to the <body> tag
      pageTitle: 'About' // set the title in the <head> section of the index.html file
    }
  };

  var faq = {
    name: 'appMain.faq', // state name
    url: '^/faq', // The ^ character makes this url override the parent url
    template: '<faq-page></faq-page>', // generate the Directive "faqPage"
    ncyBreadcrumb: {
      label: 'FAQ',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page', // assign a module class to the <body> tag
      pageClasses: 'faqPage', // assign a page-specific class to the <body> tag
      pageTitle: 'Frequently Asked Questions' // set the title in the <head> section of the index.html file
    }
  };

  //var cityElections = {
  //  name: 'cityElections',
  //  url: '/city-elections',
  //  template: '<app-main></app-main>',
  //  //controller: 'ExamplePage1Controller',
  //  data: {
  //    moduleClasses: 'page',
  //    pageClasses: 'cityElections',
  //    pageTitle: 'City Elections',
  //    pageDescription: 'Some description.'
  //  }
  //};

  var examplePage1 = {
    name: 'appMain.examplePage1',
    url: '^/example-page-1', // The ^ character makes this url override the parent url
    template: '<example-page-1></example-page-1>',
    //controller: 'ExamplePage1Controller',
    ncyBreadcrumb: {
      label: 'Example Page 1',
      parent: 'appMain'
    },
    data: {
      moduleClasses: 'page',
      pageClasses: 'examplePage1',
      pageTitle: 'Example Page 1',
      pageDescription: 'Some description.'
    }
  };


  $stateProvider.state(home);
  $stateProvider.state(appMain);
  $stateProvider.state(about);
  $stateProvider.state(faq);
  $stateProvider.state(examplePage1);

}

appRoutes.$inject = ['$stateProvider'];
module.exports = appRoutes;
