import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class Counter extends React.Component {
    render() {
        return (
            <div>
                <div>White: {this.props.whiteSquares}</div>
                <div>Black: {64 - this.props.whiteSquares}</div>
            </div>
        );
    }
}

Counter.propTypes = {
    whiteSquares: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
    whiteSquares: state.whiteSquareCount,
});

export default connect(mapStateToProps)(Counter);