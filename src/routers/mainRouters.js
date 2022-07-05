import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
const Home = React.lazy(() => import('../pages/Home'))
const Movies = React.lazy(() => import('../pages/Movies'))
const SingleMovies = React.lazy(() => import('../pages/SingleMovies'));
const SingleTV = React.lazy(() => import('../pages/SingleTV'));
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
        exact: true,
        component: Movies,
    },
    {
        path: '/movie/:id',
        exact: true,
        component: SingleMovies,
    },
    {
        path: '/tv',
        exact: true,
        component: TvSeries,
    },
    {
        path: '/tv/:id',
        exact: true,
        component: SingleTV,
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