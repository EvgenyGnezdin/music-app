import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../../shared/ui/main-layuot";
import { HomePage } from "../../pages/home-page/HomePage";
import { ChartPage } from "../../pages/chart-page/ChartPage";
import { GenresPage } from "../../pages/genres-page/GenresPage";
import { FavoritesPage } from "../../pages/favorites-page/FavoritesPage";

export const router  = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>    
            },
            {
                path: "chart",
                element: <ChartPage/>
            },
            {
                path: "genres",
                element: <GenresPage/>
            }
        ]
    },
    {
        path: '/favorites',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <FavoritesPage/>
            }
        ]
    }
])


