import { api } from '../config/api';
import http from '../config/axios';
import Project from '../interfaces/project';

export class ProjectService {

    createProject(payload: Project) {
        return http.post(api.project.create, payload)
    }
    getProject() {
        return http.get(api.project.get)
    }

}