import React, { Component } from 'react';

export default class SearchBox extends Component  {
    state = {
        inputValue: ''
    }
    handleChange = e => {
        this.setState({inputValue: e.target.value})
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue: ''})
    }
    render() {
        return (
            <>
                <header className="Searchbar">
                <form 
                    className="SearchForm"
                    onSubmit={this.handleSubmit}
                    >
                    <input
                    className="SearchForm-input"
                    type="text"
                    value = {this.state.inputValue}
                    onChange={this.handleChange}
                    placeholder="Search images and photos"
                    />
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>
                </form>
                </header>
            </>
        )

    }

}