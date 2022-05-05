import { useEffect, useState } from "react";
import Head from "next/head";
import { BsMoon, BsSun } from "react-icons/bs";
import Wordle from "../components/Wordle";
import Technologies from "../components/Technologies";
import strings from '../strings.json';
import { Mixpanel } from "../mixpanel";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en")
  useEffect(() => {
    if (theme === "light")
      document.getElementById("container").classList.remove("dark");
    else document.getElementById("container").classList.add("dark");
  }, [theme]);

  useEffect(() => {
    Mixpanel.track('Page View');
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme) setTheme("dark");
  }, []);

  function handleLanguageSwitch() {
    Mixpanel.track("Switched language", { lang: lang === "en" ? "es" : "en" });
    setLang(prev => prev === "en" ? "es" : "en")
  }
  return (
    <>
      <div id="container" className="container">
        <Head>
          <title>Jesica Halife</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- Primary Meta Tags --> */}
          <title>Hi 👋🏻 , I'm Jesica Halife</title>
          <meta name="title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta name="description" content="Fullstack software Engineer" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jessyha.life/" />
          <meta property="og:title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta property="og:description" content="Fullstack software Engineer" />
          <meta property="og:image" content="/og-jesica-halife.png" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jessyha.life/" />
          <meta property="twitter:title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta property="twitter:description" content="Fullstack software Engineer" />
          <meta property="twitter:image" content="/og-jesica-halife.png" />
        </Head>
        <main className="main">
          <div className="description">
            <div className="options">
              <button onClick={handleLanguageSwitch} className="language">{lang === "en" ? "ESP" : "ENG"}</button>
              <button
                className="toggleTheme"
                onClick={() =>
                  setTheme((theme) => (theme === "light" ? "dark" : "light"))
                }
              >
                {theme === "light" ? (
                  <BsMoon size={24} color="#121212" />
                ) : (
                  <BsSun size={24} color="whitesmoke" />
                )}
              </button>
            </div>
            <h1>{strings.hi[lang]} 👋🏻 {lang === "en" ? `, ${" "}` : <br />}{strings.Iam[lang]} Jesica Halife</h1>
            <div className="subtitle">
              <h2>{strings.ibuild[lang]}</h2>
              {lang === "en" && <Wordle words={strings.wordleOpts["en"]} word={strings.wordle["en"]} />}
              {lang === "es" && <Wordle words={strings.wordleOpts["es"]} word={strings.wordle["es"]} />}
            </div>
            <code className="code">
              fullstack software engineer
            </code>
          </div>
          <section>
            <h4>{strings.currently[lang]} &nbsp; 🔭</h4>
            <Technologies />
          </section>
          <div className="mail">
            <a onClick={() => Mixpanel.track("Linkedin click")} target="_blank" href="https://www.linkedin.com/in/jesica-halife/">Linkedin</a>
            <a onClick={() => Mixpanel.track("Github click")} href="https://github.com/jessyhalife" target="_blank">Github</a>
            <a onClick={() => Mixpanel.track("Email click")} href="mailto:halife.jessy@gmail.com">{strings.email[lang]}</a>
          </div>
        </main>

        <style jsx>{`
      .subtitle {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
      }
      h1, h4 {
        margin: 0;
      }
      section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
        color: white;
        font-size: 0.875rem;
      }
      
      `}</style>
        <footer>
          <span>Made with ❤️ &nbsp; by @jessyhalife</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </div>

    </>
  );
}
