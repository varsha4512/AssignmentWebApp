import React, { useEffect, useState } from "react";

import axios from "axios";

const ListView = () => {
  const [resultData, setResultData] = useState([]);

  const [isResult, setIsResult] = useState(false);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((res) => {
        console.log(res.data.data);
        if (res && res.data && Array.isArray(res.data.data)) {
          setResultData(res.data.data);
          setIsResult(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(resultData);
  }, [isResult, resultData]);

  return (
    <div className="scrollMain">
      <div className="scrollableDiv">
        <p>
          <b>List view</b>
        </p>
        {isResult &&
          resultData.map((item, key) => (
            <div className="main" key={key}>
              <div className="sub-container">
                <div className="container">
                  <img src={item.avatar} alt="yegu" />
                </div>
                <p>{item.first_name}</p>
              </div>

              <div className="id">{item.id}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListView;