import React, { useEffect, useState } from "react";
import img from "../assets/images/error.jpg";

export default function NotFound() {
  const [first, setfirst] = useState("");
  useEffect(() => {}, []);

  return (
    <>
      <div className="container flex justify-center items-center my-[77px]">
        <img className="w-1/2" src={img} alt="404 image" />
      </div>
    </>
  );
}
