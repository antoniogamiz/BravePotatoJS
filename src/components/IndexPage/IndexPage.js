import React, { Component } from "react";
import Head from "next/head";

import "./IndexPage.css";

function IndexPage({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <link
          rel="icon"
          href="/static/theme/img/cradle.png"
          type="image/x-icon"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <title>MangaCradle</title>
      </Head>
      {children}
    </div>
  );
}

export default IndexPage;
