import { ENV } from "@/config/env";
import { buildS3Url } from "./s3Url";

export const CV_URL = buildS3Url(ENV.bucket, ENV.region, "cv/Mauricio-Munoz-Resume.pdf");
export const CV_NAME = "Mauricio-Munoz-CV.pdf";

export const downloadCV = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    const a = document.createElement("a");
    a.href = CV_URL;
    a.download = CV_NAME;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
}