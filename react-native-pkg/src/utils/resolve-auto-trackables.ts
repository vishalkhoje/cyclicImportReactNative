import { Dimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

function getCoordinates(): Promise<any> {
    return new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
}

async function resolveAutoTrackables(contextType: any): Promise<any> {
    switch (contextType) {
        case "userAgent":
            const deviceName = await DeviceInfo.getDeviceName();
            const mobileUserAgent = `${DeviceInfo.getApplicationName()}/${DeviceInfo.getVersion()}/${DeviceInfo.getSystemName()}/${DeviceInfo.getSystemVersion()}/${DeviceInfo.getBuildNumber()}/${DeviceInfo.getModel()}/${deviceName}`;
            return mobileUserAgent;
        case "screenSize":
            const screenResponse = {
                height: Dimensions.get("window").height,
                width: Dimensions.get("window").width,
            };
            return screenResponse;
        case "coordinates":
            const position = await getCoordinates();
            const coordinateResponse = {
                latitude: position.coords.latitude.toString(),
                longitude: position.coords.longitude.toString(),
            };
            return coordinateResponse;
    }
}

export default resolveAutoTrackables;
