import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

import styles from '../stylesheets/app';
import EventListItem from './events-list-item';
import EventDetail from './event-detail';

const propTypes = {
    toRoute: PropTypes.func.isRequired,
};

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        };
        this.showEvent = this.showEvent.bind(this);
    }

    componentDidMount() {
    }

    showEvent() {
        this.props.toRoute({
          name: 'Event',
          component: EventDetail
        });
    }

    render() {
        return (
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.contentContainer}
                automaticallyAdjustContentInsets={true}
            >
                {
                  this.state.events.map(function(event){
                      return (
                          <EventListItem {...event} key={event.id} showEvent= {this.showEvent} />
                    )
                  })
                }
             </ScrollView>
        );
    }
}
Events.propTypes = propTypes;

export default Events;
