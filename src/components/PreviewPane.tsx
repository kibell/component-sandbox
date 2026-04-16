import { useEffect, useRef } from "react";
import { buildPreviewDocument } from "@/lib/predefined-css";

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

    const previewDocument = buildPreviewDocument(code);

    doc.open();
    doc.write(previewDocument);
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
