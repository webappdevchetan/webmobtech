import React, { Component } from 'react';

import { Navbar, Nav, FormControl, Form, Button } from "react-bootstrap";

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
           search : ''
        }
    }

    handleSetCategory = (category) => {
        this.props.setCategory(category)
        this.props.history.push({
            pathname: '/'
        })
    }

    handleSearch = () => {
        this.props.setSearch(this.state.search)
        this.props.history.push({
            pathname: '/'
        })
    }
    handleSearchInput = (e) => {
        this.setState({
            search:e.target.value
        })
    }
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Movies</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link onClick={() => this.handleSetCategory('LATEST')} className={this.props.category === 'LATEST' ? 'active' : ''}>Latest </Nav.Link>
                        <Nav.Link onClick={() => this.handleSetCategory('NOW_PLAYING')} className={this.props.category === 'NOW_PLAYING' ? 'active' : ''}>Now Playing</Nav.Link>
                        <Nav.Link onClick={() => this.handleSetCategory('UPCOMING')} className={this.props.category === 'UPCOMING' ? 'active' : ''}>Up Coming</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl value={this.state.search} name="search" type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleSearchInput}/>
                        <Button type="button" variant="outline-success" onClick={this.handleSearch} >Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;