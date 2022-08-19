import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

const posts = [
    {
        name: "Artem Smirnov",
        message: "Hey! How are you?",
        avatar: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
        likes: 56,
        date: "12.03.18 15:54"
    },
    {
        name: "Artem Smirnov",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis ipsum sit amet semper faucibus. Aenean eu vestibulum orci, nec vestibulum nisi. Proin dapibus diam neque, sed malesuada ex euismod et. Quisque ex risus, consequat sit amet mi ac, lobortis tincidunt erat. Donec accumsan quis magna sed feugiat. Nulla elementum metus id odio dapibus consectetur. Cras malesuada ligula sed nisi eleifend, vel consequat purus rhoncus. Donec efficitur magna nec quam imperdiet rutrum. Phasellus tincidunt blandit quam at ullamcorper. Integer id elit varius, rhoncus lacus et, aliquet dolor. Proin lacus ex, mattis a dapibus id, dictum at quam. Donec ac lacinia lorem. Quisque non nunc vel diam faucibus consectetur. Integer lacinia ut dolor ac vestibulum. Sed faucibus mi eget ligula interdum tincidunt. Phasellus eget turpis nibh. Phasellus sed feugiat lectus. Nulla a molestie nisl, et egestas nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nibh in dolor malesuada bibendum aliquam ac leo. Sed laoreet, erat vitae placerat tempus, magna nisl lacinia odio, sed bibendum ante sem non odio. Proin bibendum est mauris,  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae nibh in dolor malesuada bibendum aliquam ac leo.eu congue nulla feugiat sit amet. Duis at aliquet lacus.",
        avatar: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
        likes: 45,
        date: "12.03.18 15:54"
    }
]

export default function MyPosts() {
    return (
        <div>
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