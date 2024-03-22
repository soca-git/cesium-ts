import { DrawPolygonMapState } from "./DrawPolygonMapState";
import { IMapState } from "./IMapState";

class MapContext
{
    private _state: IMapState;

    public transition(state: IMapState)
    {
        this._state?.cancel();
        this._state = state;
        this._state.initialize();
    }

    public defaultTransition()
    {
        this._state?.cancel();
        this._state = new DrawPolygonMapState();
        this._state.initialize();
    }
}

export const mapContext = new MapContext();
