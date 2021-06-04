import React, {useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer () {
    const [imageList, setImageList] = useState([]);
    const [onSearch, setSearch] = useState("");

    useEffect(loadData,[]);
    function loadData() {
        let url="https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=9T9wl8iKL9Uz1H4RIfT5kYZZ0eOl1O2k&rating=g";
        fetch(url)
            .then((r) => r.json())
            .then((data) => {
                setImageList([...data.data])
            })
            .catch((e) => {
                console.error("Error: " + e);
            })
    }
    
    function handleFormSubmit(event){
        event.preventDefault();
        event.target.reset();
    }

    function handleChange(event){
        setSearch(event.target.value);
    }

    const imageListToDisplay = imageList.filter((image) => {
        return (image.slug.indexOf(onSearch) >= 0);
    })

    return (
        <div className="container-fluid">
            <div className="row">
                <GifList listToShow={imageListToDisplay} />
                <GifSearch 
                    onFormSubmit={handleFormSubmit}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default GifListContainer;