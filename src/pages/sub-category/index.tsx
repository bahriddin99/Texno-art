import GlobalTable from "@globaltable";
import SubCategory from "../../components/modal/subcategories"
import useCategoryStore from "../../store/category";
import { useEffect } from "react";
import DeletModals from "../../components/modal/delet/delet";
import UpdateModals from "../../components/modal/update";
import { useParams } from "react-router-dom";
const SubCategorys = () => {
  const { getSubCategory, isLoading, subCategories } = useCategoryStore();
  const { id } = useParams();
  const getData = async () => {
    await getSubCategory(id);
  };
  useEffect(() => {
    getData();
  }, []);
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
          <UpdateModals record={record} />
          <DeletModals record={record} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-end">
        <SubCategory />
      </div>
      <GlobalTable columns={columns} data={subCategories} boolean={isLoading} />
    </>
  );
};

export default SubCategorys;
