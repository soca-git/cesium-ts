import { Color } from "cesium";
import { Cartesian3 } from "cesium";
import { container } from "components";

export function Test()
{
    const pointFactory = container.PointEntityWrapperFactory;
    const point = pointFactory.create({ position: Cartesian3.ONE, point: { pixelSize: 1, color: Color.RED} });

    console.log(Cartesian3.equals(point.position, Cartesian3.ONE));
    console.log(Color.equals(point.color, Color.RED));
}
