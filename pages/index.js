import React from "react";
import Head from "next/head";
import { BsMoon, BsSun } from "react-icons/bs";
import Wordle from "../components/Wordle";
import Technologies from "../components/Technologies";
export default function Home() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    if (theme === "light")
      document.getElementById("container").classList.remove("dark");
    else document.getElementById("container").classList.add("dark");
  }, [theme]);

  React.useEffect(() => {
    const darkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkTheme) setTheme("dark");
  }, []);

  return (
    <>
      <div id="container" className="container">
        <Head>
          <title>Jesica Halife</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="main">
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
          <div className="description">
            <h1>Hi 👋🏻, I'm Jesica Halife</h1>
            <div className="subtitle">
              <h2>I build</h2>
              <Wordle />
            </div>
            <code className="code">
              fullstack software engineer
            </code>
          </div>
          <section>
            <h4>currently working and focused on &nbsp; 🔭</h4>
            <Technologies />
          </section>
          <div className="mail">
            <a href="https://www.linkedin.com/in/jesica-halife/">Linkedin</a>
            <a href="https://github.com/jessyhalife">Github</a>
            <a href="mailto:halife.jessy@gmail.com">Send me an email</a>
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
