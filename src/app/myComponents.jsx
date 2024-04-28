// MyComponent.js
import dynamic from "next/dynamic";
import Loading from "./Loading";
const MyComponent = dynamic(() => import("./page"), {
  loading: () => <Loading />,
});

export default MyComponent;
