import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MovieListComponent from '../component/MovieListComponent';
import { setMovies } from '../actions/movieActions'
const mapDispatchToProps = (dispatch) => ({
    setMovies: (data) => dispatch(setMovies(data)),

});


const mapStateToProps = (state) => ({
    movie: state.main.movie,
    category: state.main.category,
    search: state.main.search,
});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(MovieListComponent)
);