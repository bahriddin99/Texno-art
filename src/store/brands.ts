import Notifation from '@notifation';
import { create } from 'zustand' ;
import { brand} from '../services/brands/brands';
import { StoreBrand } from '../interfaces/brands';

const useBrandStore = create <StoreBrand> ((set)=>({
    brand: [],
    isLoading: false,
    getBrands: async (params) => {
      set({ isLoading: true });
      try {
        const response = await brand.get_brands(params);
        if (response.status === 200) {
          set({ brand: response.data.data.brands });
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
    createBrand: async (data) => {
      try {
        const response = await brand.create_brand(data);
        if (response.status === 201) {
          set((state) => ({
            brand: [...state.brand, response.data.data],
          }));
          Notifation({
            title: response.data.message,
            type: "success",
          });
        }
        return response;
      } catch (error: any) {
        Notifation({
          title: "Something went wrong!",
          type: "error",
        });
      }
    },
    deleteBrand: async (id) => {
      try {
        const response = await brand.delete_brand(id);
        if (response.status === 200) {
            Notifation({
            title: response.data.message,
            type: "success",
          });
          set((state) => ({
            brand: state.brand.filter((item: any) => item.id != id),
          }));
        }
        return response;
      } catch (error: any) {
        Notifation({
          title: "Something went wrong!",
          type: "error",
        });
      }
    },
    updateBrand: async (id, data) => {
      try {
        const response = await brand.update_brand(id, data);
        if (response.status === 200) {
            Notifation({
            title: response.data.message,
            type: "success",
          });
          set((state) => ({
            brand: state.brand.map((item: any) =>
              item.id === id? response.data.brand : item
            ),
          }));
        }
        return response;
      } catch (error: any) {
        Notifation({
          title: "Something went wrong!",
          type: "error",
        });
      }
    }

}))

export default useBrandStore