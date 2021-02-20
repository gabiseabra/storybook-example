import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './Badge.styles';

export const Badge = memo(
  function Badge ({ text, style }) {
    const classes = useStyles();

    return (
      <span className={classes.badge} style={style}>
        {text}
      </span>
    );
  }
);

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.shape({
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

Badge.defaultProps = {
  style: null,
};
