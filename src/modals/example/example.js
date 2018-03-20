import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Col,
} from 'react-styled-flexboxgrid';

const element = () => (
  <Grid>
    <Row>
      <Col xs={6} md={3}>
        <h1>Hello, world</h1>
      </Col>
    </Row>
  </Grid>
);

setTimeout(() => ReactDOM.render(element, document.getElementById('root')), 1000);
