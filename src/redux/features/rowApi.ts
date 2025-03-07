import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, eID } from "../constants";
import { RowData, RowRequestData, RowUpdateRequestData } from "./rowApi.types";

export const rowApiSlice = createApi({
  reducerPath: 'rowApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getRows: builder.query<Array<RowData>, void>({
      query: () => `/v1/outlay-rows/entity/${eID}/row/list`,
    }),
    addRow: builder.mutation({
      query: ({ parentId, newRow }: { parentId: number | null; newRow: RowRequestData }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/create`,
        method: 'POST',
        body: {
          ...newRow,
          parentId,
        },
      }),
    }),
    editRow: builder.mutation({
      query: ({id, data }: { id: number, data: RowUpdateRequestData }) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${id}/update`,
        method: "POST",
        body: data,
      })
    }),
    deleteRow: builder.mutation({
      query: (id: number) => ({
        url: `/v1/outlay-rows/entity/${eID}/row/${id}/delete`,
        method: "DELETE"
      })
    })
  }),
});

export const { useGetRowsQuery, useAddRowMutation, useEditRowMutation, useDeleteRowMutation } = rowApiSlice;