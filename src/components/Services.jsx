import React from 'react';
import Cards from './Cards'

function Services() {
    return (
            <div className="container d-flex justify-content-center h-100">
                <div className="row">
                    <div className="col-md-4">
                        <Cards/>
                    </div>
                    <div className="col-md-4">
                        <Cards/>
                    </div>
                    <div className="col-md-4">
                        <Cards/>
                    </div>
                </div>
            </div>
    )
}

export default Services