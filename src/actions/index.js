let axios = require('axios');
//reducer to indicate that our api call has started
export let startDevSearch = () => {
    return {
        type : 'Start_Dev_Search'
    }
}

// reducer to indicate we have received all our data from the api
export let endDevSearch = (devsArray) => {
    return {
        type : 'End_Dev_Search',
        devsArray
    }
}


//here we actually do the fetching
export let fetchDev = () => {
    let url = "https://api.github.com/search/users?q=language:javascript+location:lagos&sort:repositories&order:desc"
    return (dispatch) => {
        dispatch(startDevSearch())
        return axios.get(url).then(
            (response) => {
                let devsArr = response.data.items.slice(0,10)
                dispatch(endDevSearch(devsArr))
            },
            (err) => {
                console.log(err);
            }
        )

    }
}