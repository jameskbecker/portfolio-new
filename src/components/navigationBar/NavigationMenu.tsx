import ThemeToggle from '@/features/themeToggle';
import { StyledNavigationMenu } from './styles';

const NavigationMenu = () => (
  <StyledNavigationMenu>
    <a href="#portfolio">Portfolio</a>
    <a href="#expertise">Expertise</a>
    {/* <a href="#services">Services</a> */}
    <a href="#contact">Contact</a>
    <ThemeToggle />
  </StyledNavigationMenu>
);

export default NavigationMenu;
