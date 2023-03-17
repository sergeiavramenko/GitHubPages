import profileReducer, {addPostActionCreator} from "./profile-reducer";

it ('length of  posts' , () => {
    let action = addPostActionCreator("it-kamasutra");
    let state = {
        posts: [
            {name: "Dimasdasdasd", id: "1", likesCount: 112},
            {name: "Andr", id: "2", likesCount: 90}
        ],
    }
    let newState = profileReducer(state , action )
   expect(newState.posts.length).toBe(3)
})
