const requests = {
    getTopAnime: '/top/anime',
    getOngoingAnime: '/seasons/now',
    getUpcomingAnime: 'seasons/upcoming',
    getTopAiringAnime: '/top/anime?filter=airing',

    getAnimeGenres: '/genres/anime',

    getAnimeById: (id) => `/anime/${id}`,
    getAnimeType: (type) => `/anime?type=${type}&sort=desc&order_by=members`,
    getAnimeOrder: (order, sort) => `/anime?order_by=${order}&sort=${sort}`,  
    getAnimeByTitle: (title) => `/anime?letter=${title}`,
    getAnimeCharacter: (id) => `/anime/${id}/characters`,
    getAnimeByGenres: (id) => `/anime?genres=${id}&sort=desc&order_by=members`,
    getAnimeEpisode: (id) => `/anime/${id}/episodes`,
    getAnimeStatistics: (id) => `/anime/${id}/statistics`,

    getStudById: (id) => `/producers/${id}`,
}

export default requests