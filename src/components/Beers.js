import React from "react";

const Beers = ({ match }) => {
  return <div>{match.params.id}</div>;
};

export default Beers;
