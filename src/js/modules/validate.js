import {
  validateConfig,
  requestsConfig
} from './configs.js';

import {
  sendData,
} from './utils.js';

const justValidateConfig = validateConfig.justValidate;

const isSendOk = ( target ) => {
  try {
    dataLayer.push( {
      'event': 'send_form'
    } );
    console.log( 'event success' );

  } catch ( error ) {
    console.log( 'event not success' );
  }
  target.classList.add( validateConfig.successClassName );
  setTimeout( () => {
    target.classList.remove( validateConfig.successClassName );
  }, validateConfig.successTimeout );
};

const isSendError = ( target ) => {
  target.classList.add( justValidateConfig.errorFormClass );
  setTimeout( () => {
    target.classList.remove( justValidateConfig.errorFormClass );
  }, validateConfig.errorTimeout );
};

export const validateForms = () => {
  const forms = document.querySelectorAll( 'form[data-validate]' );

  forms.forEach( ( form ) => {
    const formID = `#${form.id}`;
    const validationRules = new JustValidate( formID, justValidateConfig );
    const requiredFields = form.querySelectorAll( '[required]' );
    new JustPhoneMask( validateConfig.phoneMask );

    requiredFields.forEach( ( input ) => {
      switch ( input.dataset.validate ) {
        case 'name':
          validationRules.addField( `${formID} [data-validate="name"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'This field is required'
          }, ] );
          break;
        case 'email':
          validationRules.addField( `${formID} [data-validate="email"]`, [ {
              rule: 'required',
              value: true,
              errorMessage: 'This field is required'
            },
            {
              rule: 'email',
              errorMessage: 'Incorrect email address',
            },
          ] );
          break;
        case 'phone':
          validationRules.addField( `${formID} [data-validate="phone"]`, [ {
              rule: 'required',
              value: true,
            },
            {
              rule: 'minLength',
              value: document.querySelector( `${formID} [data-validate="phone"]` ).dataset.mask.length,
            },
          ] );
          break;
        case 'confirm':
          validationRules.addField( `${formID} [data-validate="confirm"]`, [ {
            rule: 'required',
            value: true,
            errorMessage: 'This field is required',
          }, ] );
          break;
      }
    } );
    validationRules.onSuccess( ( evt ) => {
      sendData( evt, requestsConfig.handlerURL, isSendOk, isSendError );
    } );
  } );
};