import { useEffect, useRef } from "react";
import { predefinedCSS } from "@/lib/predefined-css";

interface PreviewPaneProps {
  code: string;
}

const PreviewPane = ({ code }: PreviewPaneProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument;
    if (!doc) return;

    doc.open();
    doc.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>${predefinedCSS}</style>
</head>
<body style="padding: 1rem; background: white;">
  ${code}
</body>
</html>`);
    doc.close();
  }, [code]);

  return (
    <iframe
      ref={iframeRef}
      title="Preview"
      className="w-full h-full border-none bg-[white]"
      sandbox="allow-same-origin"
    />
  );
};

export default PreviewPane;
