import { DELETE_SV } from "./constrants";
import { EDIT_SV } from "./constrants";
import { SUBMIT_SV } from "./constrants";

const actDeleteSV = (maSV) => {
    return {
        type: DELETE_SV,
        payload: maSV,
    };
};

const actEditSV = (sv) => {
    return {
        type: EDIT_SV,
        payload: sv
    }
};

const actSubmitSV = (sv) => {
    return {
        type: SUBMIT_SV,
        payload: sv
    }
};

export { actDeleteSV, actEditSV, actSubmitSV };