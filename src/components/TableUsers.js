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
     -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
     -moz-animation: fadein 1s; /* Firefox < 16 */
     -ms-animation: fadein 1s; /* Internet Explorer */
     -o-animation: fadein 1s; /* Opera < 12.1 */
     animation: fadein 1s;
     @keyframes fadein {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-moz-keyframes fadein {
          /* Firefox */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-webkit-keyframes fadein {
          /* Safari and Chrome */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-o-keyframes fadein {
          /* Opera */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
`;

const Cell = styled.td`
     transition: 0.5s all;
     padding: 20px;
     text-align: left;
     background: rgb(11, 70, 140);
     -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
     -moz-animation: fadein 4s; /* Firefox < 16 */
     -ms-animation: fadein 4s; /* Internet Explorer */
     -o-animation: fadein 4s; /* Opera < 12.1 */
     animation: fadein 4s;
     @keyframes fadein {
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-moz-keyframes fadein {
          /* Firefox */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-webkit-keyframes fadein {
          /* Safari and Chrome */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     @-o-keyframes fadein {
          /* Opera */
          from {
               opacity: 0;
          }
          to {
               opacity: 1;
          }
     }
     &:hover {
          opacity: 0.5;
     }
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
