import service from 'service';
import Swal from 'sweetalert2';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const login = createAsyncThunk('/login', async (data, { rejectWithValue, getState, dispatch }) => {
  const { email, password } = getState();
  try {
    const payload = {email, password}
    const response = await service.login(payload);
    console.log(response.status)
    if(response.status === 200) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'login succes',
          showConfirmButton: false,
          timer: 1500,
        });  
        sessionStorage.setItem('token', response.data.token)
        sessionStorage.setItem('isLogged', true);
        dispatch(setReducer({ key: 'token', value: response.data.token }));
    }
    return response;
  } catch (err) {
    rejectWithValue(err);
  }
});

const initiaLState = {
  email: '',
  password: '',
  token: '',
};

const reducer = createSlice({
  name: 'reducer',
  initialState: { ...initiaLState },
  reducers: {
    setReducer: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(login.fulfilled, (state, action) => {
    //   console.log(action.payload, 'payload cuy');
    // });
  },
});

export const { setReducer } = reducer.actions;

export default reducer.reducer;
