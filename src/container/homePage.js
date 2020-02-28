import React, { Component } from 'react';
import AddItems from './addItems';
import AvailableItems from './availableItems';
import OrderItems from './orderItems';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container-fluid">
                <h2>Home Page</h2>
                <div class="row">
                    <div class="col-sm">
                        <AddItems />
                    </div>
                    <div class="col-sm">
                        <AvailableItems />
                    </div>
                    <div class="col-sm">
                        <OrderItems />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;