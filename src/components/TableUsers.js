import React from "react";
import styled from "styled-components";

const Table = styled.table`
     width: 100%;
`;

const Row = styled.tr``;

const Head = styled.th`
     text-align: left;
     padding: 10px;
     text-transform: uppercase;
`;

const Cell = styled.td`
     padding: 20px;
     text-align: left;
     background: rgb(11, 70, 140);
`;

const THead = styled.thead``;

const TBody = styled.tbody``;
const TableUsers = (props) => {
     const { users } = props;
     return (
          <Table>
               <THead>
                    <Row>
                         <Head>Name</Head>
                         <Head>Email</Head>
                         <Head>Company</Head>
                         <Head>Username</Head>
                    </Row>
               </THead>
               <TBody>
                    {users.map((user, index) => {
                         return (
                              <Row key={index}>
                                   <Cell>{user.name}</Cell>
                                   <Cell>{user.email}</Cell>
                                   <Cell>{user.company.name}</Cell>
                                   <Cell>{user.username}</Cell>
                              </Row>
                         );
                    })}
               </TBody>
          </Table>
     );
};

export default TableUsers;
