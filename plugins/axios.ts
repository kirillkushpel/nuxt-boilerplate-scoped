import { Plugin } from '@nuxt/types';
import { AxiosRequestConfig } from 'axios';
import { generateUnixTimestamp } from '~/shared/utils/generate-timestamp';

const axiosPlugin: Plugin = (context) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  context.$axios.onRequest(config => {
    config.params = { t: generateUnixTimestamp() };
    return config as AxiosRequestConfig;
  });
};

export default axiosPlugin;
