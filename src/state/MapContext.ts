import { _IMapState } from "./internal/IMapState";
import { DrawPolygonMapState } from "state";

class MapContext
{
    private _state: _IMapState;

    public transition(state: _IMapState)
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
