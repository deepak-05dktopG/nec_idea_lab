import React from 'react';

const TeamCard = ({ name, role, image }) => {
    return (
        <div className="card h-100 shadow-sm">
            <img src={image || 'https://via.placeholder.com/150'} className="card-img-top" alt={name} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-muted">{role}</p>
            </div>
        </div>
    );
};

export default TeamCard;
