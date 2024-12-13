import React from "react";

interface FilterProps {
    filter: string;
    setFilter: (filter: string) => void;
}

const CategoryFilter: React.FC<FilterProps> = ({ filter, setFilter }) => {
    return (
        <div className="mb-6">
            <select
                className="w-full p-2 border rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="All Categories">All Categories</option>
                <option value="Software">Software</option>
                <option value="Hardware">Hardware</option>
                <option value="Process Tools">Process Tools</option>
                <option value="Network">Network</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Office">Office</option>
            </select>
        </div>
    );
};

export default CategoryFilter;
