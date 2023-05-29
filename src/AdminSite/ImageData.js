import React, { useEffect, useState } from 'react';
import { List,Row, Col,Card } from 'antd';

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
    grid={{ gutter: 16, column: 4 }} // Set the number of columns and gutter space
    dataSource={images}
    renderItem={(singleData) => {
      const url = URL.createObjectURL(
        new Blob([new Uint8Array(singleData.image.data.data)], { type: 'image/png' })
      );

      return (
        <List.Item>
          <Card cover={<img src={url} alt={singleData.name} style={{ height: '300px', objectFit: 'cover' }} />}>
            <Card.Meta title={singleData.name} />
          </Card>
        </List.Item>
      );
    }}
  />
  );
};

export default ImageList;