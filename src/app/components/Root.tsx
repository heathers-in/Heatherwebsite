import { useEffect, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { getWorkProjectDocumentTitle } from "../data/workProjects";

const SITE_TITLE = "Heather Sinclair";

function documentTitleForPath(pathname: string): string {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return SITE_TITLE;

  const projectMatch = path.match(/^\/work\/projects\/([^/]+)$/);
  if (projectMatch) {
    const title = getWorkProjectDocumentTitle(projectMatch[1]);
    if (title) return `${SITE_TITLE} - ${title}`;
  }

  const segment = path.slice(1).split("/")[0];
  switch (segment) {
    case "work":
      return `${SITE_TITLE} - Work`;
    case "interactive-cv":
      return `${SITE_TITLE} - Interactive CV`;
    case "cv":
      return `${SITE_TITLE} - CV`;
    case "personal":
      return `${SITE_TITLE} - Personal`;
    default:
      return `${SITE_TITLE} - Not Found`;
  }
}

export function Root() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.title = documentTitleForPath(pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Outlet />
    </div>
  );
}
