import React from "react";

export default function Link(props) {
  return (
    <li>
      {props.link.slug}
      <br />
      {props.link.description}
      <br />
      {props.link.link}
    </li>
  );
}
