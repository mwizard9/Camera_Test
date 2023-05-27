import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/auth/getallusers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
          });
  
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
  
    // Fetch user data from the API endpoint
//     fetch('http://localhost:5000/api/auth/getallusers')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data,'this is data of user')
//         setUserData(data); // Set the fetched user data in state
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
  ];

  return (
    <>
    <h1>User's Details</h1>
    <Table columns={columns} dataSource={userData} />
    </>
  );
};

export default UserTable;