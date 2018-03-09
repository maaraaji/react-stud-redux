import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import './Counter.css';
import * as actions from '../../store/actions';

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
        return (
            <div className="Counter">
                <CounterOutput value={this.props.ctr.counterValue} />
                <CounterControl label="Increment" clicked={this.props.incCounterHandler} />
                <CounterControl label="Decrement" clicked={() => this.props.decCounterHandler()}  />
                <CounterControl label="Add 5" clicked={this.props.addFiveCounterHandler}  />
                <CounterControl label="Subtract 5" clicked={this.props.subFiveCounterHandler}  />
                <hr/>
                <button onClick={() => this.props.logResultHandler(this.props.ctr.counterValue)}>Log Result</button>
                <ul>
                    {this.props.loggedResult.logs.map(log => (
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
        incCounterHandler: () => dispatch(actions.increment()),
        decCounterHandler: () => dispatch(actions.decrement()),
        addFiveCounterHandler: () => dispatch(actions.addFive()),
        subFiveCounterHandler: () => dispatch(actions.subFive()),
        logResultHandler: (value) => dispatch(actions.logResult(value)),
        delLogResultHandler: (id) => dispatch(actions.delLogResult(id))
    }
}

// console.log(connect(mapStateToProps)(Counter));

export default connect(mapStateToProps, mapDispatchToProps)(Counter);