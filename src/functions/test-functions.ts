import { Cartesian3, Cartographic, Entity, PolylineGraphics, ArcType, PolylineDashMaterialProperty, Color, EllipsoidRhumbLine, PointGraphics, CorridorGraphics } from "cesium";
import { viewer } from "components";

export function DrawGeodesicPolyline()
{
    const points = [Cartesian3.fromRadians(-0.5, 0.7), Cartesian3.fromRadians(-1.4, 0.46)];

    const geodesicPolyline = new Entity({
        polyline: new PolylineGraphics({
            arcType: ArcType.GEODESIC,
            positions: points,
            material: new PolylineDashMaterialProperty({ color: Color.LIGHTGREEN }),
            width: 2
        })
    });

    viewer.entities.add(geodesicPolyline);
}

export function DrawRhumblineCorridor()
{
    const points = [Cartesian3.fromRadians(-0.5, 0.7), Cartesian3.fromRadians(-1.4, 0.46)];
    const pointsCartographic = [new Cartographic(-0.5, 0.7), new Cartographic(-1.4, 0.46)];

    const rhumblinePolyline = new Entity({
        polyline: new PolylineGraphics({
            arcType: ArcType.RHUMB,
            positions: points,
            material: new PolylineDashMaterialProperty({ color: Color.FIREBRICK }),
            width: 2
        })
    });

    viewer.entities.add(rhumblinePolyline);

    const rhumbline = new EllipsoidRhumbLine(pointsCartographic[0], pointsCartographic[1]);

    const rhumblineWaypoints: Cartesian3[] = [];
    const granularity = rhumbline.surfaceDistance * 0.01;
    for (let i = granularity; i < rhumbline.surfaceDistance; i+=granularity)
    {
        const rhumblineWaypoint = rhumbline.interpolateUsingSurfaceDistance(i);
        rhumblineWaypoints.push(Cartesian3.fromRadians(rhumblineWaypoint.longitude, rhumblineWaypoint.latitude, rhumblineWaypoint.height));
    }

    rhumblineWaypoints.map(waypoint => {
        const point = new Entity({
            position: waypoint,
            point: new PointGraphics({
                pixelSize: 8,
                color: Color.FIREBRICK.withAlpha(0.1),
                outlineWidth: 2,
                outlineColor: Color.FIREBRICK
            })
        });

        viewer.entities.add(point);
    });
    
    const rhumblineCorridor = new Entity({
        corridor: new CorridorGraphics({
            positions: [points[0], ...rhumblineWaypoints, points[1]],
            width: 100000,
            material: Color.FIREBRICK.withAlpha(0.1),
            outline: true,
            outlineColor: Color.FIREBRICK,
            outlineWidth: 1,
            height: 0
        })
    });
    
    viewer.entities.add(rhumblineCorridor);
    
    const geodesicCorridor = new Entity({
        corridor: new CorridorGraphics({
            positions: points,
            width: 100000,
            material: Color.LIGHTGREEN.withAlpha(0.1),
            outline: true,
            outlineColor: Color.LIGHTGREEN,
            outlineWidth: 1,
            height: 0
        })
    });
    
    viewer.entities.add(geodesicCorridor);
}
