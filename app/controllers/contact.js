import Ember from 'ember';

export default Ember.Controller.extend({
 isDisabled : true,
  emailAddress: '',
  message: '',
 isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

 isDisabled: Ember.computed.not('isValid'), //!isValid ie opposite of isValid

//  actions: {

//     saveInvitation() {
//       alert(`The message is being sent from: ${this.get('emailAddress')}`);
//       this.set('responseMessage', 'We got your message and we’ll get in touch soon');
//       this.set('emailAddress', '');
//       this.set('message', '');
//     }
//   }

// });

 actions: {

    saveInvitation() {
      const email = this.get('emailAddress');

      const message = this.get('message');
      console.log(message);

      const newInvitation = this.store.createRecord('contact', {
        email: email,
        message: message
      });

      newInvitation.save().then((response) => {
        this.set('responseMessage', 'We got your message and we’ll get in touch soon');
        this.set('emailAddress', '');
        this.set('message', '');
      });

    }
  }

});
