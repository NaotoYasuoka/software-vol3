import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'

export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
      path: ["Top"]
    };
  }

  pushPage() {
    this.props.navigator.pushPage({component: SecondPage, props: {value: 0+1}});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Top Page</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <div>
        <Child1 page={this.state.path} />
      </div>
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <a href='#' onClick={this.pushPage.bind(this)}>push page</a>
        </p>
      </Page>
    );
  }
}