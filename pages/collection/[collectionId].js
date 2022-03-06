import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Collection = () => {
  const router = useRouter();

  console.log(router.query.collectionId);
  return (
    <div>
      <Link href="/">
        <h3>{router.query.collectionId}</h3>
      </Link>
    </div>
  );
};

export default Collection;
