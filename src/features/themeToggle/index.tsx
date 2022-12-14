import { toggleTheme } from '@/features/themeToggle/themeToggleSlice';
import { motion, useAnimationControls } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVariants } from './animations';
import { StyledAdjustIcon } from './styles';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const controls = useAnimationControls();
  const { isDark } = useSelector((state: any) => state.theme);

  const handleClick = () => {
    controls.start(!isDark ? 'dark' : 'light');
    dispatch(toggleTheme());
  };

  const handleHover = () => {
    controls.start(isDark ? 'hoverDark' : 'hover');
  };

  const handleHoverEnd = () => {
    controls.start(isDark ? 'dark' : 'light');
  };

  return (
    <motion.div
      initial="light"
      animate={controls}
      variants={toggleVariants}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      style={{ height: '1em' }}
    >
      <StyledAdjustIcon />
    </motion.div>
  );
};

export default ThemeToggle;
