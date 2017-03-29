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
  Col,
} from 'react-flexbox-grid-jss';
import Box from '../../components/boxes/Box.jsx';
import BoxRow from '../../components/boxes/BoxRow.jsx';

class HomePage extends React.Component {

  static propTypes = {
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={12} sm={3} md={2} lg={1}>
              <Box />
            </Col>
            <Col xs={6} sm={6} md={8} lg={10}>
              <BoxRow />
            </Col>
            <Col xs={6} sm={3} md={2} lg={1}>
              <BoxRow />
            </Col>
          </Row>
        </Container>
        <ContainerFluid>
          <Row reverse>
            <BoxRow />
          </Row>
        </ContainerFluid>
      </div>
    );
  }

}

export default HomePage;
