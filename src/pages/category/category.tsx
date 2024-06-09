import GlobalTable from "@globaltable"
import ModalCategory from "@modalcategory";
import useCategoryStore from "@categorystore"
import { useEffect, useState } from "react";
import DeletModals from "../../components/modal/delet/delet";
import UpdateModals from "../../components/modal/update";
import { EyeOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { width } from "@mui/system";
const Category = () => {
  const { getCategories, isLoading, categories } = useCategoryStore();
  const navigate = useNavigate();
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    search: "",
  });
  useEffect(() => {
    getCategories(params);
  }, [params]);
  const columns = [
    {
      title: "№",
      dataIndex: "index",
      key: "index",
      render: (_: any, __: any, index: any) => index + 1,
      width:"52px",
      
    },
    {
      title: "Category name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => (
        <div className="flex gap-3  ">
          <UpdateModals record={record} />
          <DeletModals record={record} />
          <Button
            onClick={() => navigate(`categorys/${record.id}`)}
            icon={<EyeOutlined />}
          />
        </div>
      ),
    },
  ];
  const search = (value: any) => {
    setParams((prevParams) => ({ ...prevParams, search: value }));
  };
  return (
    <>
      <div className="flex justify-between">
        <Input
          onChange={(e) => search(e.target.value)}
          placeholder="Search category..."
          style={{ width: "300px" }}
        />
        <ModalCategory />
      </div>
      <GlobalTable columns={columns} data={categories} boolean={isLoading} />
    </>
  );
};

export default Category;
