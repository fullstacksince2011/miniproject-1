import React, { useState } from 'react';
import { Modal, Button, Input, Form, Upload, DatePicker } from 'antd';
import './CreateProject.scss';
import { UploadOutlined, PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import visaLogo from '../../assets/logos/VisaBlue.svg';
import { ProjectService } from '../../_services/projectService';

function CreateProject() {
  const projectService = new ProjectService();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { TextArea } = Input;
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);
  const [paymentCard, setPaymentCard] = useState(1)
  const showCardModal = () => {
    setIsCardModalVisible(true);
  };

  const handleCardCancel = () => {
    setIsCardModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values: any) => {
    projectService.createProject(values).then(res => {
      handleCancel();
      showCardModal();
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
      <Modal title={<div className="title"><div className="icon"><ArrowLeftOutlined /></div><div>Create card</div><div></div></div>} width={500} footer={null} className="createProjectModal" visible={isCardModalVisible} onCancel={handleCardCancel}>


        <div className="radio-button">
          <form className="form">

            <div className="inputGroup">
              <input id="radio1" value="1" checked={paymentCard == 1} name="radio" type="radio" />
              <label htmlFor="radio1"><img src={visaLogo}></img>Visa credit card ending with 2345</label>
            </div>
            <div className="inputGroup">
              <input id="radio2" name="radio" type="radio" />
              <label htmlFor="radio2"><img src={visaLogo}></img>Visa credit card ending with 4567</label>
            </div>
            <div className="inputGroup">
              <div className="addButton" ><div><PlusOutlined className="icon-margin" />
                Add card</div></div>
            </div>

            <div className="button-pay">
              <Button size='large' type="primary" htmlType="submit">Pay</Button>
            </div>
          </form>
        </div>

      </Modal>

    </div>
  );
}

export default CreateProject;
