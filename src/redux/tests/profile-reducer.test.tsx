import {addLikeAC, addPostAC} from "../profile-reducer";
import {store} from "../redux-store";

test("post should be added correctly", () => {
    const state = store.getState()
    state.profileReducer.pageHeader.postInput = "New post input"

    const postLength = state.profileReducer.posts.length
    const dispatch = store.dispatch.bind(store)

    dispatch(addPostAC())

    expect(store.getState().profileReducer.posts[0].message).toBe("New post input")
    expect(store.getState().profileReducer.posts.length).toBe(postLength+1)
})

test("like should be added correctly to the last post", () => {
    const dispatch = store.dispatch.bind(store)
    const lastPost = store.getState().profileReducer.posts.length
    const like = store.getState().profileReducer.posts[lastPost-1].myLike

    dispatch(addLikeAC(0))

    expect(store.getState().profileReducer.posts[lastPost-1].myLike).toBe(!like)
})