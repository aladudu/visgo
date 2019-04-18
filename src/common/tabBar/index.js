import React, { Component } from 'react'
import { TabBar } from "antd-mobile";
import {
    Home,
    Classify,
    Shopcar,
    Mine,
    Indent
} from "@views";
import { withRouter } from "react-router-dom";
class TabBarCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            fullScreen: true,
            hidden: false
        };
    }

    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 400 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#FC3B72"
                    barTintColor="white"
                    hidden={this.state.hidden}

                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '24px',
                            height: '24px',
                            background: `url(${require("../../img/home1.svg")}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '24px',
                            height: '24px',
                            background: `url(${require("../../img/home.svg")}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}

                        onPress={() => {
                            this.setState({
                                selectedTab: 'home',
                            });
                            this.props.history.push("/home");
                            document.title = "首页";
                        }}
                        data-seed="logId"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/classify1.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/classify.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="分类"
                        key="classify"

                        selected={this.state.selectedTab === 'classify'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'classify',
                            });
                            this.props.history.push("/classify");
                            document.title = "分类";
                        }}
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/shopcar.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/sgopcar1.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="购物车"
                        key="shopcar"

                        selected={this.state.selectedTab === 'shopcar'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'shopcar',
                                hidden: !this.state.hidden
                            });
                            this.props.history.push("/shopcar");
                            document.title = "购物车";
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/indent1.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/indent.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="订单"
                        key="indent"

                        selected={this.state.selectedTab === 'indent'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'indent',
                            });
                            this.props.history.push("/indent");
                            document.title = "订单";
                        }}
                        data-seed="logId1"
                    >

                    </TabBar.Item>
                    <TabBar.Item
                         icon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/wode1.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '24px',
                                height: '24px',
                                background: `url(${require("../../img/wode.svg")}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="我的"
                        key="mine"
                        selected={this.state.selectedTab === 'mine'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'mine',
                            });
                            this.props.history.push("/mine");
                            document.title = "我的";
                        }}
                    >
                    </TabBar.Item>

                </TabBar>
            </div>

        )
    }
}

export default withRouter(TabBarCom);