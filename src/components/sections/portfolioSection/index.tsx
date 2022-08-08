import PortfolioCover from '@/components/sections/portfolioSection/PortfolioCover';
import Gallery from '@/features/gallery';
import screens from '@/screens';
import styled from 'styled-components';

const StyledPortfolioSection = styled.section`
  display: flex;
  flex-direction: column;
  height: 200vh;

  padding: 1.5 0;

  @media only screen and (max-width: ${screens.mobileMax}) {
    height: 100vh;
  }
`;

const PortfolioSection = () => (
  <StyledPortfolioSection id="portfolio">
    <PortfolioCover />
    <Gallery />
  </StyledPortfolioSection>
);

export default PortfolioSection;
