// Example of intercepting routes
import Link from "next/link";
import React from "react";

const GalleryDashboard = () => {
  return (
    <>
      <div>Gallery Dashboard</div>
      <div>
        <Link href={"/gallery/subgallery"}>Sub Gallery</Link>
      </div>
      <div>
        <Link href={"/gallery-clone"}>Clone Gallery</Link>
      </div>
    </>
  );
};

export default GalleryDashboard;
