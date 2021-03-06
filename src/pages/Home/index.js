import React from 'react'
import { TabBar } from 'antd-mobile';
import './index.css'


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false
    };
  }
  render() {
    return (
      <div>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          fullScreen={true}
          noRenderContent= {true}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={ <div style={ {
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            } }
            />
            }
            selectedIcon={ <div style={ {
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            } }
            />
            }
            selected={ this.state.selectedTab === 'blueTab' }
            badge={ 1 }
            onPress={ () => {
              this.setState({
                selectedTab: 'blueTab',
              });
            } }
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={ {
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              } }
              />
            }
            selectedIcon={
              <div style={ {
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              } }
              />
            }
            title="Koubei"
            key="Koubei"
            badge={ 'new' }
            selected={ this.state.selectedTab === 'redTab' }
            onPress={ () => {
              this.setState({
                selectedTab: 'redTab',
              });
            } }
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={ {
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              } }
              />
            }
            selectedIcon={
              <div style={ {
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              } }
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={ this.state.selectedTab === 'greenTab' }
            onPress={ () => {
              this.setState({
                selectedTab: 'greenTab',
              });
            } }
          >
          </TabBar.Item>
          <TabBar.Item
            icon={ { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' } }
            selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' } }
            title="My"
            key="my"
            selected={ this.state.selectedTab === 'yellowTab' }
            onPress={ () => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            } }
          >
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}