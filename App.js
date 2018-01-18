/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,Text
} from 'react-native';
import Calculator from './src/Calculator';


export default class App extends Component<{}> {
  render() {
    return (
        <Calculator/>
    );
  }
}
