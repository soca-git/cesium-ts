import { Cartesian3, Viewer } from "cesium";
import { PointEntityWrapper } from "./PointEntityWrapper";
import { DefinedPointGraphics, IDefinedPointGraphicsOptions, PointEntity } from "./PointEntity";

export class PointEntityWrapperFactory
{
    private readonly dependencies: { viewer: Viewer };

    constructor(dependencies: { viewer: Viewer })
    {
        this.dependencies = dependencies;
    }

    public create(options: { position: Cartesian3, point: IDefinedPointGraphicsOptions })
    {
        return new PointEntityWrapper(
            this.dependencies,
            new PointEntity({ position: options.position, point: new DefinedPointGraphics(options.point) })
        );
    }
}
