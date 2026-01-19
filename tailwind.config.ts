import type { Config } from 'tailwindcss';

const tailwindConfig: Config = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
};

export default tailwindConfig;
