const requests = {
    // getTopAnime: '/top/anime',
    // getOngoingAnime: '/seasons/now',
    // getUpcomingAnime: 'seasons/upcoming',
    // getTopAiringAnime: '/top/anime?filter=airing',

    getAnimeGenres: '/genres/anime',

    getAnimeById: (id) => `/anime/${id}`,

    getAnimeCharacter: (id) => `/anime/${id}/characters`,
    getAnimeEpisode: (id) => `/anime/${id}/episodes`,
    getAnimeStatistics: (id) => `/anime/${id}/statistics`,
    
    getAnimeType: ( page) => `/anime?type=movie&sort=desc&order_by=members&limit=24&page=${page}`,  
    getAnimeByTitle: (title, page) => `/anime?letter=${title}&limit=24&page=${page}`,
    getAnimeByGenres: (id, page) => `/anime?genres=${id}&sort=desc&order_by=members&limit=24&page=${page}`,

    getAnimeOrder: (order, sort) => `/anime?order_by=${order}&sort=${sort}`,
    getStudById: (id) => `/producers/${id}`,
}

export default requests