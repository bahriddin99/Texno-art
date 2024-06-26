import useBrandCategoryStore from "../../store/brand-category";
import GlobalTable from "@globaltable";
import { useEffect, useState } from "react";
import BrandCategory from "../../components/modal/brand-category/index";
import BrandCategoryDelet from "../../components/modal/delete-brand-category/index";
import  UpdateBrandCategory  from "../../components/modal/update-brand-category";
import { Input } from "antd";
const index = () => {
  const { getBrandCategory, brand_category, isLoading } =
    useBrandCategoryStore();
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
  });
  useEffect(() => {
    getBrandCategory(params);
  }, [params]);
  const columns = [
    {
      title: "№",
      dataIndex: "index",
      key: "index",
      render: (_: any, __: any, index: any) => index + 1,
      width: "52px",
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
        <div className="flex gap-3">
          <UpdateBrandCategory record={record} />
          <BrandCategoryDelet record={record} />
        </div>
      ),
    },
  ];
  const search = (value:any) => {
    setParams((prevParams) => ({ ...prevParams, search: value }));
  }
  return (
    <>
      <div className="flex justify-between">
        <Input
          onChange={(e) => search(e.target.value)}
          placeholder="Search category brand..."
          style={{ width: "300px" }}
        />
        <BrandCategory />
      </div>
      <GlobalTable columns={columns} data={brand_category} boolean={isLoading} />
    </>
  );
};

export default index;
