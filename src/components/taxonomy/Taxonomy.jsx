import React from 'react';
import MovieGrid from '../movieGrid/MovieGrid';
import PageHeader from '../pageHeader/PageHeader';

const Taxonomy = ({title,cat}) => {
    return (
        <>
            <PageHeader>{title}</PageHeader>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid category={cat} />
                </div>
            </div>
        </>
    );
}

export default Taxonomy;
