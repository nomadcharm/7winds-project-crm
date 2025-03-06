import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, eID } from "../constants";

export interface RowData {
  id: number;
  rowName: string;
  total: number;
  salary: number;
  mimExploitation: number;
  machineOperatorSalary: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;
  child: RowData[];
}

export const rowApiSlice = createApi({
  reducerPath: 'rowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getRows: builder.query<Array<RowData>, void>({
      query: () => `/v1/outlay-rows/entity/${eID}/row/list`,
    }),
    editRow: builder.mutation({
      query: ({ id, data }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${id}/update`,
        method: "POST",
        body: data,
      })
    })
  }),
});



export const { useGetRowsQuery, useEditRowMutation } = rowApiSlice;