import { create } from "zustand";
import { AuthStore } from "@auth";
import auth from "@auth-services";
import { toast } from "react-toastify";
import { setDataToCookie } from "@cookies";



const useRegisterStore = create<AuthStore>((set) => ({
    data: [],
    isLoading: false,
  
    sig_nin: async (data) => {
      set({ isLoading: true });
      try {
        const response: any = await auth.sig_nin(data);
        if (response.status === 201) {
          set({ data: response.data.admin });
          setDataToCookie("access_token", response.data.tokens.access_token);
          setDataToCookie("refresh_token", response.data.tokens.refresh_token);
        } else if (response.status === 400)
          toast.warning("Wrong email or password!");
        else if (response.status === 404)
          toast.info("You are not registered yet. Please sign up");
        else if (response.status === 500)
          toast.warning("Sorry, the connection to the server has been lost");
  
        return response?.status;
      } catch (error) {
        console.error("Sign-in error:", error);
      } finally {
        set({ isLoading: false });
      }
    },
  
    sig_nup: async (data) => {
      set({ isLoading: true });
      try {
        const response: any = await auth.sig_nup(data);
        return response;
        console.log(response);
        
      } catch (error) {
        console.error("Sign-up error:", error);
      } finally {
        set({ isLoading: false });
      }
    },
    getAdmin: async (id) => {
      try {
        const response = await auth.get_admin(id);
        console.log(response);
        if (response.status === 200) {
          set({ data: response.data.data });
        }
        return response;
      } catch (error) {
        console.log(error);
      }
    },
  
    // logout: async () => {
    //   set({ isLoading: true });
    //   try {
    //     const response: any = await auth.logout();
    //     return response.status;
    //   } catch (error) {
    //     console.error("Log-out error:", error);
    //   } finally {
    //     set({ isLoading: false });
    //   }
    // },
  }));

  export default useRegisterStore;