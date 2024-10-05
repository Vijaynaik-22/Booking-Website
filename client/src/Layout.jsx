import { Outlet } from "react-router-dom";
import Header from "./Header";

export function Layout(){
    return(
      <div className="p-4 flex flex-col min-h-screen">
        <Header />
        <Outlet /> 
        {/* content of our page */}
      </div>
    )
}