import React, { useEffect, useState } from 'react';
import { List } from 'antd';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/image/fetchallimages')
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <List
      dataSource={images}
      renderItem={(singleData) => {
        const url = URL.createObjectURL(
          new Blob([new Uint8Array(singleData.image.data.data)], { type: 'image/png' })
        );

        return (
          <List.Item key={singleData._id}>
            <List.Item.Meta
              avatar={<img src={url} alt={singleData.name} />}
              title={singleData.name}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default ImageList;