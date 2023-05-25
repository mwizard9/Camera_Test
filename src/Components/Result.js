import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { useLocation } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

const Result = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const eloData = location.state.data.map(item => ({
      ...item,
      eloRating: 1000, // Set initial Elo rating value
    }));

    eloData.forEach((itemA, indexA) => {
      eloData.forEach((itemB, indexB) => {
        if (indexA !== indexB) {
          const ratingA = itemA.eloRating;
          const ratingB = itemB.eloRating;
          const winProbabilityA = getWinProbability(ratingA, ratingB);
          const winProbabilityB = getWinProbability(ratingB, ratingA);
          const K = 32; // Elo rating adjustment constant

          if (itemA.win && !itemB.win) {
            // Item A wins against item B
            itemA.eloRating += K * (1 - winProbabilityA);
            itemB.eloRating += K * (0 - winProbabilityB);
          } else if (!itemA.win && itemB.win) {
            // Item B wins against item A
            itemA.eloRating += K * (0 - winProbabilityA);
            itemB.eloRating += K * (1 - winProbabilityB);
          }
        }
      });
    });

    eloData.sort((a, b) => b.eloRating - a.eloRating);
    setData(eloData);
  }, [location.state.data]);

  const getWinProbability = (ratingA, ratingB) => {
    const difference = ratingB - ratingA;
    return 1 / (1 + Math.pow(10, difference / 400));
  };

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