import "cesium/Build/Cesium/Widgets/widgets.css";
import "./app.css";
import { ArcGisBaseMapType, ArcGisMapServerImageryProvider, Camera, ImageryLayer, Rectangle, Viewer } from "cesium";

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
