import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          私の名前はぼ寿司です。渋谷のスタートアップ企業でフロントエンドエンジニアとして働いています。React.jsを得意とするエンジニアになります。直近のプロジェクトでFlutterを使ったアプリ開発も予定しております。お見知り置きを。
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="/posts/first-post">
          <a>POSt</a>
        </Link>
      </section>
    </Layout>
  );
}
