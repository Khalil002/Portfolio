import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [far, setFar] = useState(false);

  // the back-to-top button appears once you are a screen down; it reads `.site[data-far]`
  useEffect(() => {
    const onScroll = () => setFar(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.querySelector(".site")?.setAttribute("data-far", far ? "1" : "0");
  }, [far]);

  return (
    <>
      <a className="totop" href="#top" aria-label={t.misc.backToTop}>
        <span aria-hidden="true">↑</span>
      </a>
      <footer className="foot">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>{t.footer}</span>
          <span className="foot__credit" dir="ltr">
            Design adapted from{" "}
            <a href="https://aahil-khan.xyz" target="_blank" rel="noopener noreferrer">
              aahil-khan.xyz
            </a>{" "}
            (
            <a href="https://github.com/aahil-khan/portfolio-canvas" target="_blank" rel="noopener noreferrer">
              MIT
            </a>
            ).
          </span>
        </div>
      </footer>
    </>
  );
}
