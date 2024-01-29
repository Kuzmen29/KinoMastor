export interface User{
    userID : string,
    userNickname: string,
    userAvatar: string | null,
    userFavoriteFilms? : number[] | undefined,
    userWatchLater? : number[],
}