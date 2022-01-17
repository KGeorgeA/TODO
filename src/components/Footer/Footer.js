import React from "react";
import { connect } from "react-redux";
import * as todoActions from "../../store/todoReducer/todoActions";
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
} from "../../constants/TodoFilters";
import todoFilters from "../../store/todoReducer/todoFilters";

const TITLES = {
    [SHOW_ALL]: "All",
    [SHOW_ACTIVE]: "Active",
    [SHOW_COMPLETED]: "Completed",
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDeleteAllCompleted = () => {
        this.props.deleteAllCompleted();
    }

    handleFilterChange = (ev) => {
        this.props.changeFilter(ev.target.innerText);
    }

    render() {
        return (
            <footer
                className="footer"
            >
                <span className="footer__amount">
                    {
                        
                    }
                </span>
                <ul className="footer__list filters">
                    {
                        Object.keys(TITLES).map(filter => 
                            <li key={filter} className="filters__item">
                                <button 
                                    className={`filters__button ${this.props.filter === TITLES[filter] ? "selected" : ""}`}
                                    onClick={this.handleFilterChange}
                                >
                                    {TITLES[filter]}
                                </button>
                            </li>    
                        )
                    }
                    {/* <li className="filters__item">
                        <button className={`filters__button ${this.state.filter === TITLES[this.state.filter] ? "selected" : ""}`}>All</button>
                    </li>
                    <li className="filters__item">
                        <button className={`filters__button ${1 + 1}`}>Active</button>
                    </li>
                    <li className="filters__item">
                        <button className={`filters__button ${1 + 1}`}>Completed</button>
                    </li> */}
                </ul>
                <button className="footer__button" onClick={this.handleDeleteAllCompleted}>Clear all completed</button>
            </footer>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        allCompleted: state.todoReducers.allCompleted,
        filter: state.todoReducers.filter,
        items: state.todoReducers.items,
    }
}

const mapDispatchToProps = {
    ...todoActions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);