import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import SkillsSections from '../components/SkillsSection/SkillsSection';
import ProjectsContainer from '../components/containers/ProjectsContainer/ProjectsContainer';
import AboutContainer from '../components/containers/AboutContainer/AboutContainer';

import { getSortedPostsData } from '../lib/posts';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async (context) => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

const Main = styled.main`
  max-width: 100%;
`;

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <Main>
        {/* <Layout home> */}
        <Hero />
        <SkillsSections />
        <ProjectsContainer />
        <AboutContainer />
        {/* 
        <section className={utilStyles.headingMd}>…</section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section> */}
        {/* </Layout> */}
      </Main>
    </>
  );
}
