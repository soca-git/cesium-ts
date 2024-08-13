import { Cartographic, ScreenSpaceEventHandler, ScreenSpaceEventType, Viewer } from "cesium";
import { _IMapState } from "./internal/IMapState";

export class DefaultState implements _IMapState
{
    private readonly viewer: Viewer;
    private _eventHandler = new ScreenSpaceEventHandler();

    constructor(viewer: Viewer)
    {
        this.viewer = viewer;
    }

    public initialize(): void
    {
        this._eventHandler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => 
        {
            const xyz = this.viewer.camera.pickEllipsoid(event.position);
            
            if (!xyz)
            {
                return;
            }

            console.log(Cartographic.fromCartesian(xyz));

        }, ScreenSpaceEventType.LEFT_CLICK);
    }

    public complete(): void
    {
        this._eventHandler.destroy();
    }

    public cancel(): void
    {
        this._eventHandler.destroy();
    }
}    
