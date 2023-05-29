import React, { useState } from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const ImageUploadForm = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const handleClick = async () => {
    try {
      const formData = new FormData();
      formData.append('name', form.getFieldValue('name'));
      formData.append('testImage', fileList[0].originFileObj);

      const response = await fetch('http://localhost:5000/api/image/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        message.success('Image uploaded successfully');
        form.resetFields();
        setFileList([]);
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error(error);
      message.error('Image upload failed');
    }
  };

  const handleFileChange = (file) => {
    setFileList(file.fileList.slice(-1)); // Limit to a single file
  };

  return (
    <div className="image-upload-form-container">
    <Form form={form} layout="vertical">
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter a name' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Image"
        name="testImage"
        valuePropName="fileList"
        getValueFromEvent={handleFileChange}
        rules={[{ required: true, message: 'Please upload an image' }]}
      >
        <Upload.Dragger beforeUpload={() => false} fileList={fileList}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag image file to this area to upload</p>
        </Upload.Dragger>
      </Form.Item>
      <Form.Item>
        <Button onClick={handleClick} type="primary" htmlType="submit">
          Upload
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default ImageUploadForm;