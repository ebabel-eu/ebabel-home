import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <article>
        <h2>Projects I&apos;m currently working on</h2>
        <article>
          <h3>Rewriting an Android game</h3>
          <p>
            I programmed <a href="https://play.google.com/store/apps/details?id=nl.websitekrijgen.androidgames.palabras.nl" 
              title="Android app">Pictologo</a>, 
            a children&apos;s <a href="https://github.com/ebabel-eu/pictologo/blob/master/src/eu/ebabel/pictologo/Pictologo.java" 
              title="Source code">game in Java</a> for Android mobiles.
          </p>
          <p>
            I want to rewrite this code into a React Native app.
          </p>
          <h4>Why React Native?</h4>
          <p>
            Thanks to React Native, I will target both the iOS and the Android devices, 
            with a high percentage of code re-use: I&apos;m hoping for more than 90%.
          </p>
          <p>
            The app will be performant: this isn&apos;t a Phonegap WebView container 
            that renders an HTML5 app.
          </p>
          <p>Besides moving into the iOS platform, I also want to add new functionality.</p>
          <h4>RESTful web API</h4>
          <p>
            The content of the game is currently hard coded. I want to move this content 
            to a RESTful web API that can be 100% re-used by all platforms (Android, iOS and web).
          </p>
          <p>This web API will make it easy to add new content without having to change any code.</p>
        </article>
      </article>
    );
  }
}

export default Projects;