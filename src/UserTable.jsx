import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Size</th>
        <th>Color</th>
        <th>Accessories</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((order) => (
          <tr key={order.id}>
            <td>{order.name}</td>
            <td>{order.email}</td>
            <td>{order.size}</td>
            <td>{order.color}</td>
            <td>{order.accessories.join(", ")}</td>
            <td>{order.customNote}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={6}>No orders</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;