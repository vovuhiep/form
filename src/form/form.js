import React, { Component } from 'react'
import { connect } from "react-redux";
import { actSubmitSV } from "./../store/actions"

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                maSV: "",
                tenSV: "",
                email: "",
                phoneNumber: "",
                
            },

            errors: {
                maSV: "",
                tenSV: "",
                email: "",
                phoneNumber: "",
            },

            maSVValid: true,
            tenSVValid: true,
            emailValid: true,
            phoneNumberValid: true,

            formValid: false,

        };

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitSV(this.state);
      }

    handleOnchange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value 
        })
    }

    handleValidation = (e) => {
        const { name, value } = e.target;

        let mess = value.trim() ? "" : `${name} không được rỗng`;

        let { maSVValid, tenSVValid, emailValid, phoneNumberValid } = this.state;

        switch (name) {
            case "maSV":
                maSVValid = mess === "" ? true : false
                if (value && value.trim().length < 2) {
                    mess = "Kí tự bắt buộc phải từ 4 trở lên"
                    maSVValid = false;
                }
                break;
            case "tenSV":
                tenSVValid = mess === "" ? true : false
                if (value && value.trim().length < 4) {
                    mess = "Kí tự bắt buộc phải từ 4 trở lên"
                    tenSVValid = false;
                }
                break;
            case "email":
                emailValid = mess === "" ? true : false
                if (value && !value.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")) {
                    mess = "Vui lòng nhập đúng định dạng email"
                    emailValid = false;
                }
                break;
            case "phoneNumber":
                phoneNumberValid = mess === "" ? true : false
                if (value && value.trim().length < 5) {
                    mess = "Số điện thoại bắt buộc phải từ 5 số trở lên"
                    phoneNumberValid = false;
                }
                break;
            default:
                break;
        }

        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            maSVValid,
            tenSVValid,
            emailValid,
            phoneNumberValid,
            formValid: maSVValid && tenSVValid && emailValid && phoneNumberValid,
        })
    }
    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center", margin: "30px" }}>React Form - Validation</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-row'>
                        <div className="col">
                            <label>Mã sinh viên:</label>
                            <input 
                                type="number" 
                                className="form-control" 
                                id="maSV" 
                                placeholder="Nhập mã sinh viên" 
                                name="maSV" 
                                onChange={this.handleOnchange} 
                                onBlur={this.handleValidation}
                                value={this.state.maSV}
                                required 
                            /> {this.state.errors.maSV && (<div className='text-danger'>{this.state.errors.maSV}</div>)}
                        </div>
                        <div className="col">
                            <label>Họ tên sinh viên:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="tenSV" 
                                placeholder="Nhập họ và tên" 
                                name="tenSV" 
                                onChange={this.handleOnchange} 
                                onBlur={this.handleValidation} 
                                value={this.state.tenSV}
                                required
                            />{this.state.errors.tenSV && (<div className='text-danger'>{this.state.errors.tenSV}</div>)}
                        </div>
                    </div>
                    <br />
                    <div className='form-row'>
                        <div className="col">
                            <label>Số điện thoại:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="phoneNumber" 
                                placeholder="Nhập số điện thoại" 
                                onChange={this.handleOnchange} 
                                onBlur={this.handleValidation} 
                                value={this.state.phoneNumber}
                                name="phoneNumber" 
                                required 
                            />{this.state.errors.phoneNumber && (<div className='text-danger'>{this.state.errors.phoneNumber}</div>)}
                        </div>
                        <div className="col">
                            <label>Email:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="email" 
                                placeholder="Nhập email" 
                                name="email" 
                                onChange={this.handleOnchange} 
                                onBlur={this.handleValidation} 
                                value={this.state.email}
                                required 
                            />{this.state.errors.email && (<div className='text-danger'>{this.state.errors.email}</div>)}
                        </div>
                    </div>
                    <br />
                    <button 
                        type="submit" 
                        className="btn btn-success" 
                        disabled={!this.state.formValid}
                    >Thêm sinh viên</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      submitSV : (sv) => {
        dispatch(actSubmitSV(sv))
      }
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      //key 'listUser' là props cho component Users
      editSV : state.SVReducer.SVEdit
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)