'use client'
import React, { useState } from 'react';
import '../styles/FilterSidebar.css';

const FilterSidebar = () => {
    const filters = ['all', 'designable', 'designed', 'blank'];
    const [selectedFilter, setSelectedFilter] = useState('all');

    // Function to handle filter changes
    const handleFilterChange = (name) => {
        setSelectedFilter(name);
    };

    return (

        <>
            <div className="filterSidebar">
                <h2>Categories</h2>
                {filters.map((filter, index) => (
                    <div className="filterSidebarOptions" key={index}>
                        <label>
                            <input
                                type="checkbox"
                                name={filter}
                                checked={selectedFilter === filter}
                                onChange={() => handleFilterChange(filter)}
                            />
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </label>
                    </div>
                ))}
            </div>
        </>

    );
};

export default FilterSidebar;

