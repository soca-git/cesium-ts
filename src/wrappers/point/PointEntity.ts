import { Cartesian3, Color, Entity, PointGraphics, PolygonGraphics, PositionProperty, Property } from "cesium";

export interface IPointEntityOptions
{
    position: Cartesian3;
    point: DefinedPointGraphics;
}

export class PointEntity extends Entity
{
    constructor(options: IPointEntityOptions)
    {
        super(options);
    }

    declare position: PositionProperty;
    declare point: DefinedPointGraphics;
}

export interface IDefinedPointGraphicsOptions extends PointGraphics.ConstructorOptions
{
    pixelSize: number;
    color: Color;
}

export class DefinedPointGraphics extends PointGraphics
{
    constructor(options: IDefinedPointGraphicsOptions)
    {
        super(options);
    }

    declare pixelSize: Property;
    declare color: Property;
}
