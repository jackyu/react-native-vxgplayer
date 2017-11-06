# react-native-vxgplayer

#### Install via npm

`npm i react-native-vxgplayer@0.0.6 --save`

#### Install via yarn

`yarn add react-native-vxgplayer@0.0.6`


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

#### Register module in `MainActivity.java`

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

### Usage 使用方法

```
import React, { AppRegistry, StyleSheet, Component, View } from 'react-native'

import VXGPlayer from 'react-native-vxgplayer';

class Example extends Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    return (
      <View style={styles.container}>
        <VXGPlayer style={styles.video} src={'rtsp://your.rtsp.url'} />
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
