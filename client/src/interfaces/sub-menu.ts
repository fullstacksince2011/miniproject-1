export default interface ISubRoute {
    name: string;
    icon?: any;
    showInSidebar?: any,
    submenu?: {
        path: string
        exact: boolean;
        props?: any;
        component: any;
        name: string
    }[]
}