import 'babel-core/register';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Grid,
  Row,
  Col,
} from 'react-styled-flexboxgrid';

class Element extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3}>
            <h1>Hello, world</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
};

ReactDOM.render(<Element name='test'/>, document.getElementById('root'));
