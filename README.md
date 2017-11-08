# react-native-vxgplayer

#### Install via npm

`npm i react-native-vxgplayer@1.0.2 --save`

#### Install via yarn

`yarn add react-native-vxgplayer@1.0.2`


#### Add dependency to `android/settings.gradle`

```
include ':react-native-vxgplayer'
project(':react-native-vxgplayer').projectDir = new File(settingsDir, '../node_modules/react-native-vxgplayer/android') 
```

#### Add `android/app/build.gradle`

```
...
dependencies {
  ...
  compile project(':react-native-vxgplayer')
}
```

#### Register module in `MainApplication.java`

```
import test.fsf.com.vxgplayer.ReactNative.*;  // <--- import

@Override
 protected List<ReactPackage> getPackages() {
   return Arrays.<ReactPackage>asList(
      new MainReactPackage(),
      new VXGPlayerPackage()  // <------- here
   );
 }
```

#### API

- `stop()`


### Usage

```
import React, { AppRegistry, StyleSheet, Component, View } from 'react-native'

import VXGPlayer from 'react-native-vxgplayer';

class Example extends Component {
  constructor(props, context) {
    super(props, context)
  }

  componentWillUnmount() {
    this.vxgPlayer.stop();
  }

  render() {

    return (
      <View style={styles.container}>
        <VXGPlayer 
          ref={(player)=>{this.vxgPlayer = player}}
          style={styles.video} 
          src={'rtsp://your.rtsp.url'} 
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#000000',
  },
  video: {
    height: 320,
    width: 480,
  },
});

AppRegistry.registerComponent('example', () => Example);

```
