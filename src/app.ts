import "cesium/Build/Cesium/Widgets/widgets.css";
import "./app.css";
import { mapContext } from "state";
import { DrawGeodesicPolyline, DrawRhumblineCorridor } from "functions";
import { PositionProperty, JulianDate } from "cesium";
import { ConstantPositionProperty } from "cesium";
import { Property } from "cesium";

declare module "cesium"
{
    interface PositionProperty
    {
        getValueNow(): any
    }

    interface ConstantPositionProperty
    {
        getValueNow(): any
    }

    interface Property
    {
        getValueNow(): any
    }

    interface ConstantProperty
    {
        getValueNow(): any
    }
}

function getValueNow(this: PositionProperty | Property): any
{
    return this.getValue(JulianDate.now());
}
ConstantPositionProperty.prototype.getValueNow = getValueNow;
Property.prototype.getValueNow = getValueNow;

mapContext.defaultTransition();

DrawGeodesicPolyline();
DrawRhumblineCorridor();
