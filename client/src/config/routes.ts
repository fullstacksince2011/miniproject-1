import IRoute from "../interfaces/route";
import CreateProject from "../pages/create-project/CreateProject";
import Section from "../pages/section/Section";
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
        path: RouteNames.section,
        name: 'Make Payment',
        component: Section,
        exact: true,
        showInSidebar: '0'
    },
]

export default routes;