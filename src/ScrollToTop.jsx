import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();

  useLayoutEffect(() => {
    // Try to find a scroll container by id or class - replace 'scroll-container' if needed
    const scrollContainer =
      document.getElementById("scroll-container") ||
      document.scrollingElement ||
      document.body ||
      document.documentElement;

    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location.pathname]);

  return null;
}
