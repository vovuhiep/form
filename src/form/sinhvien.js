import React, { Component } from 'react'
import { connect } from "react-redux";
import { actDeleteSV } from "./../store/actions"
import { actEditSV } from "./../store/actions"

class SinhVien extends Component {
    render() {
        const { sv, deleteSV, editSV } = this.props;
        return (
            <tr>
                <td>{sv.maSV}</td>
                <td>{sv.tenSV}</td>
                <td>{sv.phoneNumber}</td>
                <td>{sv.email}</td>
                <td>
                    <button
                        className="btn btn-info mr-2"
                        data-toggle="modal"
                        data-target="#modelIdUser"
                        onClick={() => {
                            editSV(sv)
                        }}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            deleteSV(sv.maSV)
                        }}
                    >Delete</button>
                </td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      deleteSV: (maSV) => {
        //dispatch gửi action lên reducer
        dispatch(actDeleteSV(maSV));
      },
  
      editSV: (sv) => {
        dispatch(actEditSV(sv));
      }
    }
  }

  export default connect(null, mapDispatchToProps) (SinhVien)