import React from 'react';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import { styles as boxStyles } from './Box.jsx';


const styles = {
  box: boxStyles.box,
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
