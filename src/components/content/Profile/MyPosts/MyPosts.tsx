import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

const posts = [
    {
        name: "Artem Smirnov",
        message: "Great wallpaper!",
        avatar: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
        likes: 56,
        date: "12.03.18 15:54"
    },
    {
        name: "Artem Smirnov",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec accumsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
        avatar: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
        likes: 45,
        date: "12.03.18 15:54"
    },
    {
        name: "Maisy Gibson",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec accumsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetMaecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        likes: 65,
        date: "12.03.18 15:54"
    }
]

export default function MyPosts() {
    return (
        <div className={s.myPostsWrapper}>
            <div className={s.post_new}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            {posts.map(post => {
                return <Post
                    message={post.message}
                    likes={post.likes}
                    avatar={post.avatar}
                    name={post.name}
                    date={post.date}
                />
            })}
        </div>
    )
}