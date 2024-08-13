import { container } from "components";
import { _IMapState } from "./internal/IMapState";
import { DefaultState } from "state";

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
        this._state = new DefaultState(container.Viewer);
        this._state.initialize();
    }
}

export const mapContext = new MapContext();
