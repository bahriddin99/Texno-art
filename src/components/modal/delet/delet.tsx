import { Button, Modal } from "antd";
import { useState } from "react";
import useCategoryStore from "@categorystore";
import { DeleteOutlined } from "@ant-design/icons";

const DeletModals: React.FC = ({ record }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { deleteCategory } = useCategoryStore();
  const [loading, setLoading] = useState(false);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const deleteData = async (id: number) => {
    setLoading(true);
    const response = await deleteCategory(id);
    if (response?.status === 200) {
      setIsModalVisible(false);
    }
    setLoading(false);
  };
  return (
    <>
      <Button
        onClick={() => setIsModalVisible(true)}
        icon={<DeleteOutlined />}
       
      />
      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        style={{ maxWidth: "400px" }}
        title="Delete this category?"
        footer={
          <div className="flex items-center gap-3 justify-end mt-10">
            <Button size="large" type="default" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              loading={loading}
              iconPosition="end"
              size="large"
              type="primary"
              onClick={() => deleteData(record.id)}
            >
              Ok
            </Button>
          </div>
        }
      />
    </>
  );
};
export default DeletModals;
