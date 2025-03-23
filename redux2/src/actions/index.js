const URL  = "http://localhost:8900"

export function latestNews(){
    const output = fetch(`${URL}/articles?_end=3`, 
                    {method:'GET'})
                    .then(response => response.json())
        return{
            type:'GET_LATEST',
            payload: output
        }
}


export function OtherNew(){
    const output = fetch(`${URL}/articles?_start=3&_end=10`, 
                    {method:'GET'})
                    .then(response => response.json())
        return{
            type:'GET_OTHER',
            payload: output
        }
}

export function LatestGallery(){
    const output = fetch(`${URL}/galleries?_limit=2`, 
                    {method:'GET'})
                    .then(response => response.json())
        return{
            type:'GET_LATEST_GALLERY',
            payload: output
        }
}


export function selectedNews(id){
    const output = fetch(`${URL}/articles?id=${id}`, 
                    {method:'GET'})
                    .then(response => response.json())
        return{
            type:'GET_SELECTED_NEWS',
            payload: output
        }
}

export function clearSelectedNews(){
        return{
            type:'CLEAR_SELECTED_NEWS',
            payload: []
        }
}

export function selectedGallery(id){
    const output = fetch(`${URL}/galleries?id=${id}`, 
                    {method:'GET'})
                    .then(response => response.json())
        return{
            type:'GET_SELECTED_GALLERY',
            payload: output
        }
}

export function clearSelectedGallery(){
    return{
        type:'CLEAR_SELECTED_GALLERY',
        payload: []
    }
}

export function handleLikes(array,id){
    const output = fetch(`${URL}/articles/${id}`,{
        method:"PATCH",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({likes:array})
    })
    .then(response => response.json())

    return{
        type: 'HANDLE_LIKES_ARTICLE',
        payload:output
    }
}

export function postData(fname, lname){
    console.log('Coming in action where firstname =', fname, 'lname is', lname)

    return{
        type:'POST_FORM',
        payload:''
    }
}