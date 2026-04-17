import { useMutation } from "@tanstack/react-query";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { UserInfo, UserToken } from "@/types/entity";
import { StorageEnum } from "@/types/enum";
import { type Result } from "@/types/api";
import { toast } from "sonner";
import userService, { type SignInReq } from "@/api/services/userService";

type UserStore = {
  userInfo: Partial<UserInfo>;
  userToken: UserToken;

  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
    setUserToken: (token: UserToken) => void;
    clearUserInfoAndToken: () => void;
  };
};

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      userInfo: {},
      userToken: {},
      actions: {
        setUserInfo: (userInfo) => {
          set({ userInfo });
        },
        setUserToken: (userToken) => {
          set({ userToken });
        },
        clearUserInfoAndToken() {
          set({ userInfo: {}, userToken: {} });
        },
      },
    }),
    {
      name: "userStore",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        [StorageEnum.UserInfo]: state.userInfo,
        [StorageEnum.UserToken]: state.userToken,
      }),
    },
  ),
);

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserToken = () => useUserStore((state) => state.userToken);
export const useUserPermissions = () => useUserStore((state) => state.userInfo.permissions || []);
export const useUserRoles = () => useUserStore((state) => state.userInfo.roles || []);
export const useUserActions = () => useUserStore((state) => state.actions);

export const useSignIn = () => {
  const { setUserInfo, setUserToken } = useUserActions();
  const signInMutation = useMutation({
    mutationFn: userService.signin,
  });

  const signIn = async (data: SignInReq) => {
    try {
      const res = await signInMutation.mutateAsync(data);
      const { user, accessToken, refreshToken } = res;
      setUserToken({ accessToken, refreshToken });
      setUserInfo(user);
    } catch (error) {
      const err = error as Result;
      toast.error(err.message, {
        position: "top-center",
      });
      throw error;
    }
  };

  return signIn;
};

export default useUserStore;
