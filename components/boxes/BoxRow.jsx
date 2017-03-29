import React from 'react';
import preset from 'jss-preset-default';
import jss from 'jss';
import injectSheet from 'react-jss';
import classNames from 'classnames';


const styles = {
  boxRow: {
    marginBottom: '1rem',
  },
};

const BoxRow = ({ classes }) => (
  <div
    className={classNames({
      [classes.box]: true,
      [classes.boxRow]: true,
    })}
  />
);

export default injectSheet(styles)(BoxRow);
