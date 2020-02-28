import React, { Component } from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './redux/actions/summaryActions';

class Summary extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { simpleAction } = this.props;
        simpleAction();
    }

    login = () => {
        window.location.href = "/homePage";
    }

    render() {
        const { result } = this.props;
        console.log('values', result)
        return (
            <div class="container login">
                <div class="card login">
                    <h1>Please Login into Portal</h1>
                    <div class="card-body">
                        <div class="form-group">
                            <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>
                        <button type="submit"  onClick={this.login} class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.summaryReducer.products,
    result: state.summaryReducer.result
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Summary);

