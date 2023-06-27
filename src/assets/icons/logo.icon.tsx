import { IconProps } from '../../types/icon.types';

export const LogoIcon = ({ width = 151, height = 55, className = '' }: IconProps) => {
  return (
    <svg fill="none" viewBox="0 0 151 55" height={height} width={width} xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M57.6035 54.1387L87.0535 0.861328H93.2029L63.7529 54.1387H57.6035Z" fill="#BAA182" />
      <path
        d="M7.9621 47.3592C2.67727 42.2468 0 35.7451 0 27.757C0 19.6855 2.67728 13.045 8.10155 7.8631C13.5258 2.59788 20.0377 0 27.707 0C32.5596 0 37.0356 1.08361 41.1631 3.25082C45.2906 5.41803 48.5396 8.2243 50.7846 11.753L45.7228 15.8651C41.4559 10.0998 35.0835 6.48775 27.7767 6.48775C21.9202 6.48775 16.9979 8.50215 12.9402 12.5448C8.88243 16.5875 6.86052 21.6999 6.86052 27.8265C6.86052 33.8836 8.8127 38.857 12.7868 42.7469C16.7609 46.6368 21.7668 48.5817 27.6931 48.5817C35.2229 48.5817 41.2886 45.4837 46.0017 39.3572L50.924 43.4693C45.932 50.3877 37.2448 55 27.4839 55C19.8286 55 13.3167 52.4716 7.9621 47.3592Z"
        fill="#27262A"
      />
      <path
        d="M122.709 55C112.948 55 104.261 50.3877 99.2686 43.4693L104.191 39.3572C108.89 45.4837 114.97 48.5817 122.499 48.5817C128.426 48.5817 133.432 46.6368 137.406 42.7469C141.38 38.857 143.332 33.8836 143.332 27.8265C143.332 21.6999 141.31 16.5736 137.252 12.5448C133.195 8.50215 128.286 6.48775 122.416 6.48775C115.109 6.48775 108.737 10.0859 104.47 15.8651L99.408 11.753C101.653 8.2243 104.902 5.40414 109.029 3.25082C113.157 1.08361 117.647 0 122.486 0C130.155 0 136.667 2.59788 142.091 7.8631C147.515 13.0589 150.193 19.6855 150.193 27.757C150.193 35.759 147.515 42.2468 142.23 47.3592C136.89 52.4716 130.378 55 122.709 55Z"
        fill="#27262A"
      />
    </svg>
  );
};