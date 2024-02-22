import React from "react";

function NetWorth(props) {

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
      <div>
        <h1>{USDollar.format(props.netWorth.total_networth_usd)}</h1>
      </div>
    );
  }

export default NetWorth;
