import React from 'react';

import { useParams } from 'react-router';


import { category as cate } from '../../constantsMovie';
import MovieGrid from '../movieGrid/MovieGrid';
import PageHeader from '../pageHeader/PageHeader';

const Taxonomy = () => {

    const { category } = useParams();

    return (
        <>
            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={category} />
                </div>
            </div>
        </>
    );
}

export default Taxonomy;
