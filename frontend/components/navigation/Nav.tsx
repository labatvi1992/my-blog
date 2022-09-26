import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TNavProp } from "@/common/types/TNav";
import NavItem from "./NavItem";

const Nav = (prop: TNavProp) => {
  const { t } = useTranslation("common", { useSuspense: false });
  const { title } = prop || {};
  const translateOps = "/";
  const homeUrl = t("HomeUrl", translateOps);
  return (
    <div className="container position-sticky z-index-sticky top-0">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg blur blur-rounded top-0 z-index-3 shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
            <div className="container-fluid px-0">
              <Link href={homeUrl}>
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
                  <NavItem id={0} name={t("Home")} slug={homeUrl} />
                  <NavItem id={1} name={t("About")} slug={t("AboutUrl", translateOps)} />
                  <NavItem id={2} name={t("Blog")} slug={t("BlogUrl", translateOps)} />
                  <NavItem id={3} name={t("Store")} slug={t("StoreUrl", translateOps)} />
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