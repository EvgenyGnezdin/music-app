import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { store } from "./store/store";
import { Provider } from "react-redux";

export const App = () => {
    return (
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
    )
};


