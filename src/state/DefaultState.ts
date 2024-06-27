import { Cartographic, ScreenSpaceEventHandler, ScreenSpaceEventType } from "cesium";
import { _IMapState } from "./internal/IMapState";
import { viewer } from "components";

export class DefaultState implements _IMapState
{
    private _eventHandler = new ScreenSpaceEventHandler();

    constructor()
    {
    }

    public initialize(): void
    {
        this._eventHandler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => 
        {
            const xyz = viewer.camera.pickEllipsoid(event.position);
            
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
