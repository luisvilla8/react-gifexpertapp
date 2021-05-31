export const getGifs = async ( category ) => { 

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=1JQ7b7fvr6nTdyDr9frOdwf3WOCcrBsf`;
    const request = await fetch( url );
    const { data } = await request.json();

    const gifsInfo = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifsInfo;
}