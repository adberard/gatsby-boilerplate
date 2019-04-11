// Prefetch of font need a css file to merge.
// eslint-disable-next-line
import './src/styles/global.css';

// Smooth Scroll
// eslint-disable-next-line
import Scroll from 'smooth-scroll';
if (typeof window !== 'undefined') {
  // eslint-disable-next-line
  new Scroll('a[href*="#"]', 500);
}

// Redux
// eslint-disable-next-line
import wrapWithProvider from './src/utils/wrap-with-provider';
export const wrapRootElement = wrapWithProvider;
