import React from "react";
import Link from "next/link";
import { TNavProp } from "@/common/types/TNav";
import NavItem from "./NavItem";

const Nav = (prop: TNavProp) => {
    const { title, data } = prop || {};
    return (
        <div className="container position-sticky z-index-sticky top-0">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
                        <div className="container-fluid px-0">
                            <Link href="/">
                                <a className="navbar-brand font-weight-bolder ms-sm-3">{title}</a>
                            </Link>
                            <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon mt-2">
                                    <span className="navbar-toggler-bar bar1"></span>
                                    <span className="navbar-toggler-bar bar2"></span>
                                    <span className="navbar-toggler-bar bar3"></span>
                                </span>
                            </button>
                            <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0 w-100" id="navigation">
                                <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
                                    {(data || []).map((item, itemIndex) =>
                                        <NavItem key={itemIndex} {...item} level={0} />
                                    )}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Nav;