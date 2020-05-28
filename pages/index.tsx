import Head from 'next/head';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';
import SkillsSections from '../components/SkillsSection/SkillsSection';
import ProjectsContainer from '../components/containers/ProjectsContainer/ProjectsContainer';
import AboutContainer from '../components/containers/AboutContainer/AboutContainer';
import ContactContainer from '../components/containers/ContactContainer/ContactContainer';
import Footer from '../components/Footer/Footer';

import { getSortedPostsData } from '../lib/posts';

/**
 * Fetches data to display blog posts
 * @param context
 */
// export const getStaticProps: GetStaticProps = async (context) => {
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

/* Serves as a basic wrapper for page content */
const Main = styled.main`
  max-width: 100%;
`;

/* Serves as the main component that gets rendered as the home page 
below line is commented out since post fetching hasnt been fully implemented yet
*/
// const Home: React.FunctionComponent = ({ allPostsData }: any) => {
const Home: React.FunctionComponent = () => {
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
        <ContactContainer />
        <Footer />
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
};

export default Home;
