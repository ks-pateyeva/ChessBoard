import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { actions } from '../actions';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            white: false,
        }
        this.toggleColor = this.toggleColor.bind(this);
    }

    componentDidMount() {
        if(this.props.white) {
            this.setState({
                white: true,
            });
        }
    }

    toggleColor() {
        this.state.white ? this.props.decWhite() : this.props.incWhite();
        this.setState({
            white: !this.state.white,
        })
    }

    render() {
        return (
            <div
                className="square"
                style={{ backgroundColor: `${this.state.white ? "#FFFAF0" : "#000000"}` }}
                // FUNC
                onClick={this.toggleColor}
            />
        )
    }
}

Square.propTypes = {
    incWhite: PropTypes.func.isRequired,
    decWhite: PropTypes.func.isRequired,
}

const mapStateToProps = () => ({});

const mapDispacthToProps = (dispatch) => ({
    incWhite: () => dispatch(actions.countWhiteSquares(1)),
    decWhite: () => dispatch(actions.countWhiteSquares(-1)),
});

export default connect(mapStateToProps, mapDispacthToProps)(Square);