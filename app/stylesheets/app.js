import {
    StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    contentContainer: {
    paddingBottom: 20
    },
      scrollView: {
        backgroundColor: '#779cc9'
      },
      noDealsView:{
        flex: 1,
        height: 100,
        backgroundColor: '#fff',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    eventListItem: {
    backgroundColor: '#FFF',
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
    marginTop: 2,
    height: 70,
    flex: 1,
    flexDirection: 'row',
    shadowColor: '#CCC',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1
  },
  eventImageThumb: {
    height: 70,
    width: 70,
    flex: 1,
  },
  eventName: {
    flex: 2,
    fontFamily: 'Raleway-Regular',
    fontSize: 12,
    color: 'darkslateblue',
    fontWeight: 'bold',
    padding: 3
    },
    header: {
        backgroundColor: '#779cc9',
    },
});
