"use client";
import {
  Week,
  Month,
  Agenda,
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  EventSettingsModel,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
  WorkWeek,
  Day,
  ExcelExport,
} from "@syncfusion/ej2-react-schedule";
import { timelineResourceData } from "./dataSource";
import { registerLicense } from "@syncfusion/ej2-base";
import { useRef } from "react";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0Q3xbf1x0ZFRGal5VTnNdUiweQnxTdEFjXX1YcXRXQWVYVER0WA=="
);
export default function Dashboard() {
  const eventSettings = { dataSource: timelineResourceData };
  const scheduleObj = useRef(null);

  const onActionBegin = (args) => {
    if (args.requestType === "toolbarItemRendering") {
      let exportItem = {
        align: "Right",
        showTextOn: "Both",

        prefixIcon: "e-icon-schedule-excel-export",
        text: "Excel Export ",

        cssClass: "e-excel-export",
        click: onExportClick,
      };
      args.items.push(exportItem);
    }
  };
  const onExportClick = () => {
    let exportValues = { fileName: "SchedulerData" };
    scheduleObj.current.exportToExcel(exportValues);
  };
  return (
    <>
      {/* <Inject
        services={[
          Day,
          Week,
          Month,
          WorkWeek,
          Resize,
          DragAndDrop,
          ExcelExport,
        ]}
      /> */}
      <ScheduleComponent
        cssClass="excel-export"
        width="100%"
        height="100vh"
        id="schedule"
        ref={scheduleObj}
        currentView="Month"
        selectedDate={new Date(2019, 0, 10)}
        // eventSettings={eventSettings}

        actionBegin={onActionBegin}
      >
        {/* <ViewsDirective>
          <ViewDirective option="Month" />
        </ViewsDirective> */}
        {/* <Inject services={[Week, Resize, DragAndDrop, ExcelExport]} /> */}
        <Inject
          services={[
            Day,
            Week,
            Month,
            WorkWeek,
            Resize,
            DragAndDrop,
            ExcelExport,
          ]}
        />
      </ScheduleComponent>
    </>
  );
}
