import { createRoot } from "react-dom/client";
import "./tailwind.css";  
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./frameworkDesign";




createRoot(document.getElementById("root")).render(
  <div>
    <FrameworkListSearchFilter />
    {/* <FrameworkList /> */}
  </div>
);



