import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/result/results');
        const data = await response.json();
        console.log(data,'this is data')
        setResults(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Device',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Standard Rating',
      dataIndex: 'standard',
      key: 'standardRating',
    },
    {
      title: 'Portrait Rating',
      dataIndex: 'portrait',
      key: 'portraitRating',
    },
  ];

  return (
    <Table
      dataSource={results}
      columns={columns}
      pagination={false}
      rowKey={(record) => record._id}
    />
  );
};

export default Results;