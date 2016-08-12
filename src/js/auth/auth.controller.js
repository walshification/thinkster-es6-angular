class AuthCtrl {
  constructor(User, $state) {
    'ngInject';

    this._User = User;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');
  }

  submitForm () {
    this.isSubmitting = true;
    
    this._User.attemptAuth(this.authType, this.formData).then(
      // Callback for success
      (resp) => {
        this.isSubmitting = false;
        console.log(resp);
      },
      // Callback for error
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    );
  }
}

AuthCtrl.$inject = ['User', '$state'];

export default AuthCtrl;
