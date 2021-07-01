## Installation steps

1. On root project

```
    yarn install
```

1. On react-native-pkg goto this pkg path first
   cd react-native-pkg

```
    yarn install
    yarn compile
```

Note: Install "react-native-device-info" this pkg into your root project.
react-native-pkg this pkg use as peer dependency on react-native and react-native react-native-device-info

```
    "peerDependencies": {
        "react-native": "^0.64.1",
        "@types/react-native": "^0.64.5",
        "react-native-device-info": "^8.1.2"
    }
```
