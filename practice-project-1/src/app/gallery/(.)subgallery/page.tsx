import Link from "next/link";
import React from "react";

const InterceptedSubGalleryDashboard = () => {
  return (
    <>
      <div>(.) Intercepted Sub Gallery Dashboard</div>
      <div>
        {" "}
        <Link href={"/gallery-clone"}> Clone Gallery</Link>
      </div>
    </>
  );
};

export default InterceptedSubGalleryDashboard;
