import { useEffect, useState } from "react";
import Head from "next/head";
import { BsMoon, BsSun } from "react-icons/bs";
import Wordle from "../components/Wordle";
import Technologies from "../components/Technologies";
import strings from '../strings.json';
import { Mixpanel } from "../mixpanel";
import Image from 'next/image';

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("en")
  useEffect(() => {
    if (theme === "light")
      document.querySelector("body").classList.remove("dark");
    else document.querySelector("body").classList.add("dark");
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
      <Head>
        <title>Jesica Halife</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container">
        <header>
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
        </header>
        <main>
          <section>
            <h1>{strings.hi[lang]}<br />{strings.Iam[lang]} Jesica Halife</h1>
            <div className="wordle">
              <h2>{strings.ibuild[lang]}</h2>
              {lang === "en" && <Wordle words={strings.wordleOpts["en"]} word={strings.wordle["en"]} />}
              {lang === "es" && <Wordle words={strings.wordleOpts["es"]} word={strings.wordle["es"]} />}
            </div>
          </section>
          <code>
            {`{/* fullstack software engineer */}`}
          </code>
          <h4>{strings.currently[lang]} &nbsp; 🔭</h4>
          <Technologies />

          <address>
            <p>Let's get in touch</p>
            <section>
              <a onClick={() => Mixpanel.track("Linkedin click")} target="_blank" href="https://www.linkedin.com/in/jesica-halife/">
                Linkedin
              </a>
              <a onClick={() => Mixpanel.track("Github click")} href="https://github.com/jessyhalife" target="_blank">
                Github
              </a>
              <a onClick={() => Mixpanel.track("Email click")} href="mailto:halife.jessy@gmail.com">{strings.email[lang]}</a>
            </section>
          </address>

        </main>
        <footer>
          <span>Made with ❤️ &nbsp; by @jessyhalife</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
        {/* <style jsx>{`
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
      
      `}</style> */}
      </div>

    </>
  );
}
