import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [rating, setRating] = useState(0);

    const handleFilter = () => {
        onFilter(rating);
    };

    return (
        <div className="filter mb-4">
            <input
                type="number"
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                min="0"
                max="5"
                placeholder="Filter by rating"
            />
            <button onClick={handleFilter} className="btn btn-outline-secondary mt-2">
                <img src="/path/to/filter-icon.png" alt="Filters" /> Filters
            </button>
        </div>
    );
};

export default Filter;
