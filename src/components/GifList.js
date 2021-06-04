import React from "react";

function GifList({listToShow}) {
    const list = listToShow.map((item, index) => {
        return (index < 3) ? <li key={index}><img src={item.images.original.url} alt={item.title} /></li> : null ;
    })
    return (
        <div className="col-md-8">
            <ul>
                {list}
            </ul>
        </div>
    )
}

export default GifList;