import { create } from "zustand";
import { BrandCategoryStore } from "../interfaces/brand-category";
import { brand_category } from "../services/brand-category/index";
import Notifation from "@notifation";

const useBrandCategoryStore = create<BrandCategoryStore>((set) => ({
  brand_category: [],
  isLoading: false,
  getBrandCategory: async (params) => {
    set({ isLoading: true });
    try {
      const response = await brand_category.get_brand_category(params);
      console.log(response);
      if (response.status === 200) {
        set({ brand_category: response.data.data.brandCategories });
      }
      set({ isLoading: false });
      return response;
    } catch (error: any) {
      set({ isLoading: false });
      Notifation({
        title: error.message,
        type: "error",
      });
    }
  },
  createBrandCategory: async (data) => {
    try {
      const response = await brand_category.create_brand_category(data);
      if (response.status === 201) {
        set((state) => ({
          brand_category: [...state.brand_category, response.data.data],
        }));
        Notifation({
          title: response.data.message,
          type: "success",
        });
      }
      return response;
    } catch (error: any) {
      Notifation({
        title: error.message,
        type: "error",
      });
    }
  },
  deleteBrandCategory: async (id) => {
    try {
      const response = await brand_category.delete_brand_category(id);
      if (response.status === 200) {
        set((state) => ({
          brand_category: state.brand_category.filter(
            (item: any) => item.id!= id
          ),
        }));
        Notifation({
          title: response.data.message,
          type: "success",
        });
      }
      return response;
    } catch (error: any) {
      Notifation({
        title: error.message,
        type: "error",
      });
    }
  },
  updateBrandCategory: async (id, data) => {
    try {
      const response = await brand_category.update_brand_category(id, data);
      console.log(response);
      if (response.status === 200) {
        set((state) => ({
          brand_category: state.brand_category.map((item: any) =>
            item.id === id? response.data.data : item
          ),
        }));
        Notifation({
          title: response.data.message,
          type: "success",
        });
      }
      return response;
    } catch (error: any) {
      Notifation({
        title: error.message,
        type: "error",
      });
    }
  }
}));

export default useBrandCategoryStore;
