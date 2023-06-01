// import { Table } from 'antd';
// import { useLocation } from 'react-router-dom';

// const { Column, ColumnGroup } = Table;

// const Result = () => {
//     const location = useLocation();
  
//     const getWinProbability = (ratingA, ratingB) => {
//       const difference = ratingB - ratingA;
//       return 1 / (1 + Math.pow(10, difference / 400));
//     };
  
//     const Data = location.state.data.map(item => ({
//       ...item,
//       eloRating: 1000, // Set initial Elo rating value
//     }));
  
//     Data.forEach((itemA, indexA) => {
//       Data.forEach((itemB, indexB) => {
//         if (indexA !== indexB) {
//           const ratingA = itemA.eloRating;
//           const ratingB = itemB.eloRating;
//           const winProbabilityA = getWinProbability(ratingA, ratingB);
//           const winProbabilityB = getWinProbability(ratingB, ratingA);
//           const K = 32; // Elo rating adjustment constant
  
//           if (itemA.win && itemB.lose) {
//             // Item A wins against item B
//             itemA.eloRating += K * (1 - winProbabilityA);
//             itemB.eloRating += K * (0 - winProbabilityB);
//           } else if (itemA.lose && itemB.win) {
//             // Item B wins against item A
//             itemA.eloRating += K * (0 - winProbabilityA);
//             itemB.eloRating += K * (1 - winProbabilityB);
//           }
//         }
//       });
//     });
  
//     Data.sort((a, b) => b.eloRating - a.eloRating);
  
//     const dataSource = Data.map((item, index) => ({
//       key: index,
//       rank: index + 1,
//       win: item.win,
//       lose: item.lose,
//       smartphone: item.name,
//       eloRating: item.eloRating,
//     }));
    
      
// return(
//     <>
//     <Table dataSource={dataSource}>
//         <Column title="Rank" dataIndex="rank" key="rank" />
//         <ColumnGroup title="Vote">
//             <Column title="Win" dataIndex="win" key="win" />
//             <Column title="Lose" dataIndex="lose" key="lose" />
//         </ColumnGroup>

//         <Column title="SmartPhone" dataIndex="smartphone" key="smartphone" />
//         <Column title="Elo-Rating" dataIndex="eloRating" key="eloRating" />
//     </Table>
//     </>
// )
// }
// export default Result;
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

const Result = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usertoken"));
    if (user===null) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const eloData = location?.state?.data?.map(item => ({
      ...item,
      eloRating: 1000, // Set initial Elo rating value
    }));
   

    const K = 32; // Elo rating adjustment constant

    eloData?.forEach((itemA, indexA) => {
      eloData?.forEach((itemB, indexB) => {
        if (indexA !== indexB) {
          const ratingA = itemA.eloRating;
          const ratingB = itemB.eloRating;
          const winCountA = itemA.win;
          const winCountB = itemB.win;
          const loseCountA = itemA.lose;
          const loseCountB = itemB.lose;
          const expectedScoreA = 1 / (1 + 10 ** ((ratingB - ratingA) / 400));
          const expectedScoreB = 1 / (1 + 10 ** ((ratingA - ratingB) / 400));
          const newRatingA = ratingA + K * (winCountA * (1 - expectedScoreA) - loseCountA * expectedScoreA);
          const newRatingB = ratingB + K * (winCountB * (1 - expectedScoreB) - loseCountB * expectedScoreB);
          itemA.eloRating = newRatingA;
          itemB.eloRating = newRatingB;
        }
      });
    });

    eloData?.sort((a, b) => b.eloRating - a.eloRating);

    const rankedData = eloData?.map((item, index) => ({
        ...item,
        rank: index + 1,
      }));
    setData(rankedData);
    
  }, [location?.state?.data]);
 

  return (
    <>
      <Table dataSource={data}>
        <Column title="Rank" dataIndex="rank" key="rank" />
        <ColumnGroup title="Vote">
          <Column title="Win" dataIndex="win" key="win" />
          <Column title="Lose" dataIndex="lose" key="lose" />
        </ColumnGroup>
        <Column title="SmartPhone" dataIndex="name" key="name" />
        <Column title="Elo-Rating" dataIndex="eloRating" key="eloRating" />
      </Table>
    </>
  );
};

export default Result;
