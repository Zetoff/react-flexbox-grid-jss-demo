import React from 'react';
import preset from 'jss-preset-default';
import jss from 'jss';
import injectSheet from 'react-jss';

jss.setup(preset());

const sheet = jss.createStyleSheet({
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
  },
});

class Box extends React.PureComponent {
  render() {
    return (
      <div className={this.props.classes.box} />
    );
  }
}

export default injectSheet(sheet)(Box);
