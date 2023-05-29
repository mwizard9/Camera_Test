import React, { useEffect, useState } from 'react';
import { List, Card, Button, Modal } from 'antd';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [imageToDelete, setImageToDelete] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/image/fetchallimages')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (imageId) => {
    setDeleteModalVisible(true);
    setImageToDelete(imageId);
  };

  const confirmDelete = () => {
    fetch(`http://localhost:5000/api/image/deleteimage/${imageToDelete}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Refresh the image list after successful deletion
        fetch('http://localhost:5000/api/image/fetchallimages')
          .then((res) => res.json())
          .then((data) => setImages(data))
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setDeleteModalVisible(false);
        setImageToDelete(null);
      });
  };

  const cancelDelete = () => {
    setDeleteModalVisible(false);
    setImageToDelete(null);
  };

  return (
    <>
      <List
        grid={{ gutter: 16, column: 4 }} // Set the number of columns and gutter space
        dataSource={images}
        renderItem={(singleData) => {
          const url = URL.createObjectURL(
            new Blob([new Uint8Array(singleData.image.data.data)], { type: 'image/png' })
          );

          return (
            <List.Item>
              <Card
                cover={<img src={url} alt={singleData.name} style={{ height: '300px',width:'300px' }} />}
                actions={[
                  <Button danger onClick={() => handleDelete(singleData._id)}>Delete</Button>,
                ]}
              >
                <Card.Meta title={singleData.name} />
              </Card>
            </List.Item>
          );
        }}
      />

      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onOk={confirmDelete}
        onCancel={cancelDelete}
      >
        <p>Are you sure you want to delete this image?</p>
      </Modal>
    </>
  );
};

export default ImageList;