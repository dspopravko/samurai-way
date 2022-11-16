import {addLike} from "../profile-reducer";
import {store} from "../redux-store";

test("like should be added correctly to the last post", () => {
    const dispatch = store.dispatch.bind(store)
    const lastPost = store.getState().profileReducer.posts.length
    const like = store.getState().profileReducer.posts[lastPost-1].myLike

    dispatch(addLike(0))

    expect(store.getState().profileReducer.posts[lastPost-1].myLike).toBe(!like)
})