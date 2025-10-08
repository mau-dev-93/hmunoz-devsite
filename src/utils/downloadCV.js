export const CV_URL = "https://personal-mauricio.s3.us-east-1.amazonaws.com/Mauricio-Munoz-Resume-202509.pdf";
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