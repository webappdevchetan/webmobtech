import React, { Component } from 'react';
import Loader from '../subcomponent/Loader';
import { getUrl } from '../services/network/urls';
import Image from '../assets/images/download.svg'
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Header from '../container/HeaderContainer';
class MovieDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movie: []
        }
    }
    async componentDidMount() {
        let urlsArray = []
        if (this.props.match.params.id !== undefined) {
            urlsArray.push(fetch(getUrl("") +'movie/' + this.props.match.params.id + '?api_key=' + process.env.REACT_APP_API_KEY_TMDB + '&language='+process.env.REACT_APP_TMDB_LANG))
        }
        const promises = Promise.all(urlsArray);
        promises
            .then((results) =>
                Promise.all(results.map(r => r.json()))
            )
            .then((results) => {
                this.setState({
                    loading: false,
                    movie: results[0],
                })
            })
    }

    render() {
        let movie = this.state.movie
        return (
            <Container>
                {this.state.loading && <Loader />}
                <Header />
                <Row>
                    <Col lg="12" className="mb-3" >
                        <Link to="/" className="btn btn-primary"> Go back</Link>
                    </Col>
                    <Col sm="3" className=" product_img">
                        <img src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path} className="img-responsive" alt="title" />
                    </Col>
                    <Col sm="9" className="ml-6 product_content">
                        <h2><span>{movie.title}</span></h2>
                        <h3 className="cost"> Run Time : {movie.runtime}</h3>
                        <p>{movie.overview}</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default MovieDetailComponent;