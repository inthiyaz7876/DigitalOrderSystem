import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadFile, getItemTypes } from '../redux/actions/summaryActions';

class AddItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'select',
            selectedFile: null,
            itemData: [],
            testObj : {
                name: '',
                image:'',
                price:''
            }
        }
    }

    componentDidMount () {
        const { getItemTypes } = this.props;
        getItemTypes();
    }
    AddLoginEntry = myWord => {
        return (
            <input 
             type="text" 
             class="form-control form-control-lg"
             onChange = {e => {
                 let { testObj } = this.state;
                 testObj[myWord] = e.target.value;
                 this.setState({ testObj });
             }} 
             placeholder= {myWord} 
             name="item_Name" 
            />
        )
    }
    saveData = () => {
        const { uploadFile } = this.props;
        const values = this.state.testObj;
        uploadFile(values);
    }

    change = (event)=>{
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div class="container">
                <div class="card addItems">
                    <div class="card-body">
                    <select id="lang" class="itemType" onChange={(event) =>{this.change(event)}} value={this.state.value}>
                        <option value="select">Select</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                    </select>
                        {this.AddLoginEntry("name")}
                        {this.AddLoginEntry("image")}
                        {this.AddLoginEntry("price")}
                        <button onClick={this.saveData} color="primary">Save Item</button>
                      </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({

})

// const mapDispatchToProps = dispatch => ({
//     uploadFile: () => dispatch(uploadFile())
// })

export default connect(mapStateToProps, {uploadFile, getItemTypes})(AddItems);
