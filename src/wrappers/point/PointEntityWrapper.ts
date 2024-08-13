import "../ExtensionMethods";
import { Cartesian3, ConstantPositionProperty, Viewer } from "cesium";
import { PointEntity } from "./PointEntity";
import { EntityWrapper } from "../EntityWrapper";
import { Color } from "cesium";
import { ConstantProperty } from "cesium";

export class PointEntityWrapper extends EntityWrapper
{
    declare protected readonly entity: PointEntity;

    constructor(dependencies: { viewer: Viewer }, point: PointEntity)
    {
        super(dependencies, point);
    }

    public get position() : Cartesian3
    {
        return this.entity.position.getValueNow();
    }

    public set position(value: Cartesian3)
    {
        this.entity.position = new ConstantPositionProperty(value);
    }

    public get color(): Color
    {
        return this.entity.point.color.getValueNow();
    }

    public set color(value: Color)
    {
        this.entity.point.color = new ConstantProperty(value)
    }

    public get outlineColor(): Color
    {
        return this.entity.point.outlineColor.getValueNow();
    }

    public set outlineColor(value: Color)
    {
        this.entity.point.outlineColor = new ConstantProperty(value)
    }
}
