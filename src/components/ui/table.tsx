import React from "react";
import { Table } from "antd";
import { TableProps } from "../../interfaces/global";

const GlobalTable: React.FC<TableProps> = ({columns, data, boolean }) => {
  return (
    <Table
    // className="bg-slate-300"
      loading={boolean}
      size="large"
      columns={columns}
      dataSource={data}
      bordered
      scroll={{ y: 343 }}
    />
  );
};

export default GlobalTable;