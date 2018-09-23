import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import MySetting from "./tabsComponents/MySetting";
import ReportSetting from "./tabsComponents/ReportSetting";

class Setting extends React.Component {
  state = {
    titleKey: 'two',
    tabListTitle: [
      {
        key: 'one',
        tab: '个人设置',
      },
      {
        key: 'two',
        tab: '汇报设置',
      }
    ],
    contentList: {
      one: <MySetting />,
      two: <ReportSetting />
    }
  }
  render() {
    return (
      <Card
        style={{ width: '100%' }}
        tabList={this.state.tabListTitle}
        activeTabKey={this.state.titleKey}
        onTabChange={(key) => { this.setState({ titleKey: key }) }}
      >
        {this.state.contentList[this.state.titleKey]}
      </Card>
    );
  }

}


export default connect(({ home }) => ({

}))(Setting);
