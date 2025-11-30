import { ENV } from './../config/env';

const API_HEADERS = {
    "x-api-key": ENV.apiKey
};

const API_BASE_URL = `https://${ENV.apiId}.execute-api.${ENV.apiRegion}.amazonaws.com/${ENV.apiStage}`;

export {
    API_BASE_URL,
    API_HEADERS
};