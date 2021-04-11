import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../ProvideAuth';


export default function PrivateRoute(routeProps: RouteProps) {
  const auth = useAuth()
  if(auth.currentUser) {
    return <Route {...routeProps} />;
  } else {
    return <Redirect to={{ pathname: '/login' }} />;
  }
};