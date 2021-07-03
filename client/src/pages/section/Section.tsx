import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { FileTextOutlined, CalendarOutlined, FolderOutlined } from '@ant-design/icons';
import './Section.scss';
import { ProjectService } from '../../_services/projectService';
import Project from '../../interfaces/project';

function Section() {
    const projectService = new ProjectService();
    const [projectInfo, setProjectInfo] = useState<Project>()
    useEffect(() => {
        projectService.getProject().then(res => {
            setProjectInfo(res.data)
        }).catch(e => console.log(e))
    }, [])

    return (
        <>
            {projectInfo && <section className="paySection">
                <div className="top-Title">
                    <span className="icon"><FileTextOutlined /></span> <span className="msg"><i>Your project request</i></span>
                </div>
                <div className="content-container">
                    <div className="content">
                        <div className="left">{projectInfo?.name} </div>
                        <div className="right">
                            <div className="price">${projectInfo?.cost}</div>
                            <div className="price-info">Total: ${Number(projectInfo!.cost) + ((Number(projectInfo!.cost) * 20) / 100)}
                                <br></br>
                                (CleverX fee + 20%)
                            </div>


                        </div>
                    </div>
                    <div className="msg">
                        {projectInfo?.summary}
                    </div>
                    <div className="bottom-container">
                        <div className="content m-between"><CalendarOutlined className="icon" />{new Date(projectInfo!.date).toDateString()} delivery</div>
                        <div className="content"><FolderOutlined className="icon" />Attachment</div>
                    </div>
                    <div className="button-cancel">
                        <Button size='large' type="primary" htmlType="submit">Cancel</Button>
                    </div>
                </div>

            </section>}
        </>
    )
}

export default Section;