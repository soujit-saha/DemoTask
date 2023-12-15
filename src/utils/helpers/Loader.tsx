import React from 'react';
import {ActivityIndicator, SafeAreaView, Dimensions} from 'react-native';

export default function Loader(props: any) {
  return props.visible ? (
    <SafeAreaView
      style={{
        height: Dimensions.get('window').height,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 10,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator size="large" color={'white'} />
    </SafeAreaView>
  ) : null;
}
