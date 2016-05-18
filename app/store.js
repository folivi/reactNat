import { createStore } from 'redux';

const defaultState = {
    events: [],
    selectedTab: 'homeTab',
};

function store(state = defaultState, action) {
    switch (action.type) {
        case 'SELECTED_TAB':
            console.log(action);
            return Object.assign({}, state, {
                selectedTab: action.selectedTab,
            });
        default:
            return state;

    }
}

export default createStore(store);
