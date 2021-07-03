import { api } from '../config/api';
import http from '../config/axios';

export class ProjectService {

    createProject(payload: any) {
        return http.post(api.project.create, payload)
    }
    // getUsersSupport(pagination, searchInput) {
    //     return http.get(api.auth.getUserSupport(pagination, searchInput))
    // }

}