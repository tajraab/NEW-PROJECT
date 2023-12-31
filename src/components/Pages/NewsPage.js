
import React, { useState, useEffect } from "react";
import axios from "axios";
import News from "../News/News";
function NewsPage() {
    const [coinData, setCoinData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const options = {
          method: "GET",
          url: "https://coinranking1.p.rapidapi.com/coins",
          params: {
            referenceCurrencyUuid: "yhjMzLPhuIDl",
            timePeriod: "24h",
            "tiers[0]": "1",
            orderBy: "marketCap",
            orderDirection: "desc",
            limit: "40",
            offset: "0",
          },
          headers: {
            "X-RapidAPI-Key":
              "39e1231c66msh1e9397f9d922770p1ac01djsn60c7f7bb2519",
            "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
          },
        };
  
        try {
          const response = await axios.request(options);
          setCoinData(response.data.data.coins); // Postavljanje podataka pomoću setCoinData
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    return (
        <div className="wrapper">
        {/* <h1 style = {{color: "white"}}>CRYPTO CURRENCY</h1> */}
        <div className="spacer"></div>
        <div className="coin-container">
          {coinData.map((coin) => <div className="coin"><News key={coin.id} coin={coin} /></div>)}
        </div>
      </div>
    );
  }
//       <div>
//         <h1>NEWS</h1>
//         {coinData.map((coin) => (
//           <News key={coin.id} coin={coin} />
//         ))}
//       </div>
//     );
//   }
  
  export default NewsPage;
  