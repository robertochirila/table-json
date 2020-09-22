import React from "react";

const Table = (props) => {
     const { users } = props;
     return (
          <div>
               {users.map((user, index) => {
                    console.log(user);
               })}
          </div>
     );
};

export default Table;
