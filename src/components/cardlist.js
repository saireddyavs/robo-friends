import React from "react";
import Card from "./card";
import "./cardlist.css"

const CardList = ({ robots }) => {
    // console.log("here in card list", robots)
    return (
        <div className="cen">
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            city={robots[i].address.city}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
