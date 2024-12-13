import React from "react";

interface UserFilter {
    filter: string;
    setFilter: (filter: string) => void;
}

const UserFilter: React.FC<UserFilter> = ({ filter, setFilter }) => {
    return (
        <div className="mb-6">
            <select
                className="w-full p-2 border rounded"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="All Users">All Users</option>
                <option value="Franco">Franco</option>
                <option value="Frans">Frans</option>
                <option value="Matthew">Matthew</option>
                <option value="Dusty">Dusty</option>
                <option value="Janus">Janus</option>
                <option value="Ivan">Ivan</option>
                <option value="Simone">Simone</option>
            </select>
        </div>
    );
};

export default UserFilter;
