import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "api/base-query/baseQuery";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: baseQuery({ baseUrl: "http://79.143.31.216/" }),
  endpoints: (build) => ({}),
  tagTypes: ["Links"],
});
