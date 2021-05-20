import fetchJsonp from 'fetch-jsonp'
import qs from 'querystring'

export const searchApi = (word: string) => {
    const baseURL = 'https://ja.wikipedia.org/w/api.php'
    const params = {
        action: 'opensearch',
        format: 'json',
        search: word,
    }
    console.log(word)
    console.log(qs.stringify(params))
    const url = `${baseURL}?${qs.stringify(params)}`
    return fetchJsonp(url)
        .then((response) => response.json())
        .then((json) => json[1])
}
