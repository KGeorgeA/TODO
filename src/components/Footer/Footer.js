import React from "react";
import { connect } from "react-redux";
import * as todoActions from "../../store/todoReducer/todoActions";


class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "All",
        }
    }

    handleDeleteAllCompleted = () => {
        this.props.deleteAllCompleted();
    }

    render() {
        return (
            <footer
                className="footer"
            >
                <span className="footer__amount">
                    {
                        //amount logic
                    }
                </span>
                <ul className="footer__list filters">
                    <li className="filters__item">
                        <button className={`filters__button ${1 + 1}`}>All</button>
                    </li>
                    <li className="filters__item">
                        <button className={`filters__button ${1 + 1}`}>Active</button>
                    </li>
                    <li className="filters__item">
                        <button className={`filters__button ${1 + 1}`}>Completed</button>
                    </li>
                </ul>
                <button className="footer__button" onClick={this.handleDeleteAllCompleted}>Clear all completed</button>
            </footer>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        allCompleted: state.todoReducers.allCompleted,
        items: state.todoReducers.items,
    }
}

const mapDispatchToProps = {
    ...todoActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);