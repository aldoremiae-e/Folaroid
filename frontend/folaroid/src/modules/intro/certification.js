import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from '../../lib/api/baseIntroAPI';

export const getCertification = createAsyncThunk(
    'certification/getCertification',
    async ({ introNo }) => {
        const response = await api.getCertification(introNo);
        return response.data;
    }
);

export const createCertification = createAsyncThunk(
    'certification/createCertification',
    async (data) => {
        const response = await api.createCertification(data);
        console.log(response);
        return response.data;
    }
);

export const deleteCertification = createAsyncThunk(
    'certification/deleteCertification',
    async ({ introCertificationNo }) => {
        const response = await api.deletecertification(introCertificationNo);
        console.log(response);
        return response.data;
    }
);

export const certification = createSlice({
    name: 'certification',
    initialState: [],
    reducers: {},
    extraReducers: {
        [getCertification.fulfilled]: (state, action) => {
            state = action.payload;
        },
        [createCertification.fulfilled.type]: (state, action) =>
            state.push({
                certificationDate: action.payload.certificationDate,
                certificationDetail: action.payload.certificationDetail,
                certificationId: action.payload.certificationId,
                certificationIssuer: action.payload.certificationIssuer,
                certificationName: action.payload.certificationName,
                introCertificationNo: action.payload.introCertificationNo,
            }),
        [deleteCertification.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state = state.filter(
                (item) => item.introcertificationNo !== action.payload
            );
        },
    },
});

export default certification.reducer;
