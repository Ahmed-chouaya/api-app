import React, {useState, useEffect} from "react";
import axios from "axios";
import User from "../User/User";
import "./UsersList.css";
const UsersList = () => {
  const [Data, setData] = useState([]);
  const GetData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(`Error : ${error}`));
  };

  useEffect(() => {
    GetData();
  });

  return (
    <div className="Users">
      {Data.map((el) => (
        <User key={el.id} user={el} />
      ))}
    </div>
  );
};

export default UsersList;
