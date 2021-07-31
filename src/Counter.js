import React from "react";
import {connect} from 'react-redux';
import {add2} from "./redux/actions/actions";

class Counter extends React.Component {
    render() {
        return (
            <div style={{padding: 20, margin: 20, background: '#7fdbff', border: '3px solid #39cccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
            <div>
                <button onClick={() => this.props.onChange(1)}>Add</button>
                <button onClick={() => this.props.onChange(-1)}>Sub</button>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)


