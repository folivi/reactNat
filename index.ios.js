
const Icon = require('react-native-vector-icons/Octicons');
import Router from 'react-native-simple-router';
import Home from './app/components/home';
import Events from './app/components/events';
import Search from './app/components/search';
import store from './app/store';
import React, { Component } from 'react';
import styles from './app/stylesheets/app';
const I18n = require('react-native-i18n');

import {
    AppRegistry,
    TabBarIOS,
} from 'react-native';

const homeRoute = {
    name: 'Home',
    component: Home,
};
const eventsRoute = {
    name: 'Events',
    component: Events,
};
const searchRoute = {
    name: 'Search',
    component: Search,
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
                title = {I18n.t('home')}
                iconName= {'globe'}
                selected = {
                    this.state.selectedTab === 'homeTab'
                }
                onPress = {
                    () => {
                        this.selectTab('homeTab');
                    }
                }

            >
                <Router
                    firstRoute = {homeRoute}
                    headerStyle = {styles.header}
                />
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
            <Router
                firstRoute = {eventsRoute}
                headerStyle = {styles.header}
            />

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
            <Router
                firstRoute = {searchRoute}
                headerStyle = {styles.header}
            />

            </Icon.TabBarItem>
        < /TabBarIOS>
    );
  }
}
I18n.fallbacks = true;

I18n.translations = {
  en: {
    home: 'Home'
  },
  fr: {
    home: 'Accueil'
  }
};

AppRegistry.registerComponent('ReduxApp', () => ReduxApp);
