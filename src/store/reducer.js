import service from 'service';
import Swal from 'sweetalert2';


const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

// post
export const login = createAsyncThunk(
  '/login',
  async (data, { rejectWithValue, getState, dispatch }) => {
    const { email, password } = getState();
    
    try {
      const payload = { email, password };
      const response = await service.login(payload);
      console.log(response.status);
      if (response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'login succes',
          showConfirmButton: false,
          timer: 1500,
        });
        sessionStorage.setItem('token', response.data.token);
         sessionStorage.setItem('isLogged', true);
        dispatch(setReducer({ key: 'token', value: response.data.token }));
        dispatch(setReducer({ key: 'login1', value: true }));
      }
  
      if (response.response.status === 400) {
        console.log('jalan');
        return Swal.fire({
          icon: 'error',
          title: response.response.data.error,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      return response;
    } catch (err) {
      rejectWithValue(err);
    }
  },
);

// get
export const getList = createAsyncThunk('/users', async (page, { rejectWithValue, dispatch }) => {
  try {
    dispatch(setLoader(true));
    const response = await service.getList(page);
    dispatch(setLoader(false));
    return response.data;
  } catch (error) {
    rejectWithValue(error);
    dispatch(setLoader(false));
  }
});

// get data id
export const getDetail = createAsyncThunk('/users/', async (id, { rejectWithValue }) => {
  try {
    const res = await service.getDetail(id);
    return res.data;
  } catch (error) {
    rejectWithValue(error);
  }
});

const initiaLState = {
  email: '',
  password: '',
  token: '',
  lists: [],
  details: {},
  loader: false,
  login1: false,
};

const reducer = createSlice({
  name: 'reducer',
  initialState: { ...initiaLState },
  reducers: {
    setReducer: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getList.fulfilled, (state, action) => {
      console.log('balikan dari BE', action.payload);
      state.lists = action.payload;
    });
    builder.addCase(getDetail.fulfilled, (state, action) => {
      console.log('ambil data id', action.payload);
      state.details = action.payload;
    });
  },
});

export const { setReducer, setLoader } = reducer.actions;

export default reducer.reducer;
