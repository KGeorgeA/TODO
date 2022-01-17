import styled from "styled-components"

export const FooterStyle = styled.footer`
    
    background-color: white;
    position: relative;
    padding: 0 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #777;
    border-top: 1px solid #e6e6e6;
    font-size: 14px;

    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);


    &:before {
        padding-bottom: 100px;
        z-index: -2;
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);
    }

    button {
        border: none;
        background: none;
        color: #777;
    }

    .filters__button {
    
        &.filters__button_selected {
            border-radius: 3px;
            border: 1px solid rgba(200,200,200, 50%);
        }

        &:hover {
            border-radius: 3px;
            border: 1px solid rgba(200,200,200, 50%);
        }
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
    }

    .footer__button {
        &:hover {
            text-decoration: underline
        }
    }

    @media screen and (max-width: 676px) {
        .footer__amount {
            text-align: center;
            line-height: 15px;
            padding: 0 5px;
        }

        .footer__list.filters {
            padding: 0 5px;
            justify-content: space-around;
            flex-wrap: nowrap;
            width: 200px;
            margin: 0 auto;
        }
        
        .footer__button {
            &:hover {
            display: none;
            }
        }

        .footer:before {
            display: none;
        }
    }
`