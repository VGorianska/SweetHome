import roomPhotos from '../roomPhotos.json';

export const createPhoto = (data) => {
    return roomPhotos.post(data)
}

export const getPhotos = () => {    
    return roomPhotos
}

export const updatePhoto = (id, data) => {
    return roomPhotos.put()
}

export const deletePhoto = (id) => {
    return roomPhotos.delete()
}

export const findByType = (filter = {}) => {     // {type: "livingroom"}
    const filterKeys = Object.keys(filter)      // ["type"]
    return roomPhotos.filter((roomPhoto) => {   // check if photo keys (type, isFavourite or what ever) matches filter keys 
        let isMatching = false
        // filterKeys.find ?   (() => {})
    })

}