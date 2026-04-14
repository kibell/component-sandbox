import { useState, useCallback } from "react";
import {
  Copy,
  Check,
  ClipboardPaste,
  Code2,
  Eye,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CodeEditor from "@/components/CodeEditor";
import PreviewPane from "@/components/PreviewPane";
import CssReference from "@/components/CssReference";
import {
  composeLockedMarkup,
  defaultCode,
  extractUserContentFromLockedMarkup,
} from "@/lib/predefined-css";
import { toast } from "sonner";

const Index = () => {
  const [code, setCode] = useState(defaultCode);
  const [copied, setCopied] = useState(false);
  const [showReference, setShowReference] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(composeLockedMarkup(code));
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  const handlePaste = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      const extractedContent = extractUserContentFromLockedMarkup(text);
      setCode(extractedContent ?? text);
      toast.success("Pasted from clipboard");
    } catch {
      toast.error("Unable to read clipboard");
    }
  }, []);

  const handleReset = useCallback(() => {
    setCode(defaultCode);
    toast("Reset to default");
  }, []);

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 h-12 bg-toolbar-bg border-b border-border shrink-0">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 text-primary" />
          <h1 className="text-sm font-semibold text-foreground tracking-tight">
            LivePreview IDE
          </h1>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handlePaste}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <ClipboardPaste className="w-3.5 h-3.5" />
            Paste
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? "Copied!" : "Copy"}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setShowReference(!showReference)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              showReference
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            CSS
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* CSS Reference sidebar */}
        <AnimatePresence>
          {showReference && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="border-r border-border bg-card overflow-hidden shrink-0"
            >
              <CssReference />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Editor */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-border">
          <div className="flex items-center px-4 h-9 bg-toolbar-bg border-b border-border shrink-0">
            <div className="flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                index.html
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <CodeEditor value={code} onChange={setCode} />
          </div>
        </div>

        {/* Preview */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex items-center px-4 h-9 bg-toolbar-bg border-b border-border shrink-0">
            <div className="flex items-center gap-2">
              <Eye className="w-3.5 h-3.5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground font-medium">
                Preview
              </span>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <PreviewPane code={code} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
