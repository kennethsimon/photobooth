const initialState = {
posts: [
    {id: '1', username: 'kenethsimon', photo: 'https://timedotcom.files.wordpress.com/2017/12/kendrick-lamar-love-music-video-black-panther-soundtrack-easter-egg.jpg'},
    
]
}

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CREATE_POST':
        console.log('post created', action.post);
        break
        case 'CREATE_POST_ERROR':
        console.log('create project error', action.err);
        return state;
        default:
        return state;

    }

}

export default postReducer;