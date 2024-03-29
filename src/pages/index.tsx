/* Vendor */
import Head from "next/head";

/* Components */
import { Example } from "@/components/Example";

/* Types */
import type { NextPage } from "next";
import { ThemeButton } from "@/components/ThemeHandler/ThemeButton";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Main page title, if you want to set title or other meta tags</title>
    </Head>
    <main>
      <Example>
        <h1>Hello, my friend!</h1>
        <ThemeButton />
      </Example>
    </main>
  </>
);

export default IndexPage;
