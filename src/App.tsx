import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import './components/Header/Header';
import Navbar from "./components/Sidebar/Navbar";
import {Music} from "./components/content/Music/Music";
import {News} from "./components/content/News/News";
import {Settings} from "./components/content/Settings/Settings";
import {Notes} from "./components/content/Notes/Notes";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {getAuthUserData} from "./redux/auth-reducer";
import {ReduxStateType} from "./redux/redux-store";
import {AppStateType, AppStatus, initializeApp} from "./redux/app-reducer";
import {Loader} from "./components/misc/Loader/Loader";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/content/Profile/ProfileContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))

class AppClassComponent extends React.Component<AppPropsType, MapStateToPropsType> {

	componentDidMount() {
		this.props.initializeApp()
	}

	render() {
		if (this.props.initialized === AppStatus.pending) return <Loader/>

		return (
			<BrowserRouter>
				<div className={'app-wrapper'}>
					<HeaderContainer/>
					<div className={'app-wrapper-content'}>
						<Route path={'/profile/:userId?'}
									 render={() =>
										 <React.Suspense fallback={<div> loading.. </div>}>
											 <ProfileContainer/>
										 </React.Suspense>

									 }/>
						<Route path={'/messages'}
									 render={() =>
										 <React.Suspense fallback={<div> loading.. </div>}>
											 <DialogsContainer/>
										 </React.Suspense>

									 }/>
						<Route path={'/users'}
									 render={() =>
										 <React.Suspense fallback={<div> loading.. </div>}>
											 <UsersContainer/>
										 </React.Suspense>

									 }/>
						<Route path={'/music'} render={() => <Music/>}/>
						<Route path={'/news'} render={() => <News/>}/>
						<Route path={'/notes'} render={() => <Notes/>}/>
						<Route path={'/settings'} render={() => <Settings/>}/>
						<Route path={'/login'} render={() => <Login/>}/>
					</div>
					<Navbar/>
				</div>
			</BrowserRouter>
		);
	}
}

type MapStateToPropsType = AppStateType
const mapStateToProps = ({AppReducer}: ReduxStateType): MapStateToPropsType => {
	return {
		initialized: AppReducer.initialized
	}
}

type MapDispatchToPropsType = {
	getAuthUserData: () => void
	initializeApp: () => void
}
const mapDispatchToProps: MapDispatchToPropsType = {
	getAuthUserData,
	initializeApp
}

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType
export const App = connect(mapStateToProps, mapDispatchToProps)(AppClassComponent)
