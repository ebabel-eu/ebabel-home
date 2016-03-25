import React, { Component } from 'react';

import Header from '../header/header';

class GetInTouch extends Component {
  render() {
    return (
      <article className='row'>
        <Header title='Leave your details, I&apos;ll get back to you' />
        <div className='col-sm-6'>
          <h2 className='h4'>Let me contact you...</h2>
          <form className='ndj-centered-form'>
            <label htmlFor='your-name'>Your name</label>
            <p className='input-group'>
              <span className='input-group-addon'>
                <span className='glyphicon glyphicon-user' aria-hidden='true'></span>
              </span>
              <input type='text' name='your-name' id='your-name' 
                  className='form-control' placeholder='What a lovely name!' autoFocus='true' />
            </p>
            <label htmlFor='email'>E-mail</label>
            <p className='input-group'>
              <span className='input-group-addon'>
                <span className='glyphicon glyphicon-envelope' aria-hidden='true'></span>
              </span>
              <input type='email' name='email' id='email' 
                  className='form-control' placeholder='I won&apos;t spam you. Ever.' />
            </p>
            <label htmlFor='telephone'>Telephone</label>
            <p className='input-group'>
              <span className='input-group-addon'>
                <span className='glyphicon glyphicon-phone-alt' aria-hidden='true'></span>
              </span>
              <input type='tel' name='telephone' id='telephone' 
                  className='form-control' placeholder='A call is worth 10 e-mails.' />
            </p>
            <p className='input-group'>
              <input type='checkbox' name='opt-in' id='opt-in' 
                  aria-label='Opt-in to have your details stored by me and used to contact you' />
              <label htmlFor='opt-in'>Do you agree I will store your details and use them to contact you?</label>
            </p>

            <input type='submit' value='Send' title='Call Me Maybe' className='btn btn-primary' disabled />
          </form>
        </div>
        <div className='col-sm-6'>
          <h2 className='h4'>...or contact me directly?</h2>
          <p>
            If you can&apos;t wait for me to call you back,
            you can try to reach me on my phone, but I rarely respond,
            especially if I&apos;m at work:
          </p>
          <p>
            <a href='tel:+31621809899'>+31 (0)6 21 80 98 99</a>
          </p>
          <p>
            Sending me an e-mail is also possible, I tend to reply 
            within 24 hours, unless your message ends up in my spam box:
          </p>
          <p>
            <a href='mailto:hello@ebabel.eu'>hello@ebabel.eu</a>
          </p>
        </div>
      </article>
    );
  }
}

export default GetInTouch;