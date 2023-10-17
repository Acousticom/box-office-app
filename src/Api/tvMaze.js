const baseUrl='https://api.tvmaze.com'

const getData=async(query)=>{
    const response= await fetch(`${baseUrl}${query}`)
    const data= await response.json()
    return data
}

export const searchForShows=(searchStr)=> getData(`/search/shows?q=${searchStr}`)
export const searchForPerson=(searchStr)=> getData(`/search/people?q=${searchStr}`)
export const getShowById=(showId)=> getData(`/shows/${showId}?embed[]=seasons&embed[]=cast`)




