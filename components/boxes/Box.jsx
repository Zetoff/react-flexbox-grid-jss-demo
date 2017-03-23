import React from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import injectSheet from 'react-jss';

jss.setup(preset());

const styles = {
  box: {
    boxSizing: 'border-box',
    position: 'relative',
    minHeight: '1rem',
    marginBottom: 0,
    background: '#007FFF',
    border: '1px solid #FFF',
    borderRadius: '2px',
    overflow: 'hidden',
    textAlign: 'center',
    color: 'white',
    '@media only screen and (min-width: 48rem)': {
      padding: '1rem',
    },
  },
};

const Box = ({ classes }) => (
  <div className={classes.box} />
);

export { styles };

export default injectSheet(styles)(Box);
