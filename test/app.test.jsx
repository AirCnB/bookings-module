import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/app';
import Pricing from '../client/components/Pricing';
import Dates from '../client/components/Dates';
import Guests from '../client/components/Guests';
import Summary from '../client/components/Summary';
import BookingButton from '../client/components/BookingButton';

describe('Enzyme tests on React components', () => {
  const reactApp = shallow(<App />);

  test('It should render all React components without throwing an error', () => {
    expect(reactApp.contains(<Pricing />)).toBe(true);
  });

  test('It should render the Dates component without throwing an error', () => {
    expect(reactApp.contains(<Dates />)).toBe(true);
  });

  test('It should render the Guests component without throwing an error', () => {
    expect(reactApp.contains(<Guests />)).toBe(true);
  });

  test('It should render the Summary component without throwing an error', () => {
    expect(reactApp.contains(<Summary />)).toBe(true);
  });

  test('It should render the BookingButton component without throwing an error', () => {
    expect(reactApp.contains(<BookingButton />)).toBe(true);
  });
});

