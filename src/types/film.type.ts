export interface Country {
    "name" : string
}
export interface Genre {
    "name" : string
}
export interface Rating {
    [index:string] : number | null
    "kp": number,
    "imdb": number,
    "filmCritics": number,
    "russianFilmCritics": number,
    "await": null
}
export interface Person {
    "id": number,
    "photo": string,
    "name": string,
    "enName": string | null,
    "description": string | null,
    "profession": string,
    "enProfession": string,
}
export interface Poster {
    "url": string,
    "previewUrl": string
}

export interface SeasonInfo {
    "number": number,
    "episodesCount": number
}
export interface Fact {
    "value": string,
    "type": string,
    "spoiler": boolean
}
export interface SimilarMovie {
    "id": number,
    "name": string,
    "enName": string | null,
    "alternativeName": string,
    "type": string,
    "poster": Poster,
    "year": number,
    "rating": Rating
}
export interface ExternalId {
    [index : string] : string | number | null,
    "kpHD": "6104f96d66d447fd8744d5a6925ec740",
    "imdb": null,
    "tmdb": null
}
export interface Trailer {
    "url" : string,
    "name" : string,
    "site" : string,
    "type" : string 
}

export interface ProductionCompanies{
    "url": string,
    "previewUrl": string,
    "name" : string
}
export interface Premiere {
    [index : string] : string
}
export interface ReleaseYear {
    "start" : number,
    "end" : number | null
}
export interface SequelOrPrequel{
    "id": number,
    "name": string,
    "enName": string | null,
    "alternativeName": string,
    "type": string,
    "poster": Poster,
}

export interface Film {
    "id": number,
    "type": string,
    "name": string,
    "year": number,
    "genres": Genre[],
    "countries": Country[],
    "description": string,
    "poster": Poster,
    "slogan": string | null,
    "rating": Rating,
    "ratingKeys" : string[],
    "movieLength": number | null,
    "isSeries": boolean,
    "seriesLength": number | null,
    "seasonsInfo": SeasonInfo[] | null,
    "persons": Person[],
    "actors" : Person[],
    "composers" : Person[],
    "designers" : Person[],
    "directors" : Person[],
    "editors" : Person[],
    "operators" : Person[],
    "producers" : Person[],
    "voice_actors" : Person[],
    "writers" : Person[],
    "facts" : Fact[],
    "similarMovies" : SimilarMovie[],
    "externalId": ExternalId,
    "externalIdKeys" : string[],
    "ageRating": number,
    "trailers" : Trailer[],
    "productionCompanies" : ProductionCompanies[],
    "premiere" : Premiere,
    "premiereKeys" : string[],
    "releaseYears" : ReleaseYear[],
    "sequelsAndPrequels" : SequelOrPrequel[],
}