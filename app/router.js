import EmberRouter from '@ember/routing/router';
import config from 'a11y-intro/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
