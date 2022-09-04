import { mainApi } from "api/main/mainApi";
import { LOGIN_URL, REGISTER_URL } from "api/urls/urls";

export interface ILoginParams {
  username: string;
  password: string;
}

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<{ access_token: string; token_type: string }, ILoginParams>({
      query: (userValue) => {
        const data = new FormData();
        for (var key in userValue) {
          data.append(key, userValue[key as keyof typeof userValue]);
        }
        return { url: LOGIN_URL, method: "post", data };
      },
    }),
    register: build.mutation<string, ILoginParams>({
      query: (params) => ({ url: REGISTER_URL, method: "post", params }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

export const { login } = authApi.endpoints;
