import { ArcGisBaseMapType, ArcGisMapServerImageryProvider, ImageryLayer, Viewer } from "cesium";

const arcGisImagery = ArcGisMapServerImageryProvider.fromBasemapType(ArcGisBaseMapType.SATELLITE);
const options : Viewer.ConstructorOptions = {
    baseLayer: ImageryLayer.fromProviderAsync(arcGisImagery, {}),
    sceneModePicker: false,
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    fullscreenButton: false,
    selectionIndicator: false,
    infoBox: false,
    navigationHelpButton: false,
    geocoder: false,
    skyBox: false,
    skyAtmosphere: false,
};

export const viewer = new Viewer('cesium-container', options);
viewer.scene.debugShowFramesPerSecond = true;
