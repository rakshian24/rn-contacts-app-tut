import {DEV_BASE_URL, PROD_BASE_URL} from '@env';

const devEnvironmentVariables = {
  DEV_BASE_URL,
};

const prodEnvironmentVariables = {
  PROD_BASE_URL,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
