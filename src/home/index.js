/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import {
  Container,
  ContainerFluid,
  Row,
} from 'react-flexbox-grid-jss';

class HomePage extends React.Component {

  static propTypes = {
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
          Hello 1
        </Row>
        </Container>
        <ContainerFluid>
          <Row>
          Hello 2
        </Row>
        </ContainerFluid>
      </div>
    );
  }

}

export default HomePage;
