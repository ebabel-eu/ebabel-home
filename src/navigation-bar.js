import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';

const actions = [
  { label: 'Current projects', icon: 'power', accent: true },
  { label: 'Get in touch', icon: 'chat' },
  { label: 'When am I free', icon: 'event' },
  { label: 'Hire me', icon: 'business' }
];

const NavigationBar = () => (
  <Navigation type='horizontal' actions={actions} />
);

export default NavigationBar;