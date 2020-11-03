import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

export default class SecondPage extends React.Component {



  pushPage(value) {
    this.props.navigator.pushPage({component: SecondPage, props: {value: value+1}});
  }

  popPage() {
    this.props.navigator.popPage();
  }

  renderToolbar(num) {
    return (
      <Toolbar>
        <div className="left"><BackButton>Back</BackButton></div>
        <div className="center">Page {num}</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={()=>this.renderToolbar(this.props.value)}>
        <p>受け取った値：{this.props.value}</p>
        <p style={{textAlign: 'center'}}>
          <Button onClick={() => this.pushPage(this.props.value)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}