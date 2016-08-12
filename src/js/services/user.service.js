export default class User {
  constructor(AppConstants, $http) {
    'ngInject',

    this._AppConstants = AppConstants;
    this._$http = $http;

    // Object to store our properties
    this.current = null;
  }

  attemptAuth (type, credentials) {
    let route = (type === 'login') ? '/login' : '';
    return this._$http({
      url: this._AppConstants.api + '/users' + route,
      method: 'POST',
      data: {
        user: credentials
      }
    }).then(
      // On success
      (resp) => {
        // Store the user's info  for easy lookup
        this.current = resp.data.user;

        return resp;
      }
    );
  }

}
User.$inject = ['AppConstants', '$http'];
