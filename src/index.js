import React from 'react'
import PropTypes from 'prop-types'

import Colors from './utils/Colors';

export Colors from './utils/Colors';

export const ExampleComponent = ({ text }) => (
  <div style={{
    backgroundColor: Colors.dallas.primary,
    color: Colors.dallas.secondary
  }}>
    Example Component: {text}
  </div>
);
