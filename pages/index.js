import React from "react";
import Head from "next/head";
import { BsMoon, BsSun } from "react-icons/bs";
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
        <p className="description">
          <h1>Hi 👋🏻, I'm Jesica Halife</h1>
          <h2>
            I build <span className="marker">things.</span>
          </h2>
          <code className="code">
            Software Engineer, 10+ years of experience
          </code>
        </p>
        <div>
          <div className="contact">
            <a href="https://www.linkedin.com/in/jesica-halife/">Linkedin</a>
            <a href="https://github.com/jessyhalife">Github</a>
          </div>
          <h3 className="mail">
            or reach me at{" "}
            <a href="mailto:halife.jessy@gmail.com">halife.jessy@gmail.com</a>{" "}
            🚀
          </h3>
        </div>
      </main>
    </div>
  );
}
