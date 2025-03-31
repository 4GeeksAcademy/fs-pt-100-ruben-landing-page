import React from "react";


export const Card = () => {

    return (
    <>
        <div className="col-sm-12 col-md-6 col-xl-3 d-flex mb-4">
            <div className="card m-3">
                <img src="https://photolari.com/wp-content/uploads/2023/01/asier-lopez-castro.jpg" id="image" className="card-img-top" alt="random image"/>
                <div className="card-body">
                    <h4 className="card-title">Aurora Borealis(Finland)</h4>
                    <p className="card-text">The aurora borealis is caused by the interaction of the Earth's magnetosphere with charged particles from the sun, which create colorful lights in the sky. These lights are often green, pink, purple, and red and can form stunning patterns of swirling lights, arcs, or curtains.</p>
                    <hr className="line"/>
                    <a href="https://www.nationalgeographic.es/ciencia/auroras-boreales-forman-donde-ver" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 d-flex mb-4">
            <div className="card m-3">
                <img src="https://www.bbva.com/wp-content/uploads/2024/07/bbva-la-gran-barrera-de-coral.jpg" id="image" className="card-img-top" alt="random image"/>
                <div className="card-body">
                    <h4 className="card-title">The Great Barrier Reef(Australia)</h4>
                    <p className="card-text">The Great Barrier Reef is the largest reef system in the world and is considered one of the most breathtaking places on the planet. This underwater ecosystem is home to thousands of marine species and is a paradise for diving and snorkeling.</p>
                    <hr className="line"/>
                    <a href="https://youtooproject.com/blog/australia/la-gran-barrera-de-coral-en-australia/" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 d-flex mb-4">
            <div className="card m-3">
                <img src="https://content.r9cdn.net/rimg/dimg/44/3a/24ecb3e4-city-9388-164fb1533df.jpg?width=1366&height=768&xhint=2080&yhint=1728&crop=true" id="image" className="card-img-top" alt="random image"/>
                <div className="card-body">
                    <h4 className="card-title">Banff National Park(Canada)</h4>
                    <p className="card-text">Banff National Park in the Canadian Rockies is famous for the natural beauty of its crystal-clear lakes, such as Lake Louise, and the surrounding mountains. It became Canada's first national park and the third national park refuge in the world.</p>
                    <hr className="line"/>
                    <a href="https://travelingua.es/blog/parque-nacional-banff-canada/" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-md-6 col-xl-3 d-flex mb-4">
            <div className="card m-3">
                <img src="https://plus.unsplash.com/premium_photo-1697729979889-31ec7ecf6f06?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" id="image" className="card-img-top" alt="random image"/>
                <div className="card-body">
                    <h4 className="card-title">Iguazu Falls (Argentina/Brazil)</h4>
                    <p className="card-text">The Iguazu Falls are one of the largest and most majestic waterfalls in the world. This stunning natural landscape is located on the border between Argentina and Brazil and is considered one of the seven natural wonders of the world.</p>
                    <hr className="line"/>
                    <a href="https://www.fundacionaquae.org/wiki/cataratas-del-iguazu/" className="btn btn-primary">Learn More</a>
                </div>
            </div>
        </div>
    </>
    );
}