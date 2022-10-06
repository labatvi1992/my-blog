import React from "react";
import Link from "next/link";
import { TNavItem } from "@/common/types/TNav";

const NavLeafItem = (prop: TNavItem) => {
  const { name, slug } = prop || {};

  return (
    <Link href={slug}>
      <a className="dropdown-item ps-3 border-radius-md mb-1">
        {name}
      </a>
    </Link>
  );
};

export default NavLeafItem;