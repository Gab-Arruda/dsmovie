import MovieCard from 'components/MovieCard';
import Pagination from 'components/Pagination';

function Listing() {
    // usado css inline pq a merda do bootstrap não queria importar o mb-3
    const mb = {
        marginBottom: "16px",
    };
    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3" style={mb}>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3" style={mb}>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3" style={mb}>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3" style={mb}>
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3" style={mb}>
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Listing;