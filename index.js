import { NativeModules } from 'react-native';
const { UtilMap } = NativeModules

const place = {
    lon: 32.40,
    lat: 119.40,
    address: '扬州市'
}

navigator.geolocation.getCurrentPosition(
    (position) => {
        place.lon = position.coords.longitude,
        place.lat = position.coords.latitude,
        place.address = position.coords.address
    },
    (error) => { },
    {timeout: 10000}
);
export function getMapList(params) {
    if(!params) params = {}
    const { lon, lat ,address } = {...place,...params};
    return new Promise((resolve) => {
        UtilMap.findEvents(lon, lat, address, (list) => {
            resolve(list)
        })
    })
}

export function mapJump(target, params) {
    if (!target) {
        throw new Error('target is required')
    }

    const { lon, lat ,address } = {...place,...params};
    UtilMap.addEvent(target.title, target.url, lon, lat, address);
}