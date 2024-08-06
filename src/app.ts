import "cesium/Build/Cesium/Widgets/widgets.css";
import "./app.css";
import { viewer } from "components";
import { mapContext } from "state";
import { DrawGeodesicPolyline, DrawRhumblineCorridor } from "functions";

viewer;
mapContext.defaultTransition();

DrawGeodesicPolyline();
DrawRhumblineCorridor();
