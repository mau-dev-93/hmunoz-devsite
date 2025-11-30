export const ENV = {
    bucket: import.meta.env.VITE_S3_BUCKET,
    region: import.meta.env.VITE_S3_REGION,
    mode: import.meta.env.MODE,
    apiId: import.meta.env.VITE_API_ID,
    apiRegion: import.meta.env.VITE_API_REGION,
    apiStage: import.meta.env.VITE_API_STAGE,
    apiKey: import.meta.env.VITE_API_KEY,
};