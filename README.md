# react-native-vxgplayer

### Install via npm

`npm i react-native-vxgplayer@0.0.6 --save`

### Install via yarn

`yarn i react-native-vxgplayer@0.0.6 --save`


### Add dependency to `android/settings.gradle`

```
include ':react-native-vxgplayer'
project(':react-native-vxgplayer').projectDir = new File(settingsDir, '../node_modules/react-native-vxgplayer/android') 
```

### Add `android/app/build.gradle`

```
...
dependencies {
  ...
  compile project(':react-native-vxgplayer')
}
```

### Register module in `MainActivity.java`

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
import VXGPlayer from 'react-native-vxgplayer';

...

render() {
  return (
    <View style={styles.container}>
      <VXGPlayer style={styles.video} src={'rtsp://yourrtslurl'} />
    </View>
  );
}
```
