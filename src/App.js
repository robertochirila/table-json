import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "./components/Table";

const Wrapper = styled.div`
     background: rgb(9, 32, 71);
     height: 100vh;
     overflow: auto;
`;

function App() {
     const [users, setUsers] = useState([]);
     useEffect(() => {
          fetchData();
     }, []);
     const fetchData = () => {
          console.log("fetch data");
          fetch("https://jsonplaceholder.typicode.com/users")
               .then((response) => response.json())
               .then((users) => {
                    setUsers(users);
               });
     };
     return (
          <Wrapper>
               {users.length > 0 ? <Table users={users} /> : <></>}
          </Wrapper>
     );
}

export default App;
