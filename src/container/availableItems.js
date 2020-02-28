import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../redux/actions/summaryActions';

class AvailableItems extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        const { getItems } = this.props;
        getItems();
    }

    render() {
        const { availableItems } = this.props;
        console.log("bhbbbbbbbbb",availableItems);
        return (
            <div class="container">
                <div class="card availableItems">
                        <div class="card-body avaialableItems">        
                     {
                        availableItems.map((items) => {
                            return  <div class="col-sm-6">
                                        <div class="card showItem">
                                           <img class="card-img-top availableItems" src={items.image} alt="image" />
                                            <div class="card-body">
                                             <div class="card-title showTitle">{items.name}</div>
                                              <a href="#" class="btn btn-primary">{items.price}</a>
                                        </div>
                                    </div>
                            </div>
                       })
                    }
                </div>
                    </div>
               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    availableItems: state.summaryReducer.availableItems
})


export default connect(mapStateToProps, {getItems})(AvailableItems);
