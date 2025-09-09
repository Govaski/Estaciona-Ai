import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

export function Root() {

    return (
        
        <RouterProvider router={routes} />

    );
}