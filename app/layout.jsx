export const dynamic = "force-dynamic";
import Head from "next/head";
import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Next Prompt",
  description: "The best place to find prompts for your next project",
  image: "/assets/images/logo.svg",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
      </Head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Rootlayout;
