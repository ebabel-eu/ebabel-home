import React from 'react';
import Navigation from 'react-toolbox/lib/navigation';

const actions = [
  { label: 'Current projects', raised: true, icon: 'access_alarm' },
  { label: 'Get in touch', raised: true, accent: true, icon: 'room' },
  { label: 'When am I free', raised: true, icon: 'room' },
  { label: 'Hire me', raised: true, icon: 'room' }
];

const NavigationBar = () => (
  <Navigation type='horizontal' actions={actions} />
);

export default NavigationBar;