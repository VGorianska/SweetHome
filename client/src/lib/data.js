import roomPhotos from '../roomPhotos.json';
import store from "store";

export const setFavourites = (favourites) => {
    console.log("setting favourites ", favourites)
    return store.set('favourites', favourites)
}

export const getFavourites = () => {
    const favourites = store.get('favourites') || []
    console.log("getting favourites ", favourites)
    return favourites
}

export const findPhotos = (filter = {}) => {     // {type: "livingroom"}
    const filterKeys = Object.keys(filter)      // ["type"]
    console.log(filter)

    return roomPhotos.filter((roomPhoto) => {   // check if photo keys (type, isFavourite or what ever) matches filter keys 
        const isMatched = filterKeys.every((propToCheck) =>
            roomPhoto[propToCheck] === filter[propToCheck]
        )
        return isMatched

    })
}