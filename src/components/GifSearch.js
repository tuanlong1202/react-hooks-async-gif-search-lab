import React from "react";

function GifSearch({onFormSubmit, onChange}){
    return (
        <div className="col-md-4">
            <form onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="search">Enter a Search Term</label>
                    <input type="text" className="form-control" id="search" name="search" placeholder="Search..." onChange={onChange}></input>
                </div>
                <button type="submit" className="btn btn-primary">Find Gifs</button>
            </form>
        </div>
    )
}

export default GifSearch;