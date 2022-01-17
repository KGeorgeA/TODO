import React from "react";
import { connect } from "react-redux";
import * as todoActions from "../../store/todoReducer/todoActions";
import {
    SHOW_ALL,
    SHOW_ACTIVE,
    SHOW_COMPLETED,
} from "../../constants/TodoFilters";
import { FooterStyle } from "./Footer.styled";

const TITLES = {
    [SHOW_ALL]: "All",
    [SHOW_ACTIVE]: "Active",
    [SHOW_COMPLETED]: "Completed",
};

class Footer extends React.Component {

    handleDeleteAllCompleted = () => {
        this.props.deleteAllCompleted();
    }

    handleFilterChange = (ev) => {
        this.props.changeFilter(ev.target.innerText);
    }

    render() {
        return (
            <FooterStyle
                className="footer"
            >
                <span className="footer__amount">
                    {
                        this.props.items.length + " " + (this.props.items.length === 1 ? "item" : "items") + " left."
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
                </ul>
                <button className="footer__button" onClick={this.handleDeleteAllCompleted}>Clear all completed</button>
            </FooterStyle>
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