import { Math as CesiumMath, CallbackProperty, Cartesian2, Cartographic, Entity, HorizontalOrigin, ScreenSpaceEventHandler, ScreenSpaceEventType, VerticalOrigin, Color, PointGraphics, LabelGraphics } from "cesium";
import { IMapState } from "./IMapState";
import { viewer } from "../viewer";

export class DrawPolygonMapState implements IMapState
{
    private _eventHandler = new ScreenSpaceEventHandler();
    private _label = new Entity();
    private _point = new Entity();

    constructor()
    {
        this._label = new Entity(
        {
            label: {
              showBackground: true,
              font: "14px monospace",
              horizontalOrigin: HorizontalOrigin.LEFT,
              verticalOrigin: VerticalOrigin.TOP,
              pixelOffset: new Cartesian2(15, 0),
            },
        });

        this._point = new Entity(
        {
            point: {
                pixelSize: 8,
                color: Color.FIREBRICK,
                outlineColor: Color.RED,
                outlineWidth: 3
            }
        });
    }

    public initialize(): void
    {
        viewer.entities.add(this._label);
        viewer.entities.add(this._point);

        this._eventHandler.setInputAction((event: ScreenSpaceEventHandler.MotionEvent) =>
        {
            const xyz = viewer.camera.pickEllipsoid(event.endPosition);

            if (!xyz)
            {
                return;
            }

            const llh = Cartographic.fromCartesian(xyz);
            this._label.position = new CallbackProperty(() => xyz, false) as any;
            this._point.position = new CallbackProperty(() => xyz, false) as any;

            const lon = CesiumMath.toDegrees(llh.longitude).toFixed(2);
            const lat = CesiumMath.toDegrees(llh.latitude).toFixed(2);

            this._label.label.text = new CallbackProperty(() => `lon:${lon}\nlat:${lat}`, false);

        }, ScreenSpaceEventType.MOUSE_MOVE);

        this._eventHandler.setInputAction((event: ScreenSpaceEventHandler.PositionedEvent) => 
        {
            const xyz = viewer.camera.pickEllipsoid(event.position);
            
            if (!xyz)
            {
                return;
            }

            const clone = new PointGraphics();
            clone.merge(this._point.point);

            const x = new Entity({
                position: xyz,
                point: clone
            });
            viewer.entities.add(x);

            const clone2 = new LabelGraphics();
            clone2.merge(this._label.label);

            const y = new Entity({
                position: xyz,
                label: clone2
            });
            viewer.entities.add(y);

        }, ScreenSpaceEventType.LEFT_CLICK);
    }

    public complete(): void
    {
        throw new Error("Method not implemented.");
    }

    public cancel(): void
    {
        throw new Error("Method not implemented.");
    }
}
