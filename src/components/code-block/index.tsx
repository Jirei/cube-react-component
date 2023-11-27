import { Highlight, themes } from "prism-react-renderer";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
export default function CodeBlock({ code }: { code: string }) {
  const [_copiedText, copyToClipboard] = useCopyToClipboard();
  const [hasBeenCopied, setHasBeenCopied] = useState(false);
  return (
    <div className="relative">
      <div className="absolute flex gap-x-2 top-4 right-4 ">
        {hasBeenCopied && <FaCircleCheck size="1.5em" color="lightgreen" />}
        <FaCopy
          className="hover:scale-110 hover:cursor-pointer"
          size="1.5em"
          color="white"
          title="Copy the code"
          onClick={() => {
            void (async () => {
              try {
                await copyToClipboard(code);
                setHasBeenCopied(true);
                setTimeout(() => setHasBeenCopied(false), 2000);
              } catch (e) {
                alert(
                  "Couldn't copy the code into your clipboard: " + String(e),
                );
              }
            })();
          }}
        />
      </div>
      <Highlight theme={themes.palenight} code={code} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            style={style}
            className={
              className + " " + "p-5 rounded max-w-[90vw] overflow-auto"
            }
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
