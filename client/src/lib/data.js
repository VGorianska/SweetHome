import roomPhotos from '../roomPhotos.json';
import store from "store";

export const setFavourites = (favourites) => {
    return store.set('favourites', favourites)
}

export const getFavourites = () => {
    const favourites = store.get('favourites') || []
    return favourites
}

export const findPhotos = (filter = {}) => {     // {type: "livingroom"}
    const filterKeys = Object.keys(filter)      // ["type"]

    return roomPhotos.filter((roomPhoto) => {   // check if photo keys (type, isFavourite or what ever) matches filter keys 
        const isMatched = filterKeys.every((propToCheck) =>
            roomPhoto[propToCheck] === filter[propToCheck]
        )
        return isMatched

    })
}
