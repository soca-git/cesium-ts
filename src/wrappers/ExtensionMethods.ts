import { ConstantProperty } from "cesium";
import { PositionProperty, Property, JulianDate, ConstantPositionProperty } from "cesium";

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
ConstantProperty.prototype.getValueNow = getValueNow;
