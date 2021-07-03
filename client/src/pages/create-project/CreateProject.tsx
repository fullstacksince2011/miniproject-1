import React, { useState } from 'react';
import { Modal, Button, Input, Form, Upload, DatePicker } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './CreateProject.scss';
import 'antd/dist/antd.css';
import { ProjectService } from '../../_services/projectService';

function CreateProject() {
  const projectService = new ProjectService();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextArea } = Input;
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    projectService.createProject(values).then(res => {
      handleCancel();
    }).catch(e => console.log(e))
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="App">
      <Button type="primary" onClick={showModal}>
        Add Project
      </Button>
      <Modal title="Create Project" width={450} footer={null} className="createProjectModal" visible={isModalVisible} onCancel={handleCancel}>

        <Form name="createProject" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item name="name" rules={[{ required: true, message: 'Please input project name!' }]}>
            <Input placeholder="Title" />
          </Form.Item>

          <Form.Item name="summary" rules={[{ required: true, message: 'Please input Description!' }]}>
            <TextArea placeholder="Description" autoSize={{ minRows: 6, maxRows: 6 }} />
          </Form.Item>
          <Form.Item name="file" rules={[{ required: false, message: 'Please Upload File!' }]}>
            <Upload >
              {/* <Input placeholder="Upload attachment" prefix={<UploadOutlined />} /> */}
              <Button block icon={<UploadOutlined />}>Upload attachment</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="date" rules={[{ required: true, message: 'Please select delivery date!' }]}>
            <DatePicker className="w-100" placeholder="Delivery Date" />
          </Form.Item>
          <Form.Item name="cost" rules={[{ required: true, message: 'Please input project cost!' }]}>
            <Input placeholder="Project cost" />
          </Form.Item>
          <div className="bottom-details">
            <div className="detail-item">
              <div className="left">
                CleverX Transaction Fees (20%)
              </div>
              <div className="right">
                $0.00
              </div>
            </div>
            <div className="detail-item">
              <div className="left">
                Total amount in $USD
              </div>
              <div className="right">
                $0.00
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button size='large' type="primary" htmlType="submit">Create project</Button>
          </div>

        </Form>

      </Modal>

    </div>
  );
}

export default CreateProject;
