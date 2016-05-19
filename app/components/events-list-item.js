import styles from '../stylesheets/app';
import React, { PropTypes } from 'react';
import
    {
        View,
        Image,
        TouchableHighlight,
        Text, Component,
    } from 'react-native';

const propTypes = {
    showEvent: PropTypes.func.isRequired,
    text: PropTypes.string,
    user: PropTypes.object,
};

class EventListItem extends Component {
    constructor(props) {
        super(props);
        this.showEvent = this.showEvent.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.length !== this.props.length;
    }

    showEvent() {
        this.props.showEvent(this.props);
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableHighlight underlayColor = "#ccc"
                    onPress = {this.showEvent}
                >
                    <View></View>
                </TouchableHighlight>
            </View>
        )
    }
}

EventListItem.propTypes = propTypes;


export default EventListItem;
