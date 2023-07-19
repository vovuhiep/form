import React, { Component } from 'react'
import Form from './form'
import User from './user'
import { connect } from "react-redux";
import { actEditSV } from "./../store/actions"  

class Index extends Component {
  render() {
    return (
      <div className='container'>
        <Form/>
        <br/>
        <User/>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      resetSVEdit: () => {
        dispatch(actEditSV(null))
      }
    }
}

export default connect(null, mapDispatchToProps) (Index)