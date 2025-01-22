import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layuot";
import { HomePage } from "../../pages/home-page";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
            index: true,
            element: <HomePage/>
        }
    ]
}])


