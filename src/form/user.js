import React, { Component } from 'react'
import SinhVien from './sinhvien.js';
import { connect } from 'react-redux';

class User extends Component {
    renderListSV = () => {
        const { listSV, keyword } = this.props;
        return listSV?.filter((sv) => sv.tenSV.toLowerCase().indexOf(keyword.toLowerCase()) !== -1).map((sv) => {
            return <SinhVien key={sv.maSV} sv={sv} />
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã sinh viên</th>
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListSV()}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listSV: state.SVReducer.listSV,
        keyword: state.SVReducer.keyword,
    }
}

export default connect(mapStateToProps, null)(User);