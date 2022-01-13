import React from "react";
import { FooterStyle } from "../styles/Components.styled";


class Footer extends React.Component {
    render() {
        // const filterNum = parseInt(this.props.whichFilterSet);
        // const filterAll = filterNum ? "filters__button_active" : "";
        return <FooterStyle
            className="footer"
            
        >
            <span className="footer__amount">{this.props.todoAmount === 1 ? `${this.props.todoAmount} item left` : `${this.props.todoAmount} items left`}</span>
            <ul className="footer__list filters">
                <li className="filters__item">
                    <button className={`filters__button`} onClick={this.props.changeFilter}>All</button>
                </li>
                <li className="filters__item">
                    <button className="filters__button" onClick={this.props.changeFilter}>Active</button>
                </li>
                <li className="filters__item">
                    <button className="filters__button" onClick={this.props.changeFilter}>Completed</button>
                </li>
            </ul>
            <button className="footer__button" onClick={this.props.handleDeleteAllCompleted}>Clear completed</button>
        </FooterStyle>
    }
}

export default Footer;