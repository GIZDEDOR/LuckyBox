import { useEffect, useState } from "react";
import {TG, request } from "../api/requests";
import Luckyboxes from "./Luckyboxes";

function App() {
  const [user, setUser] = useState({
    id: 0,
    username: "Unknown",
    luckyboxes: 1,
    balance: 0,
  });

  useEffect(() => {
      TG.expand();

    async function fetchData() {
        const response = await request("user");
          setUser(response);
        }
        fetchData();
    }, []);

  return (
    <>
      <Luckyboxes data={user} setUser={setUser} />
    </>
  );
}

export default App;