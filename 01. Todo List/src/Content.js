import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Itemlist from "./Itemlist";

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    //React Fragment
    <>
      {items.length ? (
        <Itemlist 
            items = {items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty!</p>
      )}
    </>
  );
};

export default Content;
