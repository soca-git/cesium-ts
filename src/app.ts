import "cesium/Build/Cesium/Widgets/widgets.css";
import "./app.css";
import { mapContext } from "state";
import { DrawGeodesicPolyline, DrawRhumblineCorridor } from "functions";
import { Test } from "../test/mock.test";

mapContext.defaultTransition();

DrawGeodesicPolyline();
DrawRhumblineCorridor();
Test();
