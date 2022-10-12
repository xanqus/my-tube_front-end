import React, { useEffect } from "react";
import Layout from "../layouts/Layout";

const About = () => {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await axios.get("https://api.coinpaprika.com/v1/tickers");
  //     setCoins(data.data);
  //   };
  //   getData();
  // }, []);
  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);
  return (
    <Layout>
      <div>
        <h2>About</h2>
        {/* <ul>
          {coins.map((coin, index) => {
            return <li key={index}>{coin.id}</li>;
          })}
        </ul> */}
      </div>
    </Layout>
  );
};

export default About;
