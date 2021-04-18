import axios from 'axios'

export  const getGifs = async(categoryProps) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(categoryProps) }&limit=10&api_key=xenmqduu3cTtZVB1SyrEKC6dm8dSerni`;
    const resp = await axios( url );
    const data = await resp.data.data;

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    }); 
    return gifs;
}
