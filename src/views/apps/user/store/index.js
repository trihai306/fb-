// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ** Axios Imports
import axios from "axios";

export const getAllData = createAsyncThunk("appUsers/getAllData", async () => {
  const response = await axios.get("/api/users/list/all-data");
  return response.data;
});

export const getData = createAsyncThunk("appUsers/getData", async (params) => {
  const response = await axios.get("/api/users/list/data", params);
  return {
    params,
    data: response.data.users,
    totalPages: response.data.total,
  };
});

export const getUser = createAsyncThunk("appUsers/getUser", async (id) => {
  // const response = await axios.get("/api/users/user", { id });
  // return response.data.user;
  return null;
});

export const addUser = createAsyncThunk(
  "appUsers/addUser",
  async (user, { dispatch, getState }) => {
    await axios.post("/apps/users/add-user", user);
    await dispatch(getData(getState().users.params));
    await dispatch(getAllData());
    return user;
  }
);

export const deleteUser = createAsyncThunk(
  "appUsers/deleteUser",
  async (id, { dispatch, getState }) => {
    await axios.delete("/apps/users/delete", { id });
    await dispatch(getData(getState().users.params));
    await dispatch(getAllData());
    return id;
  }
);

export const appUsersSlice = createSlice({
  name: "appUsers",
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: null,
    proxyData: [],
    current_cookies: null,
    cookies_all: [],
  },
  reducers: {
    import_excel: (state, action) => {
      console.log("import excel:", action.payload);
      state.data = action.payload;
    },
    import_excel_proxy: (state, action) => {
      console.log("import excel proxy:", action.payload);
      state.proxyData = action.payload;
    },

    update_cookies: (state, action) => {
      console.log(action.payload)
      state.current_cookies = action.payload;
    },
    update_cookies_all: (state, action) => {
      console.log(action.payload)
      const cookies = state.cookies_all.find((item) => item.username === action.payload.username)
      if (!cookies) {
        state.cookies_all = [...state.cookies_all, action.payload]
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.params = action.payload.params;
        state.total = action.payload.totalPages;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload;
      });
  },
});

export const { import_excel, import_excel_proxy, update_cookies, update_cookies_all } =
  appUsersSlice.actions;

export default appUsersSlice.reducer;
