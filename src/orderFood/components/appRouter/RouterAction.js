
import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  NavigationExperimental
} from 'react-native'

const {
          CardStack: NavigationCardStack,
          StateUtils: NavigationStateUtils
      } = NavigationExperimental

export const OFNavigationType_login = "OFNavigationType_login";
export const OFNavigationType_home = "OFNavigationType_home";
export const OFNavigationType_list = "OFNavigationType_list";
export const OFNavigationType_orderBreakfast = "OFNavigationType_orderBreakfast";

export function RouteToView(type){
  var obj = {
    type:'push',
    key:type
  };
  return obj;
}

export var NaviState = {
  index: 0,
  key: 'OrderFood',
  routes: [{key: OFNavigationType_login}]
}

const RouterReducer = function(currentState = NaviState, action){
  switch (action.type) {
    case 'push':
        NaviState = NavigationStateUtils.push(currentState, {key: action.key});
        return NaviState;
      break;
    case 'pop':
        NaviState = (currentState.index > 0 ? NavigationStateUtils.pop(currentState):currentState);
        return NaviState;
      break;
    default:
        NaviState = currentState;
        return NaviState;
      break;
  }
}

export default RouterReducer;
