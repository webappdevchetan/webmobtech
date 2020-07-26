import React, { Component } from 'react';
import Loader from '../subcomponent/Loader';
import Header from '../container/HeaderContainer';
import { getUrl } from '../services/network/urls';
import { Container, Row, Col, Form, Card } from "react-bootstrap";
import Image from '../assets/images/download.svg'
import { Link } from "react-router-dom";

class MovieListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.movie,
            loading:true
        }
    }
   
    componentDidMount(){
        this.getMovieList()
    }
    componentDidUpdate(prevProps) {
        if (this.props.movie !== prevProps.movie){
            this.setState({movies: this.props.movie})
        }
        if(this.props.category !== prevProps.category){
            this.setState({
                loading: true
            })
            this.getMovieList('category')
        }
        if (this.props.search !== prevProps.search && this.props.search !== ''){
            this.setState({
                loading: true
            })
            this.getMovieList('search')
        } else if (this.props.search !== prevProps.search &&  this.props.search === ''){
            this.setState({
                loading: true
            })
            this.getMovieList('category')
        }
        // if (this.props.display !== prevProps.display) {
        //     this._onImageUpdate(this.state.bigHorseImages.left)
        //     this.setState({
        //         drawImage: this.props.drawedImage
        //     })
        // }

    }

    getMovieList = (type) => {

        let url = getUrl(this.props.category);
        if(type === "search"){
            url = getUrl('SEARCH') + '&query=' + this.props.search
        }
        console.log(url)
        fetch(url, {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },

        }).then(response => response.json())
            .then(data => {
                if (this.props.category !== 'LATEST'){
                    this.props.setMovies(data.results)
                }else{
                    this.props.setMovies([data])
                }
                this.setState({
                    loading: false
                })
            });
        
    }



    render() {
        return (
            <React.Fragment>
                {this.state.loading && <Loader />}
                <Container>
                    <Header />
                    {this.state.movies.length > 0 ? <Row>
                        {this.state.movies.map((movie) => <Col sm="4" key={"movie_" + movie.id} className="mt-4">
                            <Link to={`/detail/${movie.id}`}>
                                <Card>
                                    {movie.poster_path !== null && <Card.Img variant="top" className="image-spacing" src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} />}
                                    
                                    <Card.Body>
                                        
                                            <Card.Title className="justify-content-md-center">{movie.title}</Card.Title>
                                        
                                    </Card.Body>
                                </Card>
                            </Link>
                            
                        </Col>
                        )}
                        
                    </Row>
                         : <Row>
                            <Col>Movie Not found</Col>
                        </Row>}
                        
                </Container>
            </React.Fragment>
        )
    }
}

export default MovieListComponent;
