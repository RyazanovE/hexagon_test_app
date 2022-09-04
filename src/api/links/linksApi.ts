import { mainApi } from "api/main/mainApi";
import { SQUEEZE_URL, STATISTICS_URL } from "api/urls/urls";

export interface ICreateLinkResponse {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export interface IStatisticsItem {
  id: number;
  short: string;
  target: string;
  counter: number;
}

export const linksApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getStatistics: build.query<IStatisticsItem[], { offset: number; limit: number }>({
      query: (params) => ({ url: STATISTICS_URL, method: "get", params }),
      providesTags: ["Links"],
    }),
    getAllStatistics: build.query<number, void>({
      query: () => ({ url: STATISTICS_URL, method: "get" }),
      providesTags: ["Links"],
      transformResponse: (res: IStatisticsItem[]) => res?.length ,
    }),
    createLink: build.mutation<ICreateLinkResponse, { link: string }>({
      query: (params) => ({ url: SQUEEZE_URL, method: "post", params }),
      invalidatesTags: ["Links"],
    }),
  }),
});

export const { useGetStatisticsQuery, useCreateLinkMutation, useGetAllStatisticsQuery } = linksApi;

export const {} = linksApi.endpoints;
