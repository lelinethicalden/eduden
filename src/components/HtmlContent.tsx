import DOMPurify from "isomorphic-dompurify";

// Keep inline `style` (so text color etc. from the source survives) but
// strip any background declarations, since API content backgrounds clash
// with our own card/section backgrounds.
DOMPurify.addHook("uponSanitizeAttribute", (_node, data) => {
  if (data.attrName === "style") {
    data.attrValue = data.attrValue
      .split(";")
      .filter((decl) => !/^\s*background(-color)?\s*:/i.test(decl))
      .join(";");
  }
});

export default function HtmlContent({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const clean = DOMPurify.sanitize(html, {
    FORBID_ATTR: ["class", "id", "border", "bgcolor", "align", "width", "height"],
    FORBID_TAGS: ["hr"],
  });
  return <div className={className} dangerouslySetInnerHTML={{ __html: clean }} />;
}
