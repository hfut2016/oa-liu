import React from 'react';
import { connect } from 'dva';
import { Card } from 'antd';
import MemberManager from "./tabsComponents/MemberManager/";
import RecruitManager from "./tabsComponents/RecruitManager/";

class Member extends React.Component {
  state = {
    titleKey: 'one',
    tabListTitle: [
      {
        key: 'one',
        tab: '成员管理',
        role: 1
      },
      {
        key: 'two',
        tab: '招新管理',
        role: 1
      },
    ],
    contentList: {
      one: <MemberManager />,
      two: <RecruitManager />,
    }
  }
  render() {
    return (
      <Card
        style={{ width: '100%' }}
        tabList={this.state.tabListTitle.filter(item => item.role <= this.props.user.role)}
        activeTabKey={this.state.titleKey}
        onTabChange={(key) => { this.setState({ titleKey: key }) }}
      >
        {this.state.contentList[this.state.titleKey]}
      </Card>
    );
  }
}

export default connect(({ login }) => ({
  user: login.user
}))(Member);
