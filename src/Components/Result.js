import { Table } from 'antd';
import { useLocation } from 'react-router-dom';

const { Column, ColumnGroup } = Table;

// const data = [
//     {
//         key: '1',
//         rank: '1',
//         win: 32,
//         lose: 4,
//         smartphone: 'iphone11'
//     },
//     {
//         key: '2',
//         rank: '2',
//         lose: 8,
//         win: 25,
//         smartphone: 'Samsung M22'
//     },
//     {
//         key: '2',
//         rank: '3',
//         win: 22,
//         lose: 10,
//         smartphone: 'Relme Note7'
//     },
//     {
//         key: '2',
//         rank: '3',
//         win: 22,
//         lose: 10,
//         smartphone: 'Relme Note7'
//     },
// ];

const Result = () =>{
    const location = useLocation();


const Data = location.state.data;
    console.log(Data,'this is the values of state')
    // Data.forEach((item) => {
    //     const id = item.id;
    //     const win = item.win;
    //     const lose = item.lose;
      
    //     // Perform operations with id, win, and lose
    //     console.log("ID:", id);
    //     console.log("Win:", win);
    //     console.log("Lose:", lose);
    //   });
    const dataSource = Data.map((item, index) => ({
        key: index,
        rank: index + 1,
        win: item.win,
        lose: item.lose,
        smartphone: item.name, // Assuming the smartphone column represents the ID
      }));
    
      
return(
    <>
    <Table dataSource={dataSource}>
        <Column title="Rank" dataIndex="rank" key="rank" />
        <ColumnGroup title="Vote">
            <Column title="Win" dataIndex="win" key="win" />
            <Column title="Lose" dataIndex="lose" key="lose" />
        </ColumnGroup>

        <Column title="SmartPhone" dataIndex="smartphone" key="smartphone" />
    </Table>
    </>
)
}
export default Result;
