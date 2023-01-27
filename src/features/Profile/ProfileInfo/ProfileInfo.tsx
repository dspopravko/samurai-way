import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../../redux/profile-reducer";
import logo from "../../../assets/img/defaultUser.png"
import {Button} from "../../../components/Button/Button";
import {Status} from "./Status/Status";

type ProfileInfoPropsType = {
	isFollowed: boolean
	isMyProfile: boolean
	profile: ProfileType
	follow: (userID: number) => void
	unfollow: (userID: number) => void
	isFetchingProfile: boolean
	updateStatus: (status: string) => void
	updatePhoto: (photoFile: File) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
	const [modal, setModal] = useState(false)
	const [photo, setPhoto] = useState<File | null>(null)
	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return
		}
		if (e.target.files.length > 0) {
			setPhoto(e.target.files[0])
		}
	}
	const updatePhotoHandler = () => {
		if (photo) {
			props.updatePhoto(photo)
		}
	}
	if (props.isFetchingProfile) {
		return (
			<div className={s.profileInfoWrapper}>
				<div className={s.contentImgWrapper}>
					<img
						alt={"profile-wallpaper"}
						src={'https://upload.wikimedia.org/wikipedia/commons/f/f6/Swiss_National_Park_131.JPG'}/>
				</div>
				<div className={s.profileInfo}>
					<div className={s.avatarBlock}>
						<div className={s.avatarWrapper}>
							<img alt={"avatar"}
									 src={logo}>
							</img>
						</div>
						<div className={s.nameWrapper}>
						</div>
					</div>
					<div className={s.aboutMe}>
					</div>
					<div className={s.profileAction}>
						<div className={s.btnWrapper}>
						</div>
					</div>
				</div>
			</div>
		)
	}
	return (
		<div className={s.profileInfoWrapper}>
			<div className={s.contentImgWrapper}>
				<img
					alt={"profile-wallpaper"}
					src={'https://asset.berita24.id/wallpaper/20220115/3200x1080-macos-extended-wallpaper-for-ultrawide-monitors-thumb.jpg'}/>
			</div>
			<div className={s.profileInfo}>
				<div className={s.avatarBlock}>
					<div className={s.avatarWrapper}>
						<img alt={"avatar"}
								 src={props.profile.photos.large || logo}>
						</img>
						{props.isMyProfile && <div className={s.avatarMenuOnHover}>
							<button onClick={() => setModal(true)}>Change photo</button>
						</div>}
					</div>
					<div className={s.nameWrapper}>
						{props.profile.fullName}
					</div>
				</div>
				{modal && <div className={s.changePhotoModal}>
            <button onClick={() => setModal(false)}>close</button>
            <div className={s.fileInput}>
                <input type="file" onChange={(e) => inputChangeHandler(e)}/>
                <button onClick={updatePhotoHandler}>Update Photo</button>
            </div>
        </div>}
				<div className={s.aboutMe}>
					<Status status={props.profile.status} updateStatus={props.updateStatus}/>
					<b>About me</b> {props.profile.aboutMe} <br/>
					{props.profile.lookingForAJob && <b>Open to work </b>}
					<p>{props.profile.lookingForAJobDescription}</p>
				</div>
				<div className={s.profileAction}>

					{props.isMyProfile ? 'Current user account' : ''}
					{props.isMyProfile ? ''
						: <div className={s.btnWrapper}>
							{props.isFollowed ?
								<Button name={"Unfollow"}
												onClick={() => props.unfollow(props.profile.userId)}
								></Button>
								: <Button name={"Follow"}
													onClick={() => props.follow(props.profile.userId)}
								></Button>}
						</div>
					}
				</div>
			</div>
		</div>
	)
}