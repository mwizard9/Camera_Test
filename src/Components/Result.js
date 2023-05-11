import { Table } from 'antd';

const { Column, ColumnGroup } = Table;
const data = [
    {
        key: '1',
        rank: '1',
        win: 32,
        lose: 4,
        smartphone: 'iphone11'
    },
    {
        key: '2',
        rank: '2',
        lose: 8,
        win: 25,
        smartphone: 'Samsung M22'
    },
    {
        key: '2',
        rank: '3',
        win: 22,
        lose: 10,
        smartphone: 'Relme Note7'
    },
    {
        key: '2',
        rank: '3',
        win: 22,
        lose: 10,
        smartphone: 'Relme Note7'
    },
];
const Result = () =>
    <Table dataSource={data}>
        <Column title="Rank" dataIndex="rank" key="rank" />
        <ColumnGroup title="Vote">
            <Column title="Win" dataIndex="win" key="win" />
            <Column title="Lose" dataIndex="lose" key="lose" />
        </ColumnGroup>

        <Column title="SmartPhone" dataIndex="smartphone" key="smartphone" />
    </Table>;
export default Result;
