import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lang } from '../actions';

class ButtonLang extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'RUS'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if(this.state.lang === 'RUS') {
            this.setState({
                lang: 'ENG'
            });

        } else {
            this.setState({
                lang: 'RUS'
            });
        }
        e.preventDefault()
        this.props.dispatch(lang(this.state.lang));
    }
    render() {
        return(
            <button onClick={this.handleClick}>{this.state.lang}</button>
        )
    }
}

export default connect()(ButtonLang);