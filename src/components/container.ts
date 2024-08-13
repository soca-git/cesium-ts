import { Viewer } from "cesium";
import { ViewerFactory } from "./viewer";
import { PointEntityWrapperFactory } from "wrappers";

class Container
{
    private readonly viewerFactory = new ViewerFactory();
    private readonly pointEntityWrapperFactory = new PointEntityWrapperFactory({ viewer: this.Viewer });

    public get Viewer() : Viewer
    {
        return this.viewerFactory.Viewer;
    }

    public get PointEntityWrapperFactory(): PointEntityWrapperFactory
    {
        return this.pointEntityWrapperFactory;
    }
}

export const container = new Container();
