import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button, BackButton} from 'react-onsenui';

export default class SecondPage extends React.Component {

  Breadcrumb(st, num) {
    alert(pages);
    var pages = this.props.page;
    alert(pages);
    pages.push("Path"+num); // 入力テキストをitems配列に追加
    alert(pages);
    this.setState({path: pages}); // this.stateを更新
  }


  pushPage(value) {
    this.props.navigator.pushPage({component: SecondPage, props: {value: value+1}});
    this.Breadcrumb("push", value+1);
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
        <p>回数：{this.props.value}</p>
        <p style={{textAlign: 'center'}}>
          <Button onClick={() => this.pushPage(this.props.value)}>Push page</Button>
          <Button onClick={this.popPage.bind(this)}>Pop page</Button>
        </p>
      </Page>
    );
  }
}