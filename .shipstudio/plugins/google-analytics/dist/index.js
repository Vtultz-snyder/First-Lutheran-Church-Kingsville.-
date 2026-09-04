import { jsx, jsxs, Fragment } from "data:text/javascript,export const jsx=window.__SHIPSTUDIO_REACT__.createElement;export const jsxs=window.__SHIPSTUDIO_REACT__.createElement;export const Fragment=window.__SHIPSTUDIO_REACT__.Fragment;";
import { useState, useRef, useEffect, useCallback } from "data:text/javascript,export default window.__SHIPSTUDIO_REACT__;export const useState=window.__SHIPSTUDIO_REACT__.useState;export const useEffect=window.__SHIPSTUDIO_REACT__.useEffect;export const useCallback=window.__SHIPSTUDIO_REACT__.useCallback;export const useMemo=window.__SHIPSTUDIO_REACT__.useMemo;export const useRef=window.__SHIPSTUDIO_REACT__.useRef;export const useContext=window.__SHIPSTUDIO_REACT__.useContext;export const createElement=window.__SHIPSTUDIO_REACT__.createElement;export const Fragment=window.__SHIPSTUDIO_REACT__.Fragment;";
const _w = window;
function usePluginContextMaybe() {
  const React = _w.__SHIPSTUDIO_REACT__;
  const CtxRef = _w.__SHIPSTUDIO_PLUGIN_CONTEXT_REF__;
  if (CtxRef && (React == null ? void 0 : React.useContext)) {
    const ctx = React.useContext(CtxRef);
    if (ctx) return ctx;
  }
  const directCtx = _w.__SHIPSTUDIO_PLUGIN_CONTEXT__;
  if (directCtx) return directCtx;
  return null;
}
const GA_STYLE_ID = "ga-plugin-styles";
const GA_CSS = `
@keyframes gaPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.ga-pulsing {
  animation: gaPulse 1.5s ease-in-out infinite;
}

/* Dropdown */
.ga-dropdown-wrapper {
  position: relative;
}

.ga-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  padding-top: 4px;
  z-index: 100;
}

.ga-dropdown-inner {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 4px;
  min-width: 200px;
  max-width: 320px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.ga-dropdown-inner button {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 10px 12px;
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  border-radius: 6px;
  text-align: left;
  font-family: inherit;
}

.ga-dropdown-inner button:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.ga-dropdown-inner button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.ga-dropdown-inner button svg {
  flex-shrink: 0;
  opacity: 0.5;
}

.ga-dropdown-inner button:hover svg {
  opacity: 1;
}

.ga-site-url {
  flex: 1;
  min-width: 0;
  font-family: monospace;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ga-dropdown-divider {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}

.ga-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.ga-badge-live {
  color: rgba(74, 222, 128, 0.9);
  background: rgba(74, 222, 128, 0.12);
}

.ga-badge-dash {
  color: rgba(251, 191, 36, 0.9);
  background: rgba(251, 191, 36, 0.12);
}

/* Dropdown action items (smaller, muted) */
.ga-dropdown-action {
  color: var(--text-muted) !important;
  font-size: 12px !important;
  padding: 8px 12px !important;
  gap: 6px !important;
}

.ga-dropdown-action:hover {
  color: var(--text-secondary) !important;
}

.ga-dropdown-action svg {
  opacity: 0.6;
}

.ga-dropdown-action:hover svg {
  opacity: 1;
}

.ga-dropdown-action.ga-action-danger:hover {
  color: var(--error, #ef4444) !important;
}

.ga-dropdown-action.ga-action-danger:hover svg {
  color: var(--error, #ef4444);
}

.ga-active-users-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 12px;
  color: var(--text-secondary);
}

.ga-active-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #4CAF50;
  animation: gaPulse 2s ease-in-out infinite;
}

/* Modal */
.ga-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.ga-modal {
  width: 480px;
  max-height: 85vh;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.ga-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 600;
}

.ga-close-btn {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 14px;
  padding: 2px 4px;
  opacity: 0.4;
  line-height: 1;
}

.ga-close-btn:hover {
  opacity: 0.8;
}

.ga-modal-body {
  padding: 12px 16px;
  overflow-y: auto;
  font-size: 13px;
  line-height: 1.4;
}

.ga-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px;
}

/* Tabs */
.ga-tabs {
  display: flex;
  padding: 2px;
  margin-bottom: 14px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
}

.ga-tab {
  flex: 1;
  padding: 5px 0;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  background: transparent;
  color: inherit;
  opacity: 0.4;
  border-radius: 4px;
  font-family: inherit;
  transition: opacity 0.12s, background 0.12s;
}

.ga-tab:hover {
  opacity: 0.6;
}

.ga-tab.ga-tab-active {
  opacity: 1;
  background: rgba(255, 255, 255, 0.08);
}

/* Form */
.ga-form-group {
  margin-bottom: 12px;
}

.ga-form-group:last-child {
  margin-bottom: 0;
}

.ga-form-label {
  display: block;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  margin-bottom: 4px;
  opacity: 0.4;
}

.ga-form-input {
  width: 100%;
  padding: 6px 8px;
  border-radius: 5px;
  border: 1px solid;
  font-size: 12px;
  background: transparent;
  color: inherit;
  outline: none;
  box-sizing: border-box;
  font-family: inherit;
}

.ga-form-input::placeholder {
  opacity: 0.25;
}

.ga-form-input:focus {
  border-color: #F57C00;
}

.ga-form-hint {
  font-size: 10px;
  margin-top: 3px;
  opacity: 0.3;
}

.ga-error-box {
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 12px;
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.ga-success-box {
  padding: 8px 10px;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 12px;
  background: rgba(76, 175, 80, 0.1);
  color: #4CAF50;
  border: 1px solid rgba(76, 175, 80, 0.2);
}

/* Buttons */
.ga-btn {
  padding: 7px 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 500;
  font-family: inherit;
  transition: opacity 0.12s;
}

.ga-btn:hover {
  filter: brightness(0.9);
}

.ga-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.ga-btn-primary {
  background: #F57C00;
  color: #fff;
}

.ga-btn-secondary {
  background: var(--bg-tertiary, rgba(255,255,255,0.08));
  color: inherit;
}

.ga-spinner {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: gaSpin 0.6s linear infinite;
  margin-right: 6px;
}

@keyframes gaSpin {
  to { transform: rotate(360deg); }
}

/* Metrics grid */
.ga-metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 16px;
}

.ga-metric-card {
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.ga-metric-value {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 2px;
}

.ga-metric-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.5;
}

/* Top pages table */
.ga-top-pages {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.ga-top-pages th {
  text-align: left;
  padding: 6px 8px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.4;
  font-weight: 500;
}

.ga-top-pages td {
  padding: 5px 8px;
}

.ga-top-pages tr + tr td {
  border-top: 1px solid;
}

/* Framework detection */
.ga-framework-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 500;
  background: rgba(245, 124, 0, 0.1);
  color: #F57C00;
}

.ga-section {
  margin-bottom: 14px;
}

.ga-section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  opacity: 0.4;
}

.ga-hint-link {
  color: #F57C00;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background: none;
  font: inherit;
  font-size: 10px;
  padding: 0;
  opacity: 0.8;
}

.ga-hint-link:hover {
  opacity: 1;
  text-decoration: underline;
}
`;
function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById(GA_STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = GA_STYLE_ID;
    style.textContent = GA_CSS;
    document.head.appendChild(style);
    return () => {
      var _a;
      (_a = document.getElementById(GA_STYLE_ID)) == null ? void 0 : _a.remove();
    };
  }, []);
}
function GAIcon({ size = 14 }) {
  return /* @__PURE__ */ jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M22.844 11.35l-4.476-7.734a2.24 2.24 0 00-1.94-1.116H7.572a2.24 2.24 0 00-1.94 1.116L1.156 11.35a2.22 2.22 0 000 2.24l4.476 7.734a2.24 2.24 0 001.94 1.116h8.856a2.24 2.24 0 001.94-1.116l4.476-7.734a2.22 2.22 0 000-2.24zM12 16.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" }) });
}
function ExternalLinkIcon({ size = 12 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] });
}
function ChartIcon({ size = 14 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "20", x2: "18", y2: "10" }),
    /* @__PURE__ */ jsx("line", { x1: "12", y1: "20", x2: "12", y2: "4" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "20", x2: "6", y2: "14" })
  ] });
}
function SettingsIcon({ size = 14 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsx("path", { d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" })
  ] });
}
function CodeIcon({ size = 14 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("polyline", { points: "16 18 22 12 16 6" }),
    /* @__PURE__ */ jsx("polyline", { points: "8 6 2 12 8 18" })
  ] });
}
async function detectFramework(shell) {
  let pkgJson = "";
  try {
    const result = await shell.exec("cat", ["package.json"]);
    if (result.exit_code === 0) {
      pkgJson = result.stdout;
    }
  } catch {
  }
  const hasDepOrDev = (name2) => {
    const depRegex = new RegExp(`"${name2}"\\s*:`);
    return depRegex.test(pkgJson);
  };
  const fileExists = async (path) => {
    try {
      const result = await shell.exec("test", ["-f", path]);
      return result.exit_code === 0;
    } catch {
      return false;
    }
  };
  const findFirstGlob = async (pattern) => {
    try {
      const result = await shell.exec("sh", ["-c", `ls ${pattern} 2>/dev/null | head -1`]);
      if (result.exit_code === 0 && result.stdout.trim()) {
        return result.stdout.trim();
      }
    } catch {
    }
    return null;
  };
  if (hasDepOrDev("next")) {
    for (const ext of ["tsx", "ts", "jsx", "js"]) {
      if (await fileExists(`app/layout.${ext}`)) {
        return { name: "Next.js (App Router)", targetFile: `app/layout.${ext}`, method: "next-script" };
      }
    }
    for (const ext of ["tsx", "ts", "jsx", "js"]) {
      if (await fileExists(`pages/_app.${ext}`)) {
        return { name: "Next.js (Pages Router)", targetFile: `pages/_app.${ext}`, method: "next-script" };
      }
    }
  }
  if (hasDepOrDev("astro")) {
    const astroLayout = await findFirstGlob("src/layouts/*.astro");
    if (astroLayout) {
      return { name: "Astro", targetFile: astroLayout, method: "astro-head" };
    }
    if (await fileExists("src/pages/index.astro")) {
      return { name: "Astro", targetFile: "src/pages/index.astro", method: "astro-head" };
    }
  }
  if (hasDepOrDev("nuxt")) {
    for (const ext of ["ts", "js"]) {
      if (await fileExists(`nuxt.config.${ext}`)) {
        return { name: "Nuxt", targetFile: `nuxt.config.${ext}`, method: "nuxt-config" };
      }
    }
  }
  if (hasDepOrDev("vite") || hasDepOrDev("react") || hasDepOrDev("vue")) {
    if (await fileExists("index.html")) {
      return { name: "Vite/React/Vue", targetFile: "index.html", method: "html-head" };
    }
  }
  if (await fileExists("index.html")) {
    return { name: "HTML", targetFile: "index.html", method: "html-head" };
  }
  return null;
}
async function injectTrackingCode(shell, measurementId, framework) {
  const { targetFile, method } = framework;
  const nodeScript = buildInjectionScript(measurementId, targetFile, method);
  try {
    const result = await shell.exec("node", ["-e", nodeScript], { timeout: 15e3 });
    if (result.exit_code === 0) {
      const output = result.stdout.trim();
      if (output.startsWith("ERROR:")) {
        return { success: false, message: output.replace("ERROR:", "").trim() };
      }
      return { success: true, message: output || `Tracking code injected into ${targetFile}` };
    }
    return { success: false, message: result.stderr || "Injection failed" };
  } catch (err) {
    return { success: false, message: `Failed: ${err instanceof Error ? err.message : String(err)}` };
  }
}
function buildInjectionScript(measurementId, targetFile, method) {
  const mid = measurementId;
  const file = targetFile.replace(/'/g, "\\'");
  return `
const fs = require('fs');
const path = require('path');

const filePath = '${file}';
const mid = '${mid}';

try {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check for existing GA tracking
  const hasGA = content.includes('googletagmanager.com/gtag/js') || content.includes('gtag(');

  if (hasGA) {
    // Update existing measurement ID
    content = content.replace(/G-[A-Z0-9]{6,12}/g, mid);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated existing GA tracking code with new measurement ID in ' + filePath);
    process.exit(0);
  }

  const method = '${method}';

  if (method === 'html-head') {
    const snippet = \`<!-- Google Analytics -->\\n<script async src="https://www.googletagmanager.com/gtag/js?id=\${mid}"><\/script>\\n<script>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n  gtag('config', '\${mid}');\\n<\/script>\\n<!-- End Google Analytics -->\\n\`;

    if (content.includes('</head>')) {
      content = content.replace('</head>', snippet + '</head>');
    } else {
      content = snippet + content;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected GA tracking code into ' + filePath);
  } else if (method === 'next-script') {
    // Check if Script is already imported
    if (!content.includes("from 'next/script'") && !content.includes('from "next/script"')) {
      // Add Script import
      const importLine = "import Script from 'next/script';\\n";
      // Insert after the last import line
      const lastImportIdx = content.lastIndexOf('import ');
      if (lastImportIdx !== -1) {
        const endOfLine = content.indexOf('\\n', lastImportIdx);
        content = content.slice(0, endOfLine + 1) + importLine + content.slice(endOfLine + 1);
      } else {
        content = importLine + content;
      }
    }

    var BT = String.fromCharCode(96);
    var snippet = '      {/* Google Analytics */}\\n'
      + '      <Script\\n'
      + '        src={' + BT + 'https://www.googletagmanager.com/gtag/js?id=' + mid + BT + '}\\n'
      + '        strategy="afterInteractive"\\n'
      + '      />\\n'
      + '      <Script id="google-analytics" strategy="afterInteractive">\\n'
      + '        {' + BT + '\\n'
      + '          window.dataLayer = window.dataLayer || [];\\n'
      + '          function gtag(){dataLayer.push(arguments);}\\n'
      + "          gtag('js', new Date());\\n"
      + "          gtag('config', '" + mid + "');\\n"
      + '        ' + BT + '}\\n'
      + '      <\/Script>\\n';

    // Insert before </body> or </html> or at end of the return body
    if (content.includes('</body>')) {
      content = content.replace('</body>', snippet + '      </body>');
    } else if (content.includes('</html>')) {
      content = content.replace('</html>', snippet + '      </html>');
    } else {
      // Try to insert before the last closing tag in JSX
      const lastClosingTag = content.lastIndexOf('</');
      if (lastClosingTag !== -1) {
        content = content.slice(0, lastClosingTag) + snippet + content.slice(lastClosingTag);
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected GA Script components into ' + filePath);
  } else if (method === 'astro-head') {
    const snippet = \`<!-- Google Analytics -->\\n<script is:inline src="https://www.googletagmanager.com/gtag/js?id=\${mid}"><\/script>\\n<script is:inline>\\n  window.dataLayer = window.dataLayer || [];\\n  function gtag(){dataLayer.push(arguments);}\\n  gtag('js', new Date());\\n  gtag('config', '\${mid}');\\n<\/script>\\n<!-- End Google Analytics -->\\n\`;

    if (content.includes('</head>')) {
      content = content.replace('</head>', snippet + '</head>');
    } else {
      // Insert at the top of the frontmatter boundary or file
      content = snippet + content;
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected GA tracking code into ' + filePath);
  } else if (method === 'nuxt-config') {
    // For Nuxt, add to app.head.script in nuxt.config
    if (content.includes('app:') || content.includes('app :')) {
      // Try to add to existing app config
      const scriptConfig = \`
    script: [
      { src: 'https://www.googletagmanager.com/gtag/js?id=\${mid}', async: true },
      { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '\${mid}');" }
    ]\`;

      if (content.includes('head:') || content.includes('head :')) {
        // Add script array to existing head
        const headIdx = content.indexOf('head');
        const braceIdx = content.indexOf('{', headIdx);
        if (braceIdx !== -1) {
          content = content.slice(0, braceIdx + 1) + '\\n' + scriptConfig + ',' + content.slice(braceIdx + 1);
        }
      } else {
        // Add head to existing app config
        const appIdx = content.indexOf('app');
        const braceIdx = content.indexOf('{', appIdx);
        if (braceIdx !== -1) {
          content = content.slice(0, braceIdx + 1) + '\\n    head: {' + scriptConfig + '\\n    },' + content.slice(braceIdx + 1);
        }
      }
    } else {
      // Add app config with head.script
      const defineConfigIdx = content.indexOf('defineNuxtConfig');
      if (defineConfigIdx !== -1) {
        const openBrace = content.indexOf('{', defineConfigIdx);
        if (openBrace !== -1) {
          const insertStr = \`\\n  app: {\\n    head: {\\n      script: [\\n        { src: 'https://www.googletagmanager.com/gtag/js?id=\${mid}', async: true },\\n        { innerHTML: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '\${mid}');" }\\n      ]\\n    }\\n  },\`;
          content = content.slice(0, openBrace + 1) + insertStr + content.slice(openBrace + 1);
        }
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Injected GA config into ' + filePath);
  } else {
    console.log('ERROR:Unsupported injection method: ' + method);
    process.exit(0);
  }
} catch (err) {
  console.log('ERROR:' + err.message);
}
  `.trim();
}
function buildFetchScript(propertyId, keyPath, dateRange) {
  const days = dateRange === "today" ? 0 : dateRange === "7d" ? 7 : dateRange === "28d" ? 28 : 90;
  return `
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

function base64url(data) {
  return Buffer.from(data).toString('base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');
}

function httpsPost(url, body, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname,
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  // 1. Read service account key
  const keyFile = JSON.parse(fs.readFileSync('${keyPath.replace(/'/g, "\\'")}', 'utf8'));

  // 2. Create JWT
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    iss: keyFile.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));

  const signable = header + '.' + payload;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signable);
  const signature = sign.sign(keyFile.private_key, 'base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');
  const jwt = signable + '.' + signature;

  // 3. Exchange JWT for access token
  const tokenRes = await httpsPost('https://oauth2.googleapis.com/token',
    JSON.stringify({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
    {}
  );
  const tokenData = JSON.parse(tokenRes.body);
  if (!tokenData.access_token) {
    console.log(JSON.stringify({ error: 'Auth failed: ' + (tokenData.error_description || tokenData.error || 'unknown') }));
    process.exit(0);
  }
  const token = tokenData.access_token;
  const authHeaders = { Authorization: 'Bearer ' + token };
  const propertyId = '${propertyId}';

  // 4. Fetch historical report
  const startDate = ${days} === 0 ? 'today' : '${days}daysAgo';
  const reportBody = JSON.stringify({
    dateRanges: [{ startDate, endDate: 'today' }],
    metrics: [
      { name: 'totalUsers' },
      { name: 'sessions' },
      { name: 'screenPageViews' },
      { name: 'bounceRate' }
    ]
  });

  const reportRes = await httpsPost(
    'https://analyticsdata.googleapis.com/v1beta/properties/' + propertyId + ':runReport',
    reportBody, authHeaders
  );
  const reportData = JSON.parse(reportRes.body);

  // 5. Fetch top pages
  const pagesBody = JSON.stringify({
    dateRanges: [{ startDate, endDate: 'today' }],
    dimensions: [{ name: 'pagePath' }],
    metrics: [{ name: 'screenPageViews' }],
    orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
    limit: 10
  });

  const pagesRes = await httpsPost(
    'https://analyticsdata.googleapis.com/v1beta/properties/' + propertyId + ':runReport',
    pagesBody, authHeaders
  );
  const pagesData = JSON.parse(pagesRes.body);

  // 6. Fetch realtime active users
  const realtimeBody = JSON.stringify({
    metrics: [{ name: 'activeUsers' }]
  });

  const realtimeRes = await httpsPost(
    'https://analyticsdata.googleapis.com/v1beta/properties/' + propertyId + ':runRealtimeReport',
    realtimeBody, authHeaders
  );
  const realtimeData = JSON.parse(realtimeRes.body);

  // 7. Parse results
  const result = {
    totalUsers: 0,
    sessions: 0,
    pageViews: 0,
    bounceRate: 0,
    activeUsers: 0,
    topPages: []
  };

  if (reportData.rows && reportData.rows[0]) {
    const vals = reportData.rows[0].metricValues;
    result.totalUsers = parseInt(vals[0].value) || 0;
    result.sessions = parseInt(vals[1].value) || 0;
    result.pageViews = parseInt(vals[2].value) || 0;
    result.bounceRate = parseFloat(vals[3].value) || 0;
  }

  if (realtimeData.rows && realtimeData.rows[0]) {
    result.activeUsers = parseInt(realtimeData.rows[0].metricValues[0].value) || 0;
  }

  if (pagesData.rows) {
    result.topPages = pagesData.rows.map(row => ({
      path: row.dimensionValues[0].value,
      views: parseInt(row.metricValues[0].value) || 0
    }));
  }

  console.log(JSON.stringify(result));
}

run().catch(err => {
  console.log(JSON.stringify({ error: err.message }));
});
  `.trim();
}
function buildRealtimeScript(propertyId, keyPath) {
  return `
const crypto = require('crypto');
const https = require('https');
const fs = require('fs');

function base64url(data) {
  return Buffer.from(data).toString('base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');
}

function httpsPost(url, body, headers) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = https.request({
      hostname: u.hostname,
      path: u.pathname,
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  const keyFile = JSON.parse(fs.readFileSync('${keyPath.replace(/'/g, "\\'")}', 'utf8'));
  const now = Math.floor(Date.now() / 1000);
  const header = base64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const payload = base64url(JSON.stringify({
    iss: keyFile.client_email,
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  }));

  const signable = header + '.' + payload;
  const sign = crypto.createSign('RSA-SHA256');
  sign.update(signable);
  const signature = sign.sign(keyFile.private_key, 'base64').replace(/=/g, '').replace(/\\+/g, '-').replace(/\\//g, '_');
  const jwt = signable + '.' + signature;

  const tokenRes = await httpsPost('https://oauth2.googleapis.com/token',
    JSON.stringify({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: jwt }),
    {}
  );
  const tokenData = JSON.parse(tokenRes.body);
  if (!tokenData.access_token) {
    console.log(JSON.stringify({ error: 'Auth failed' }));
    process.exit(0);
  }

  const realtimeRes = await httpsPost(
    'https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runRealtimeReport',
    JSON.stringify({ metrics: [{ name: 'activeUsers' }] }),
    { Authorization: 'Bearer ' + tokenData.access_token }
  );
  const data = JSON.parse(realtimeRes.body);
  const active = (data.rows && data.rows[0]) ? parseInt(data.rows[0].metricValues[0].value) || 0 : 0;
  console.log(JSON.stringify({ activeUsers: active }));
}

run().catch(err => {
  console.log(JSON.stringify({ error: err.message }));
});
  `.trim();
}
function SetupModal({
  onClose,
  config,
  onSave,
  shell,
  showToast,
  actions,
  theme
}) {
  const [measurementId, setMeasurementId] = useState((config == null ? void 0 : config.measurementId) ?? "");
  const [propertyId, setPropertyId] = useState((config == null ? void 0 : config.propertyId) ?? "");
  const [keyPath, setKeyPath] = useState((config == null ? void 0 : config.serviceAccountKeyPath) ?? "");
  const [framework, setFramework] = useState(null);
  const [detecting, setDetecting] = useState(true);
  const [injecting, setInjecting] = useState(false);
  const [injectResult, setInjectResult] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    let cancelled = false;
    detectFramework(shell).then((fw) => {
      if (!cancelled) {
        setFramework(fw);
        setDetecting(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [shell]);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  const isValidMeasurementId = /^G-[A-Z0-9]{4,12}$/i.test(measurementId.trim());
  const handleInject = useCallback(async () => {
    if (!framework || !isValidMeasurementId) return;
    setInjecting(true);
    setInjectResult(null);
    setError(null);
    const result = await injectTrackingCode(shell, measurementId.trim(), framework);
    setInjectResult(result);
    if (result.success) {
      showToast(result.message, "success");
    } else {
      setError(result.message);
    }
    setInjecting(false);
  }, [framework, measurementId, shell, showToast, isValidMeasurementId]);
  const handleSave = useCallback(() => {
    if (!isValidMeasurementId) {
      setError("Please enter a valid Measurement ID (format: G-XXXXXXXXXX)");
      return;
    }
    setError(null);
    const newConfig = {
      measurementId: measurementId.trim(),
      propertyId: propertyId.trim() || void 0,
      serviceAccountKeyPath: keyPath.trim() || void 0,
      framework: framework == null ? void 0 : framework.name,
      injectedFile: (injectResult == null ? void 0 : injectResult.success) ? framework == null ? void 0 : framework.targetFile : config == null ? void 0 : config.injectedFile
    };
    onSave(newConfig);
    onClose();
  }, [measurementId, propertyId, keyPath, framework, injectResult, config, isValidMeasurementId, onSave, onClose]);
  return /* @__PURE__ */ jsx("div", { className: "ga-modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ga-modal",
      style: { background: theme.bgPrimary, color: theme.textPrimary, border: `1px solid ${theme.border}` },
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "ga-modal-header", style: { borderBottom: `1px solid ${theme.border}` }, children: [
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsx(GAIcon, { size: 14 }),
            config ? "Google Analytics Settings" : "Setup Google Analytics"
          ] }),
          /* @__PURE__ */ jsx("button", { className: "ga-close-btn", onClick: onClose, style: { color: theme.textMuted }, children: "✕" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ga-modal-body", children: [
          error && /* @__PURE__ */ jsx("div", { className: "ga-error-box", children: error }),
          (injectResult == null ? void 0 : injectResult.success) && /* @__PURE__ */ jsx("div", { className: "ga-success-box", children: injectResult.message }),
          /* @__PURE__ */ jsxs("div", { className: "ga-form-group", children: [
            /* @__PURE__ */ jsx("label", { className: "ga-form-label", children: "Measurement ID *" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "ga-form-input",
                style: { borderColor: theme.border },
                type: "text",
                placeholder: "G-XXXXXXXXXX",
                value: measurementId,
                onChange: (e) => setMeasurementId(e.target.value.toUpperCase()),
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: false
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "ga-form-hint", children: [
              "Found in GA4 Admin → Data Streams.",
              " ",
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "ga-hint-link",
                  onClick: () => actions.openUrl("https://analytics.google.com/analytics/web/#/admin/streams"),
                  type: "button",
                  children: "Open Data Streams →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ga-form-group", children: [
            /* @__PURE__ */ jsx("label", { className: "ga-form-label", children: "GA4 Property ID (optional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "ga-form-input",
                style: { borderColor: theme.border },
                type: "text",
                placeholder: "123456789",
                value: propertyId,
                onChange: (e) => setPropertyId(e.target.value.replace(/\D/g, "")),
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: false
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "ga-form-hint", children: [
              "Required for viewing analytics.",
              " ",
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "ga-hint-link",
                  onClick: () => actions.openUrl("https://analytics.google.com/analytics/web/#/admin/property"),
                  type: "button",
                  children: "Open Property Settings →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ga-form-group", children: [
            /* @__PURE__ */ jsx("label", { className: "ga-form-label", children: "Service Account Key Path (optional)" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                className: "ga-form-input",
                style: { borderColor: theme.border },
                type: "text",
                placeholder: "/path/to/service-account-key.json",
                value: keyPath,
                onChange: (e) => setKeyPath(e.target.value),
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: false
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "ga-form-hint", children: [
              "Required for viewing analytics.",
              " ",
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "ga-hint-link",
                  onClick: () => actions.openUrl("https://console.cloud.google.com/iam-admin/serviceaccounts"),
                  type: "button",
                  children: "Open Service Accounts →"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ga-section", children: [
            /* @__PURE__ */ jsx("div", { className: "ga-section-title", style: { color: theme.textMuted }, children: "Framework Detection" }),
            detecting ? /* @__PURE__ */ jsxs("div", { style: { fontSize: 12, opacity: 0.5 }, children: [
              /* @__PURE__ */ jsx("span", { className: "ga-spinner" }),
              " Detecting framework..."
            ] }) : framework ? /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6 }, children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "ga-framework-badge", children: framework.name }) }),
              /* @__PURE__ */ jsxs("div", { style: { fontSize: 11, opacity: 0.5 }, children: [
                "Target: ",
                /* @__PURE__ */ jsx("code", { style: { background: theme.bgTertiary, padding: "1px 4px", borderRadius: 3 }, children: framework.targetFile })
              ] })
            ] }) : /* @__PURE__ */ jsx("div", { style: { fontSize: 12, opacity: 0.5 }, children: "No supported framework detected. Place an index.html in the project root for HTML injection." })
          ] }),
          framework && /* @__PURE__ */ jsx("div", { className: "ga-form-group", children: /* @__PURE__ */ jsx(
            "button",
            {
              className: "ga-btn ga-btn-secondary",
              onClick: handleInject,
              disabled: injecting || !isValidMeasurementId,
              style: { width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 },
              children: injecting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx("span", { className: "ga-spinner" }),
                " Injecting..."
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(CodeIcon, { size: 12 }),
                " Inject Tracking Code"
              ] })
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ga-modal-footer", style: { borderTop: `1px solid ${theme.border}` }, children: [
          /* @__PURE__ */ jsx("button", { className: "ga-btn ga-btn-secondary", onClick: onClose, children: "Cancel" }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "ga-btn ga-btn-primary",
              onClick: handleSave,
              disabled: !isValidMeasurementId,
              children: "Save Setup"
            }
          )
        ] })
      ]
    }
  ) });
}
function AnalyticsModal({
  onClose,
  config,
  shell,
  theme
}) {
  const [dateRange, setDateRange] = useState("7d");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async (range) => {
    if (!config.propertyId || !config.serviceAccountKeyPath) return;
    setLoading(true);
    setError(null);
    try {
      const script = buildFetchScript(config.propertyId, config.serviceAccountKeyPath, range);
      const result = await shell.exec("node", ["-e", script], { timeout: 3e4 });
      if (result.exit_code === 0 && result.stdout.trim()) {
        const parsed = JSON.parse(result.stdout.trim());
        if (parsed.error) {
          setError(parsed.error);
        } else {
          setData(parsed);
        }
      } else {
        setError(result.stderr || "Failed to fetch analytics data");
      }
    } catch (err) {
      setError(`Failed: ${err instanceof Error ? err.message : String(err)}`);
    } finally {
      setLoading(false);
    }
  }, [config.propertyId, config.serviceAccountKeyPath, shell]);
  useEffect(() => {
    fetchData(dateRange);
  }, [dateRange, fetchData]);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);
  const formatNumber = (n) => {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
    if (n >= 1e3) return (n / 1e3).toFixed(1) + "K";
    return n.toString();
  };
  const formatRate = (rate) => {
    return (rate * 100).toFixed(1) + "%";
  };
  const dateRanges = [
    { key: "today", label: "Today" },
    { key: "7d", label: "7d" },
    { key: "28d", label: "28d" },
    { key: "90d", label: "90d" }
  ];
  return /* @__PURE__ */ jsx("div", { className: "ga-modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ga-modal",
      style: { background: theme.bgPrimary, color: theme.textPrimary, border: `1px solid ${theme.border}`, width: 520 },
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "ga-modal-header", style: { borderBottom: `1px solid ${theme.border}` }, children: [
          /* @__PURE__ */ jsxs("span", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsx(ChartIcon, { size: 14 }),
            "Analytics — ",
            config.measurementId
          ] }),
          /* @__PURE__ */ jsx("button", { className: "ga-close-btn", onClick: onClose, style: { color: theme.textMuted }, children: "✕" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ga-modal-body", children: [
          /* @__PURE__ */ jsx("div", { className: "ga-tabs", children: dateRanges.map((r) => /* @__PURE__ */ jsx(
            "button",
            {
              className: `ga-tab ${dateRange === r.key ? "ga-tab-active" : ""}`,
              onClick: () => setDateRange(r.key),
              children: r.label
            },
            r.key
          )) }),
          error && /* @__PURE__ */ jsx("div", { className: "ga-error-box", children: error }),
          loading ? /* @__PURE__ */ jsxs("div", { style: { textAlign: "center", padding: "24px 0", opacity: 0.5 }, children: [
            /* @__PURE__ */ jsx("span", { className: "ga-spinner" }),
            " Loading analytics..."
          ] }) : data ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "ga-metrics-grid", children: [
              /* @__PURE__ */ jsxs("div", { className: "ga-metric-card", style: { background: theme.bgTertiary }, children: [
                /* @__PURE__ */ jsx("div", { className: "ga-metric-value", style: { color: "#F57C00" }, children: formatNumber(data.totalUsers) }),
                /* @__PURE__ */ jsx("div", { className: "ga-metric-label", children: "Users" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ga-metric-card", style: { background: theme.bgTertiary }, children: [
                /* @__PURE__ */ jsx("div", { className: "ga-metric-value", style: { color: "#F57C00" }, children: formatNumber(data.sessions) }),
                /* @__PURE__ */ jsx("div", { className: "ga-metric-label", children: "Sessions" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ga-metric-card", style: { background: theme.bgTertiary }, children: [
                /* @__PURE__ */ jsx("div", { className: "ga-metric-value", style: { color: "#F57C00" }, children: formatNumber(data.pageViews) }),
                /* @__PURE__ */ jsx("div", { className: "ga-metric-label", children: "Page Views" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "ga-metric-card", style: { background: theme.bgTertiary }, children: [
                /* @__PURE__ */ jsx("div", { className: "ga-metric-value", style: { color: "#F57C00" }, children: formatRate(data.bounceRate) }),
                /* @__PURE__ */ jsx("div", { className: "ga-metric-label", children: "Bounce Rate" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ga-section", children: /* @__PURE__ */ jsxs("div", { className: "ga-active-users-row", style: { background: theme.bgTertiary, borderRadius: 6 }, children: [
              /* @__PURE__ */ jsx("span", { className: "ga-active-dot" }),
              /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: data.activeUsers }),
              /* @__PURE__ */ jsx("span", { style: { opacity: 0.5 }, children: "active users right now" })
            ] }) }),
            data.topPages.length > 0 && /* @__PURE__ */ jsxs("div", { className: "ga-section", children: [
              /* @__PURE__ */ jsx("div", { className: "ga-section-title", style: { color: theme.textMuted }, children: "Top Pages" }),
              /* @__PURE__ */ jsxs("table", { className: "ga-top-pages", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { style: { color: theme.textMuted }, children: "Page" }),
                  /* @__PURE__ */ jsx("th", { style: { color: theme.textMuted, textAlign: "right" }, children: "Views" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: data.topPages.map((page, i) => /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("td", { style: {
                    maxWidth: 300,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    borderColor: theme.border
                  }, children: /* @__PURE__ */ jsx("code", { style: { fontSize: 11 }, children: page.path }) }),
                  /* @__PURE__ */ jsx("td", { style: { textAlign: "right", fontWeight: 500, borderColor: theme.border }, children: formatNumber(page.views) })
                ] }, i)) })
              ] })
            ] })
          ] }) : null
        ] })
      ]
    }
  ) });
}
function DisconnectIcon({ size = 12 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ] });
}
function ConnectedDropdown({
  config,
  theme,
  actions,
  shell,
  showToast,
  isConnected,
  onSettings,
  onDisconnect
}) {
  const [activeUsers, setActiveUsers] = useState(null);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [injecting, setInjecting] = useState(false);
  useEffect(() => {
    if (!isConnected || !config.propertyId || !config.serviceAccountKeyPath) return;
    let cancelled = false;
    async function fetchActive() {
      try {
        const script = buildRealtimeScript(config.propertyId, config.serviceAccountKeyPath);
        const result = await shell.exec("node", ["-e", script], { timeout: 15e3 });
        if (!cancelled && result.exit_code === 0 && result.stdout.trim()) {
          const parsed = JSON.parse(result.stdout.trim());
          if (!parsed.error) {
            setActiveUsers(parsed.activeUsers);
          }
        }
      } catch {
      }
    }
    fetchActive();
    const interval = setInterval(fetchActive, 3e4);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [isConnected, config.propertyId, config.serviceAccountKeyPath, shell]);
  const handleInject = useCallback(async () => {
    setInjecting(true);
    const framework = await detectFramework(shell);
    if (!framework) {
      showToast("No supported framework detected", "error");
      setInjecting(false);
      return;
    }
    const result = await injectTrackingCode(shell, config.measurementId, framework);
    showToast(result.message, result.success ? "success" : "error");
    setInjecting(false);
  }, [shell, config.measurementId, showToast]);
  const dashboardUrl = `https://analytics.google.com/analytics/web/#/p${config.propertyId || ""}/reports/reportinghub`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "ga-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "ga-dropdown-inner", children: [
      isConnected && activeUsers !== null && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { className: "ga-active-users-row", children: [
          /* @__PURE__ */ jsx("span", { className: "ga-active-dot" }),
          /* @__PURE__ */ jsx("span", { style: { fontWeight: 600 }, children: activeUsers }),
          /* @__PURE__ */ jsx("span", { style: { opacity: 0.5, fontSize: 11 }, children: "active now" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ga-dropdown-divider" })
      ] }),
      isConnected && /* @__PURE__ */ jsxs("button", { onClick: (e) => {
        e.stopPropagation();
        setShowAnalytics(true);
      }, children: [
        /* @__PURE__ */ jsx("span", { className: "ga-badge ga-badge-live", children: "Live" }),
        /* @__PURE__ */ jsx("span", { className: "ga-site-url", children: "View Analytics" }),
        /* @__PURE__ */ jsx(ChartIcon, { size: 12 })
      ] }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: (e) => {
            e.stopPropagation();
            actions.openUrl(dashboardUrl);
          },
          children: [
            /* @__PURE__ */ jsx("span", { className: "ga-badge ga-badge-dash", children: "Dash" }),
            /* @__PURE__ */ jsx("span", { className: "ga-site-url", children: "analytics.google.com" }),
            /* @__PURE__ */ jsx(ExternalLinkIcon, { size: 12 })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "ga-dropdown-divider" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "ga-dropdown-action",
          onClick: (e) => {
            e.stopPropagation();
            handleInject();
          },
          disabled: injecting,
          children: [
            /* @__PURE__ */ jsx(CodeIcon, { size: 12 }),
            injecting ? "Injecting..." : "Inject/Update Tracking"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "ga-dropdown-action",
          onClick: (e) => {
            e.stopPropagation();
            onSettings();
          },
          children: [
            /* @__PURE__ */ jsx(SettingsIcon, { size: 12 }),
            "Settings"
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "ga-dropdown-divider" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          className: "ga-dropdown-action ga-action-danger",
          onClick: (e) => {
            e.stopPropagation();
            onDisconnect();
          },
          children: [
            /* @__PURE__ */ jsx(DisconnectIcon, { size: 12 }),
            "Disconnect"
          ]
        }
      )
    ] }) }),
    showAnalytics && /* @__PURE__ */ jsx(
      AnalyticsModal,
      {
        onClose: () => setShowAnalytics(false),
        config,
        shell,
        theme
      }
    )
  ] });
}
function GAToolbar() {
  const ctx = usePluginContextMaybe();
  if (!ctx) return null;
  return /* @__PURE__ */ jsx(GAToolbarInner, { ctx });
}
function GAToolbarInner({ ctx }) {
  const shell = ctx.shell;
  const storage = ctx.storage;
  const showToast = ctx.actions.showToast;
  const theme = ctx.theme;
  const actions = ctx.actions;
  useInjectStyles();
  const [config, setConfig] = useState(null);
  const [pluginState, setPluginState] = useState("LOADING");
  const [showSetup, setShowSetup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);
  useEffect(() => {
    let cancelled = false;
    storage.read().then((data) => {
      if (cancelled) return;
      if (data.measurementId && typeof data.measurementId === "string") {
        const loaded = {
          measurementId: data.measurementId,
          propertyId: data.propertyId,
          serviceAccountKeyPath: data.serviceAccountKeyPath,
          framework: data.framework,
          injectedFile: data.injectedFile
        };
        setConfig(loaded);
        if (loaded.propertyId && loaded.serviceAccountKeyPath) {
          setPluginState("CONNECTED");
        } else {
          setPluginState("CONFIGURED");
        }
      } else {
        setPluginState("NOT_CONFIGURED");
      }
    }).catch(() => {
      if (!cancelled) setPluginState("NOT_CONFIGURED");
    });
    return () => {
      cancelled = true;
    };
  }, [storage]);
  useEffect(() => {
    if (!showDropdown) return;
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showDropdown]);
  const handleSave = useCallback(async (newConfig) => {
    setConfig(newConfig);
    await storage.write(newConfig);
    if (newConfig.propertyId && newConfig.serviceAccountKeyPath) {
      setPluginState("CONNECTED");
    } else {
      setPluginState("CONFIGURED");
    }
    showToast("Google Analytics configured!", "success");
  }, [storage, showToast]);
  const handleDisconnect = useCallback(async () => {
    await storage.write({});
    setConfig(null);
    setPluginState("NOT_CONFIGURED");
    setShowDropdown(false);
    showToast("Google Analytics disconnected", "success");
  }, [storage, showToast]);
  const handleMouseEnter = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowDropdown(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  }, []);
  switch (pluginState) {
    case "LOADING":
      return /* @__PURE__ */ jsx("button", { className: "toolbar-icon-btn ga-pulsing", disabled: true, title: "Loading Google Analytics...", children: /* @__PURE__ */ jsx(GAIcon, {}) });
    case "NOT_CONFIGURED":
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "toolbar-icon-btn",
            onClick: () => setShowSetup(true),
            title: "Setup Google Analytics",
            children: [
              /* @__PURE__ */ jsx(GAIcon, {}),
              "Setup GA"
            ]
          }
        ),
        showSetup && /* @__PURE__ */ jsx(
          SetupModal,
          {
            onClose: () => setShowSetup(false),
            config: null,
            onSave: handleSave,
            shell,
            showToast,
            actions,
            theme
          }
        )
      ] });
    case "CONFIGURED":
    case "CONNECTED":
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ga-dropdown-wrapper",
          ref: dropdownRef,
          onMouseEnter: handleMouseEnter,
          onMouseLeave: handleMouseLeave,
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "toolbar-icon-btn",
                title: `GA: ${config == null ? void 0 : config.measurementId}`,
                children: /* @__PURE__ */ jsx(GAIcon, {})
              }
            ),
            showDropdown && config && /* @__PURE__ */ jsx(
              ConnectedDropdown,
              {
                config,
                theme,
                actions,
                shell,
                showToast,
                isConnected: pluginState === "CONNECTED",
                onSettings: () => {
                  setShowDropdown(false);
                  setShowSetup(true);
                },
                onDisconnect: handleDisconnect
              }
            ),
            showSetup && /* @__PURE__ */ jsx(
              SetupModal,
              {
                onClose: () => setShowSetup(false),
                config,
                onSave: handleSave,
                shell,
                showToast,
                actions,
                theme
              }
            )
          ]
        }
      );
  }
}
const name = "Google Analytics";
const slots = {
  toolbar: GAToolbar
};
function onActivate() {
  console.log("[google-analytics] Plugin activated");
}
function onDeactivate() {
  console.log("[google-analytics] Plugin deactivated");
  const styleEl = document.getElementById(GA_STYLE_ID);
  if (styleEl) styleEl.remove();
}
export {
  name,
  onActivate,
  onDeactivate,
  slots
};
