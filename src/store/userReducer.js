import { DELETE_SV } from "./constrants";
import { SUBMIT_SV } from "./constrants";
import { EDIT_SV } from "./constrants";


const initialState = {
    listSV: [
        {
            maSV: 12345,
            tenSV: "Dinh Phuc Nguyen",
            phoneNumber: "123456789",
            email: "dpnguyen@gmail.com",
        },
        {
            maSV: 98765,
            tenSV: "Nguyen Van A",
            phoneNumber: "123456789",
            email: "vana@gmail.com",
        }
    ],
    SVEdit: null,
    keyword: "",
}

const SVReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_SV: {
            state.listSV = state.listSV.filter(x => x.maSV !== action.payload)
            return { ...state }
        }
        case SUBMIT_SV: {
            const SV = action.payload;
            let listSVClone = [...state.listSV]
            if (action.payload.maSV) {
                let listSVClone = [...state.listSV]
                listSVClone[listSVClone.findIndex(x => x.maSV = action.payload.maSV)] = SV;
                state.listSV = listSVClone;
            } else {
                state.listSV = [...state.listSV.maSV]
            }

            return { ...state }
        }
        case EDIT_SV: {
            state.SVEdit = action.payload

            return { ...state }
        }

        default:
            return { ...state };
    }
}

export default SVReducer