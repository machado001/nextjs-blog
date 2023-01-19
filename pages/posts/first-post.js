import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <div>
      <Layout>
        <Head>
          <title>First Post TT</title>
        </Head>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() => console.log("script loaded.")}
        />
        <h1>First Post</h1>
        <Link href="/">Return to index.js</Link>
      </Layout>
    </div>
  );
}
