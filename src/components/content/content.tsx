export default function Content() {
    return <div className={'content'}>
        <div className={'content-img-wrapper'}>
            <img
                alt={"profile-wallpaper"}
                src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
        </div>
        <div>
            avatar+description
        </div>
        <div>
            my posts
            <div className={'new-post'}>NewPost</div>
            <div className={'post'}>Post1</div>
            <div className={'post'}>Post2</div>
            <div className={'post'}>Post3</div>
        </div>
    </div>
}