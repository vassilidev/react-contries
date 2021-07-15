import React from 'react';
import NumberFormat from "react-number-format";

const Card = (props) => {
    const {country} = props;

    return (
        <li className="card">
            <img src={country.flag} alt={country.name}/>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>
                        Pop. <NumberFormat value={country.population}
                                           thousandSeparator=" "
                                           displayType="text"/>
                    </li>
                </ul>
            </div>
        </li>
    );
};

export default Card;
