import { ArcGisBaseMapType, ArcGisMapServerImageryProvider, ImageryLayer, Viewer } from "cesium";

export class ViewerFactory
{
    private readonly viewer: Viewer;

    constructor()
    {
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

        this.viewer = new Viewer('cesium-container', options);
        this.viewer.scene.debugShowFramesPerSecond = true;
    }

    public get Viewer() : Viewer
    {
        return this.viewer;
    }
}
