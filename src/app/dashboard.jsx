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
import { useParams, useRouter } from "next/navigation";
import { registerLicense } from "@syncfusion/ej2-base";
import { useRef, useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NBaF5cWWJCe0x0Q3xbf1x0ZFRGal5VTnNdUiweQnxTdEFjXX1YcXRXQWVYVER0WA=="
);
export default function Dashboard() {
  const eventSettings = { dataSource: timelineResourceData };
  const scheduleObj = useRef(null);
  const [data, setData] = useState([]);
  const router = useRouter();
  const objet = JSON.parse(localStorage.getItem("InfoUser"));
  const { id } = useParams();

  // useEffect(() => {
  //   utilisateur();
  //   verifyAuth();
  // }, []);

  // const verifyAuth = () => {
  //   axios
  //     .post(
  //       "http://localhost:4000/verifyAuth",
  //       {},
  //       {
  //         headers: {
  //           "access-token": objet[0],
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // setTimeout(() => {
  //   if (verifyAuth) {
  //     if (objet != null) {
  //       console.log("Voici notre token :", objet[0]);
  //     } else {
  //       history("/login");
  //     }
  //   }
  // }, 2);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/auth");
  };

  // const utilisateur = async () => {
  //   try {
  //     const info = await axios.get(`http://localhost:4000/${id}`);
  //     setData(info.data);
  //     console.log("À PROPOS DE CE USER", info.data);
  //   } catch (error) {
  //     console.error(
  //       "Erreur lors de la récupération des données utilisateur:",
  //       error
  //     );
  //   }
  // };
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
    <div className="w-full relative h-screen">
      <div className="absolute bottom-5 right-5 z-20">
        <button className="Btn" onClick={logout}>
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="text">Logout</div>
        </button>
      </div>
      <ScheduleComponent
        cssClass="excel-export"
        width="100%"
        height="100vh"
        id="schedule"
        ref={scheduleObj}
        currentView="Month"
        // selectedDate={new Date(2019, 0, 10)}
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
    </div>
  );
}
