import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';

class Pictologo extends Component {
  render() {
    return (
      <article className='col-md-4 col-sm-6'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>Rewriting an Android game</h2>
          </div>
          <div className='panel-body'>
            <p>
              I programmed <a href="https://play.google.com/store/apps/details?id=nl.websitekrijgen.androidgames.palabras.nl" 
                title="Android app">Pictologo</a>, 
              a children&apos;s <a href="https://github.com/ebabel-eu/pictologo/blob/master/src/eu/ebabel/pictologo/Pictologo.java" 
                title="Source code">game in Java</a> for Android mobiles.
            </p>
            <p>
              I want to rewrite this code into a React Native app.
            </p>
            <p><strong>Why React Native?</strong></p>
            <p>
              Thanks to React Native, I will target both the iOS and the Android devices, 
              with a high percentage of <mark>code re-use</mark>: I&apos;m hoping for more than 90%.
            </p>
            <p>
              The app will be <mark>performant</mark>: this isn&apos;t a Phonegap WebView container 
              that renders an HTML5 app.
            </p>
            <p>Besides moving into the iOS platform, I also want to add new functionality.</p>
            <p><strong>RESTful web API</strong></p>
            <p>
              The content of the game is currently hard coded. I want to move this content 
              to a RESTful web API that can be 100% <mark>re-used by all platforms</mark> (Android, iOS and web).
            </p>
            <p>With this web API, I will <mark>easily add new content</mark> without having to change any code.</p>
          </div>
          <div className='panel-footer'>
            <ProgressBar amount={30} unit='%' />
          </div>
        </div>
      </article>
    )
  }
}

export default Pictologo;