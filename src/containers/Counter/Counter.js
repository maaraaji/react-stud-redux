import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:
                break;
        }
    }

    render () {
        console.log(this.props);
        return (
            <div className="Counter">
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incCounterHandler} />
                <CounterControl label="Decrement" clicked={() => this.props.decCounterHandler()}  />
                <CounterControl label="Add 5" clicked={this.props.addFiveCounterHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.subFiveCounterHandler}  />
                <hr/>
                <button onClick={this.props.logResultHandler}>Log Result</button>
                <ul>
                    {this.props.loggedResult.map(log => (
                        <li  key={log.id} onClick={() => this.props.delLogResultHandler(log.id)}>{log.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        loggedResult: state.logs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incCounterHandler: () => dispatch({type: actionTypes.INCREMENT}),
        decCounterHandler: () => dispatch({type: actionTypes.DECREMENT}),
        addFiveCounterHandler: () => dispatch({type: actionTypes.ADD_FIVE, value: 5}),
        subFiveCounterHandler: () => dispatch({type: actionTypes.SUB_FIVE, value: 5}),
        logResultHandler: () => dispatch({type: actionTypes.LOG_RESULT}),
        delLogResultHandler: (id) => dispatch({type: actionTypes.DEL_LOG_RESULT, id: id})
    }
}

// console.log(connect(mapStateToProps)(Counter));

export default connect(mapStateToProps, mapDispatchToProps)(Counter);