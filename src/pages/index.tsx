import React, { useLayoutEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useLayoutEffect(() => {
    const canvas = document.getElementById("canvas");
    console.log(canvas, canvas);
  }, []);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        Index Page
        <canvas id="canvas" />
      </main>
    </Layout>
  );
}
