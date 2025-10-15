export const buildS3Url = (bucket, region, key) => {
    return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
}