import { create } from 'zustand';
import { StoreCategory } from "@category";
import Category from '@category-services';
import Notifation from '@notifation';

const useCategoryStore = create<StoreCategory>((set) => ({
    categories: [],
    subCategories: [],
    isLoading: false,
    getCategories: async (params) => {
        set({ isLoading: true });
        try {
            const response = await Category.get_categories(params);
            if (response.status === 200) {
                set({ categories: response.data.data.categories });
            }
            set({ isLoading: false });
            return response;
        } catch (error: any) {
            set({ isLoading: false })
            Notifation({
                title: error.message,
                type: "error",
            });
        }
    },
    createCategory: async (data: any) => {
        try {
            const response = await Category.create_category(data);
            if (response.status === 201) {
                set((state) => ({
                    categories: [...state.categories, response?.data.data],
                    subCategories: [...state.subCategories, response?.data.category],
                }));
                Notifation({
                    title: response.data.message,
                    type: "success",
                });
                return response;
            }
            return response;
        } catch (error: any) {
            console.log(error);
            Notifation({
                title: "Somthing went wrong!",
                type: "error",
            });
        }
    },
    updateCategory: async (id: number, data) => {
        try {
            const response = await Category.update_category(id, data);
            if (response.status === 200) {
                Notifation({
                    title: response.data.message,
                    type: "success",
                });
                set((state) => ({
                    categories: state.categories.map((item: any) =>
                        item.id === id ? response.data.data : item
                    ),
                }));
            }
            return response;
        } catch (error) {
            Notifation({
                title: "Something went wrong!",
                type: "error",
            });
        }
    },
    deleteCategory: async (id: any) => {
        try {
            const response = await Category.delete_category(id);
            if (response.status === 200) {
                Notifation({
                    title: response.data.message,
                    type: "success",
                });
                set((state) => ({
                    categories: state.categories.filter((item: any) => item.id != id),
                }));
            }
            return response;
        } catch (error) {
            Notifation({
                title: "Something went wrong!",
                type: "error",
            });
        }
    },
    getSubCategory: async (id: any) => {
        set({ isLoading: true });
        try {
            const response = await Category.get_subcategory(id);
            console.log(response);
            if (response.status === 200) {
                set({ subCategories: response.data.data.categories });
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


}))

export default useCategoryStore