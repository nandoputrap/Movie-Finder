// menampilkan movie list berdasarkan keyword
$('.search-button').on('click', function () {
    // ajax menggunakan jquery
    $.ajax({
        url: 'https://www.omdbapi.com/?apikey=6d6b6c08&s=' + $('.keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(movie => {
                cards += `<div class="col-md-4 mt-5 my-3 d-flex justify-content-around">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${movie.Poster}" alt="${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title mt-3">${movie.Title}</h5>
                        <h6 class="card-subtitle mt-3">${movie.Year}</h5>
                            <a href="#" class="btn btn-primary mt-3 movie-detail" data-toggle="modal" data-target="#movieModal" data-imdbid="${movie.imdbID}">Detail</a>
                    </div>
                </div>
            </div>`
            });

            $('.movie-list').html(cards);

            // tombol detail diklik maka akan mengarahkan ke id masing-masing
            $('.movie-detail').on('click', function () {
                // console.log($(this).data('imdbid'));
                $.ajax({
                    url: 'https://www.omdbapi.com/?apikey=6d6b6c08&i=' + $(this).data('imdbid'),
                    success: movie => {
                        const movieDetail = `
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${movie.Poster}" alt="${movie.Title}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${movie.Title}</h4>
                                    </li>
                                    <li class="list-group-item"><strong>Year :</strong> ${movie.Year}</li>
                                    <li class="list-group-item"><strong>Genres :</strong> ${movie.Genre}</li>
                                    <li class="list-group-item"><strong>Director :</strong> ${movie.Director} </li>
                                    <li class="list-group-item"><strong>Casts :</strong> ${movie.Actors}</li>
                                    <li class="list-group-item">
                                        <strong>Synopsis :</strong>
                                        <p>${movie.Plot}</p>
                                    </li>
                                    <li class="list-group-item"><strong>IMDB Rating :</strong> ${movie.Ratings[0].Value} </li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                        $('.modal-body').html(movieDetail);
                    }
                });
            });
            console.log(movies);
        },
        error: e => {
            console.log(e.responseText);
        }
    });
});