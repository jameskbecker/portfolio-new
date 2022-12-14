import NavigationBar from '@/components/navigationBar';
import ContactSection from '@/components/sections/contactSection';
import HeroSection from '@/components/sections/heroSection';
import PortfolioSection from '@/components/sections/portfolioSection';
import SkillsSection from '@/components/sections/skillsSection';
import GlobalStyles from '@/GlobalStyles';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0;

  overflow: hidden;
`;

const Home: NextPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <StyledHome>
      <Head>
        <title>James K. Becker</title>
        <meta name="description" content="My personal portfolio website" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, minimum-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="James's Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jameskbecker.com" />
        <meta
          property="og:image"
          content="https://www.jameskbecker.com/thumbnail.jpeg"
        />
        <meta
          property="og:description"
          content="A full-stack developer specialising in frontend."
        />
        <meta name="theme-color" content={theme.navigation}></meta>
      </Head>
      <GlobalStyles />
      <NavigationBar logoText="James K. Becker" />
      <HeroSection />
      <PortfolioSection />
      <SkillsSection />
      <ContactSection />
    </StyledHome>
  );
};

export default Home;
