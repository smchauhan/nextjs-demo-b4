"use client";

import Link from "next/link";
import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div>
      <h3>Sidebar Navigation</h3>
      <br />
      <ListGroup>
        <ListGroup.Item>
          <Link href="/category">Category</Link>
        </ListGroup.Item>
        <ListGroup.Item>
          <Link href="/products">Products</Link>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
