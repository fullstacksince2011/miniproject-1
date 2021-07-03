export default interface IRoute {
    path: string;
    name: string;
    exact: boolean;
    props?: any;
    component: any;
    icon?: any;
    showInSidebar?: any,
    submenu?: IRoute[]
}