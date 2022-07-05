import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/Home'))
const Movies = React.lazy(() => import('../pages/Movies'))
const TvSeries = React.lazy(() => import('../pages/TvSeries'))
const NotFound = React.lazy(() => import('../pages/NotFound'))


const routers = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/movie',
        component: Movies,
    },
    {
        path: '/tv',
        component: TvSeries,
    },
    {
        path: '/movie/search/:keyword',
        component: Movies,
    },
    {
        path: '/tv/search/:keyword',
        component: TvSeries,
    },
    {
        path: '*',
        component: NotFound,
    },
];
const MainRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {routers.map(({ component, path, ...rest }, index) => (
                    <Route
                        key={index}
                        component={component}
                        path={path}
                        {...rest}
                    />
                ))}
            </Switch>
        </Suspense>
    );
}
export default MainRouter