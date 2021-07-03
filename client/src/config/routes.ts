import IRoute from "../interfaces/route";
import CreateProject from "../pages/create-project/CreateProject";
import MakePayment from "../pages/make-payment/MakePayment";
import { RouteNames } from "./routeNames";

const routes: IRoute[] = [
    {
        path: RouteNames.root,
        name: 'Create Project',
        component: CreateProject,
        exact: true,
        showInSidebar: '0'
    },
    {
        path: RouteNames.makePayment,
        name: 'Make Payment',
        component: MakePayment,
        exact: true,
        showInSidebar: '0'
    },
]

export default routes;