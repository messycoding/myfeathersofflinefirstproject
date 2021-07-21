import React from 'react';
import {Text, View} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import localstorage from 'feathers-localstorage';
import feathers from '@feathersjs/feathers';
import feathersSocketio from '@feathersjs/socketio-client';
import socketio from 'socket.io-client';
import {owndataWrapper, Owndata} from '@feathersjs-offline/client';
import memory from 'feathers-memory';

const socketConnection = socketio('http://localhost:3030', {
  transports: ['websocket'],
  allowUpgrades: false,
  forceNew: true,
});

const app = feathers();
app.configure(feathersSocketio(socketConnection));
app.use('/messages', memory());
owndataWrapper(app, '/messages');

const App = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Welcome</Text>
        </View>
    )
}

export default React.memo(App);