import Head from "next/head";
import React, { useEffect, useState } from "react";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { Mixpanel } from "../mixpanel";
import strings from "../strings.json";

export default function Home() {
  const [theme, setTheme] = useState("light");
  const [lang] = useState("en");
  useEffect(() => {
    if (theme === "light") {
      document.getElementById("container").classList.remove("dark");
    } else document.getElementById("container").classList.add("dark");
  }, [theme]);

  useEffect(() => {
    Mixpanel.track("Page View");
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme) setTheme("dark");
  }, []);

  return (
    <>
      <div id="container" className="container">
        <Head>
          <title>Jesica Halife</title>
          <link rel="icon" href="/favicon.ico" />
          {/* <!-- Primary Meta Tags --> */}
          <title>Hi 👋🏻 , I&apos;m Jesica Halife</title>
          <meta name="title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta name="description" content="Fullstack software Engineer" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jessyha.life/" />
          <meta property="og:title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta
            property="og:description"
            content="Fullstack software Engineer"
          />
          <meta
            property="og:image"
            content="https://i.postimg.cc/HxD04pm7/og-jesica-halife.png"
          />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jessyha.life/" />
          <meta property="twitter:title" content="Hi 👋🏻 , I'm Jesica Halife" />
          <meta
            property="twitter:description"
            content="Fullstack software Engineer"
          />
          <meta
            property="twitter:image"
            content="https://i.postimg.cc/HxD04pm7/og-jesica-halife.png"
          />
        </Head>
        <main className="main">
          <div className="description">
            <div className="options">
              {/* <button onClick={handleLanguageSwitch} className="language">{lang === 'en' ? 'ESP' : 'ENG'}</button> */}
              <button
                className="toggleTheme"
                onClick={() =>
                  setTheme((theme) => (theme === "light" ? "dark" : "light"))
                }
              >
                {theme === "light" ? (
                  <HiLightBulb size={24} color="#121212" />
                ) : (
                  <HiOutlineLightBulb size={24} color="whitesmoke" />
                )}
              </button>
            </div>
            <h1>TL;DR 👋🏻 </h1>
            <h2>{strings.Iam[lang]} Jesica Halife</h2>
            <p>fullstack software engineer</p>
            <small>+15 years 👵🏻</small>
            <div className="now">
              <span className="currently">now</span>
              <div>
                <b>Development Specialist</b> <i>@</i>{" "}
                <a href="https://aerolab.us" target="_blank">
                  <span className="aerolab">aerolab</span>
                </a>
              </div>
            </div>
            <small>
              when coding, <s>javascript</s> typescript 🤍
            </small>
          </div>
          <div className="stalkme">
            <p>Reach me or stalk me 👀</p>
          </div>
          <div className="mail">
            <a
              onClick={() => Mixpanel.track("Linkedin click")}
              target="_blank"
              href="https://www.linkedin.com/in/jesica-halife/"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              onClick={() => Mixpanel.track("Github click")}
              href="https://github.com/jessyhalife"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              onClick={() => Mixpanel.track("Email click")}
              href="mailto:halife.jessy@gmail.com"
            >
              {strings.email[lang]}
            </a>
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
          h1,
          h4 {
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
          <span>Made with ❤️&nbsp;by @jessyhalife</span>
          <span>{new Date().getFullYear()}</span>
        </footer>
      </div>
    </>
  );
}
