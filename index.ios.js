/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const Icon = require('react-native-vector-icons/Octicons');
import Router from 'react-native-simple-router';

import Home from './app/components/home';
import store from './app/store';
import React, { Component } from 'react';

import {
    AppRegistry,
    TabBarIOS,
    View,
} from 'react-native';

const homeRoute = {
    name: 'Home',
    component: Home,
};

class ReduxApp extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = store.getState();
        store.subscribe(() => {
            this.setState(store.getState());
        });
    }
    selectTab(tabName) {
        store.dispatch({
            type: 'SELECTED_TAB',
            selectedTab: tabName
        });
    }

    render() {
        return (
        <TabBarIOS
            barTintColor = "#779cc9"
            tintColor = "white"
        >
            <Icon.TabBarItem
                title = "Home"
                iconName= {'calendar'}
                selected = {
                    this.state.selectedTab === 'homeTab'
                }
                onPress = {
                    () => {
                        this.selectTab('homeTab');
                    }
                }

            >
                <Router firstRoute = {homeRoute} />
            </Icon.TabBarItem>
            <Icon.TabBarItem
                title = "Events"
                iconName= {'calendar'}
                selected = {
                    this.state.selectedTab === 'eventsTab'
                }
                onPress = {
                    () => {
                        this.selectTab('eventsTab');
                    }
                }

            >
                <View></View>
            </Icon.TabBarItem>
            <Icon.TabBarItem
                title = "Search"
                iconName= {'search'}
                selected = {
                    this.state.selectedTab === 'searchTab'
                }
                onPress = {
                    () => {
                        this.selectTab('searchTab');
                    }
                }

            >
                <View></View>
            </Icon.TabBarItem>
        < /TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('ReduxApp', () => ReduxApp);
