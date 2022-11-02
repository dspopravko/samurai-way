import React from 'react';
import {Loader} from "../components/misc/Loader/Loader";

interface WithLoadingProps {
    isAuth: boolean;
}

export const withAuthRedirect = <P extends object & WithLoadingProps>(Component: React.ComponentType<P>) =>
    class WithLoading extends React.Component<P & WithLoadingProps> {
        render() {
            const { isAuth, ...props } = this.props;
            return isAuth ? <Component {...props as P} /> : <Loader />
        }
    };