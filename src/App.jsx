import React, { memo } from 'react';
import { Badge } from './components/Badge';

export const App = memo(
  function App () {
    return (
      <div>
        <p>Hello World</p>
        <Badge text="23" />
      </div>
    );
  }
);
