import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';
import SecondPage from './SecondPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage, props: {value: 1}});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <a href='#' onClick={this.pushPage.bind(this)}>push page</a>
        </p>
      </Page>
    );
  }
}