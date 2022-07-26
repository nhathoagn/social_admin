import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType{
    key: string,
    firstname: string,
    lastname: string
    email: string
}
const columns: ColumnsType<DataType> = [
    {
        title: 'First Name',
        dataIndex: 'firstname',
        key: 'firstname'
        render: text => <a></a>
    }
]