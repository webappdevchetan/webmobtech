import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HeaderComponent from '../subcomponent/Header';
import { setCategory, setSearch} from '../actions/movieActions'
const mapDispatchToProps = (dispatch) => ({
    setCategory: (data) => dispatch(setCategory(data)),
    setSearch: (data) => dispatch(setSearch(data)),

});


const mapStateToProps = (state) => ({
    category: state.main.category,
    search: state.main.search,

});

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HeaderComponent)
);