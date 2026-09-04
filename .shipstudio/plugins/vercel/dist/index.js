import { jsx, jsxs, Fragment } from "data:text/javascript,const R=window.__SHIPSTUDIO_REACT__;export const jsx=R.createElement;export const jsxs=R.createElement;export const Fragment=R.Fragment;";
import { useState, useRef, useEffect } from "data:text/javascript,export default window.__SHIPSTUDIO_REACT__;export const useState=window.__SHIPSTUDIO_REACT__.useState;export const useEffect=window.__SHIPSTUDIO_REACT__.useEffect;export const useRef=window.__SHIPSTUDIO_REACT__.useRef;export const useCallback=window.__SHIPSTUDIO_REACT__.useCallback;export const useMemo=window.__SHIPSTUDIO_REACT__.useMemo;export const createElement=window.__SHIPSTUDIO_REACT__.createElement;";
const VERCEL_CSS = `
/* Vercel Integration - Workspace Header */
/* Extends host .toolbar-icon-btn class for base button styling */

.vercel-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.vercel-button svg {
  flex-shrink: 0;
}

.vercel-error {
  color: var(--error);
  font-size: 12px;
  margin-left: 8px;
}

/* Vercel Modal */
.vercel-modal {
  max-width: 480px;
}

/* Link mode toggle */
.vercel-link-mode-toggle {
  display: flex;
  margin-top: 16px;
  border-bottom: 1px solid var(--border);
  gap: 0;
}

.vercel-link-mode-toggle button {
  flex: 1;
  padding: 10px 12px;
  font-size: 13px;
  font-weight: 500;
  border: none;
  border-radius: 0;
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: color 0.15s;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}

.vercel-link-mode-toggle button:hover {
  color: var(--text-secondary);
  background: transparent;
}

.vercel-link-mode-toggle button.active {
  color: var(--text-primary);
  border-bottom-color: var(--text-primary);
  background: transparent;
}

/* Loading spinner */
.vercel-form-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 24px 16px;
  color: var(--text-muted);
  font-size: 13px;
}

.vercel-form-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--text-muted);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.vercel-form-empty {
  padding: 24px 16px;
  text-align: center;
  color: var(--text-muted);
  font-size: 13px;
}

.vercel-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}

.vercel-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: var(--text-secondary);
}

.vercel-form input {
  padding: 10px 12px;
  background: var(--bg-tertiary);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
}

.vercel-form input:focus {
  border-color: var(--accent);
}

.vercel-form .vercel-error {
  margin-left: 0;
  margin-top: 12px;
  padding: 12px;
  background: rgba(220, 38, 38, 0.1);
  border: 1px solid rgba(220, 38, 38, 0.3);
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.5;
  white-space: pre-wrap;
}

.vercel-button.vercel-deploying {
  background: #000;
  color: #fff;
  cursor: wait;
}

.vercel-button.vercel-deploying .deploying-text {
  animation: deployPulse 1.5s ease-in-out infinite;
}

@keyframes deployPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.vercel-button.vercel-checking {
  cursor: wait;
}

.vercel-button.vercel-checking .checking-text {
  animation: deployPulse 1.5s ease-in-out infinite;
}

/* Vercel Site Dropdown */
.vercel-button-container {
  position: relative;
}

.vercel-site-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  padding-top: 4px;
  z-index: 100;
}

.vercel-site-dropdown-inner {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 4px;
  min-width: 200px;
  max-width: 320px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.vercel-site-dropdown-inner button {
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
}

.vercel-site-dropdown-inner button:hover {
  background: var(--bg-tertiary);
  color: var(--text-primary);
}

.vercel-site-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 6px;
  border-radius: 4px;
  flex-shrink: 0;
}

.vercel-site-badge-prod {
  color: rgba(74, 222, 128, 0.9);
  background: rgba(74, 222, 128, 0.12);
}

.vercel-site-badge-preview {
  color: rgba(96, 165, 250, 0.9);
  background: rgba(96, 165, 250, 0.12);
}

.vercel-site-badge-deploy {
  color: rgba(168, 162, 158, 0.9);
  background: rgba(168, 162, 158, 0.12);
}

.vercel-site-url {
  flex: 1;
  min-width: 0;
  font-family: monospace;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vercel-site-dropdown-inner button svg {
  flex-shrink: 0;
  opacity: 0.5;
}

.vercel-site-dropdown-inner button:hover svg {
  opacity: 1;
}

/* Dropdown separator */
.vercel-dropdown-separator {
  height: 1px;
  background: var(--border);
  margin: 4px 0;
}

/* Dropdown action items */
.vercel-dropdown-action {
  color: var(--text-muted) !important;
  font-size: 12px !important;
  padding: 8px 12px !important;
  gap: 6px !important;
}

.vercel-dropdown-action:hover {
  color: var(--text-secondary) !important;
}

.vercel-dropdown-action svg {
  opacity: 0.6;
}

.vercel-dropdown-action:hover svg {
  opacity: 1;
}

.vercel-dropdown-action.vercel-action-danger:hover {
  color: var(--error, #ef4444) !important;
}

.vercel-dropdown-action.vercel-action-danger:hover svg {
  color: var(--error, #ef4444);
}

/* Account mismatch warning */
.vercel-button.vercel-mismatch {
  color: #f59e0b;
}

.vercel-mismatch-text {
  padding: 10px 12px;
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
}

.vercel-mismatch-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

/* Deployment status dot overlay on toolbar button */
.vercel-status-dot {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  pointer-events: none;
}

.vercel-status-dot-building {
  background: #f59e0b;
  animation: statusPulse 1.5s ease-in-out infinite;
}

.vercel-status-dot-error {
  background: #ef4444;
}

.vercel-status-dot-ready {
  background: #22c55e;
  animation: statusFadeOut 0.5s ease-out 5s forwards;
}

@keyframes statusPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

@keyframes statusFadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Button status modifiers */
.vercel-button.vercel-status-error {
  color: #ef4444;
}

.vercel-button.vercel-status-building {
  animation: deployPulse 1.5s ease-in-out infinite;
}

/* Deployment status section in dropdown */
.vercel-deploy-status {
  padding: 10px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
}

.vercel-deploy-status-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
}

.vercel-deploy-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.vercel-deploy-indicator-building,
.vercel-deploy-indicator-queued,
.vercel-deploy-indicator-initializing {
  background: #f59e0b;
  animation: statusPulse 1.5s ease-in-out infinite;
}

.vercel-deploy-indicator-error {
  background: #ef4444;
}

.vercel-deploy-indicator-ready {
  background: #22c55e;
}

.vercel-deploy-indicator-canceled {
  background: var(--text-muted);
}

.vercel-deploy-age {
  color: var(--text-muted);
  font-size: 12px;
  margin-left: auto;
}

.vercel-deploy-error-link {
  color: #ef4444 !important;
  font-size: 12px !important;
}

.vercel-deploy-error-link:hover {
  background: rgba(239, 68, 68, 0.1) !important;
}
`;
function getCtx() {
  const _w = window;
  const React = _w.__SHIPSTUDIO_REACT__;
  const CtxRef = _w.__SHIPSTUDIO_PLUGIN_CONTEXT_REF__;
  if (CtxRef && (React == null ? void 0 : React.useContext)) {
    const ctx = React.useContext(CtxRef);
    if (ctx) return ctx;
  }
  const directCtx = _w.__SHIPSTUDIO_PLUGIN_CONTEXT__;
  if (directCtx) return directCtx;
  throw new Error("Plugin context not available");
}
function deployStatusLabel(status) {
  switch (status) {
    case "READY":
      return "Ready";
    case "BUILDING":
      return "Building...";
    case "ERROR":
      return "Error";
    case "QUEUED":
      return "Queued...";
    case "CANCELED":
      return "Canceled";
    case "INITIALIZING":
      return "Initializing...";
  }
}
function parseAgeToSeconds(age) {
  const match = age.match(/^(\d+)(s|m|h|d)$/);
  if (!match) return 0;
  const value = parseInt(match[1], 10);
  switch (match[2]) {
    case "s":
      return value;
    case "m":
      return value * 60;
    case "h":
      return value * 3600;
    case "d":
      return value * 86400;
    default:
      return 0;
  }
}
function formatSecondsToAge(seconds) {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}
function VercelToolbar() {
  const ctx = getCtx();
  const project = ctx.project;
  const shell = ctx.shell;
  const toast = ctx.actions.showToast;
  const openUrl = ctx.actions.openUrl;
  const [cliStatus, setCliStatus] = useState(null);
  const [hasGitRemote, setHasGitRemote] = useState(false);
  const [projectStatus, setProjectStatus] = useState(null);
  const [isInstalling, setIsInstalling] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [showSiteDropdown, setShowSiteDropdown] = useState(false);
  const [deployName, setDeployName] = useState("");
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState([]);
  const [selectedScope, setSelectedScope] = useState(void 0);
  const [isLoadingTeams, setIsLoadingTeams] = useState(false);
  const [linkMode, setLinkMode] = useState("new");
  const [existingProjects, setExistingProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [isLinking, setIsLinking] = useState(false);
  const [optimisticLinked, setOptimisticLinked] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [isSwitchingAccount, setIsSwitchingAccount] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const pollRef = useRef(null);
  const [latestDeployment, setLatestDeployment] = useState(null);
  const prevDeployStatusRef = useRef(null);
  const [displayAge, setDisplayAge] = useState(null);
  const ageBaseRef = useRef(null);
  const optimisticBuildRef = useRef(null);
  useEffect(() => {
    const style = document.createElement("style");
    style.setAttribute("data-vercel-plugin", "true");
    style.textContent = VERCEL_CSS;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);
  useEffect(() => {
    void checkStatus();
    return () => {
      if (pollRef.current) clearTimeout(pollRef.current);
    };
  }, [project == null ? void 0 : project.path]);
  useEffect(() => {
    if (hasGitRemote) return;
    const interval = setInterval(async () => {
      const result = await shell.exec("git", ["remote", "-v"]).catch(() => null);
      if (result && result.exit_code === 0 && result.stdout.trim().length > 0) {
        setHasGitRemote(true);
        void checkStatus();
      }
    }, 3e3);
    return () => clearInterval(interval);
  }, [hasGitRemote]);
  useEffect(() => {
    if ((projectStatus == null ? void 0 : projectStatus.status) !== "connected") return;
    let cancelled = false;
    let timeoutId = null;
    const poll = async () => {
      const deployment = await fetchLatestDeployment();
      if (cancelled) return;
      if (optimisticBuildRef.current) {
        const elapsed = Date.now() - optimisticBuildRef.current;
        const isRealBuild = deployment && (deployment.status === "BUILDING" || deployment.status === "QUEUED" || deployment.status === "INITIALIZING");
        if (isRealBuild) {
          optimisticBuildRef.current = null;
        } else if (elapsed < 3e4) {
          if (!cancelled) timeoutId = setTimeout(() => void poll(), 3e3);
          return;
        } else {
          optimisticBuildRef.current = null;
        }
      }
      if (deployment) {
        const prevStatus = prevDeployStatusRef.current;
        if (prevStatus !== null) {
          const wasActive = prevStatus === "BUILDING" || prevStatus === "QUEUED" || prevStatus === "INITIALIZING";
          if (wasActive && deployment.status === "READY") {
            toast("Deployment is live!", "success");
          } else if (wasActive && deployment.status === "ERROR") {
            toast("Deployment failed", "error");
          }
        }
        prevDeployStatusRef.current = deployment.status;
        setLatestDeployment(deployment);
      }
      if (cancelled) return;
      const isActive = deployment && (deployment.status === "BUILDING" || deployment.status === "QUEUED" || deployment.status === "INITIALIZING");
      const delay = isActive ? 5e3 : 15e3;
      timeoutId = setTimeout(() => void poll(), delay);
    };
    timeoutId = setTimeout(() => void poll(), 2e3);
    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [projectStatus == null ? void 0 : projectStatus.status]);
  useEffect(() => {
    if (!(latestDeployment == null ? void 0 : latestDeployment.age)) return;
    const seconds = parseAgeToSeconds(latestDeployment.age);
    ageBaseRef.current = { seconds, timestamp: Date.now() };
    setDisplayAge(formatSecondsToAge(seconds));
  }, [latestDeployment == null ? void 0 : latestDeployment.age]);
  useEffect(() => {
    if (!latestDeployment) return;
    const isActive = latestDeployment.status === "BUILDING" || latestDeployment.status === "QUEUED" || latestDeployment.status === "INITIALIZING";
    if (!isActive || !ageBaseRef.current) return;
    const interval = setInterval(() => {
      if (!ageBaseRef.current) return;
      const elapsed = Math.floor((Date.now() - ageBaseRef.current.timestamp) / 1e3);
      setDisplayAge(formatSecondsToAge(ageBaseRef.current.seconds + elapsed));
    }, 1e3);
    return () => clearInterval(interval);
  }, [latestDeployment == null ? void 0 : latestDeployment.status, latestDeployment == null ? void 0 : latestDeployment.age]);
  useEffect(() => {
    if ((projectStatus == null ? void 0 : projectStatus.status) !== "connected") return;
    let cancelled = false;
    let lastRemoteSha = null;
    const check = async () => {
      const branch = project.currentBranch || "main";
      const result = await shell.exec("git", ["rev-parse", `origin/${branch}`]).catch(() => null);
      if (cancelled || !result || result.exit_code !== 0) return;
      const sha = result.stdout.trim();
      if (lastRemoteSha !== null && sha !== lastRemoteSha) {
        optimisticBuildRef.current = Date.now();
        prevDeployStatusRef.current = null;
        setLatestDeployment({ status: "BUILDING", url: "", age: "" });
        setDisplayAge("waiting");
        ageBaseRef.current = null;
      }
      lastRemoteSha = sha;
    };
    const interval = setInterval(() => void check(), 3e3);
    void check();
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [projectStatus == null ? void 0 : projectStatus.status, project == null ? void 0 : project.currentBranch]);
  const checkStatus = async () => {
    try {
      const remoteResult = await shell.exec("git", ["remote", "-v"]);
      setHasGitRemote(remoteResult.exit_code === 0 && remoteResult.stdout.trim().length > 0);
      const versionResult = await shell.exec("vercel", ["--version"]);
      const installed = versionResult.exit_code === 0;
      if (!installed) {
        setCliStatus({ installed: false, authenticated: false });
        return;
      }
      const whoamiResult = await shell.exec("vercel", ["whoami"]);
      const authenticated = whoamiResult.exit_code === 0;
      const currentAccount = authenticated ? whoamiResult.stdout.trim() : null;
      setCliStatus({ installed: true, authenticated });
      if (authenticated && (project == null ? void 0 : project.path)) {
        const catResult = await shell.exec("cat", [".vercel/project.json"]);
        if (catResult.exit_code !== 0) {
          setProjectStatus({
            status: "not-linked",
            project_name: null,
            vercel_org: null,
            production_url: null,
            staging_url: null,
            linked_account: null,
            current_account: currentAccount
          });
          return;
        }
        try {
          const projectJson = JSON.parse(catResult.stdout);
          const projectId = projectJson.projectId;
          const orgId = projectJson.orgId;
          const linkedAccount = projectJson.linkedAccount || null;
          if (!projectId || !orgId) {
            setProjectStatus({
              status: "not-linked",
              project_name: null,
              vercel_org: null,
              production_url: null,
              staging_url: null,
              linked_account: null,
              current_account: currentAccount
            });
            return;
          }
          if (linkedAccount && currentAccount && linkedAccount !== currentAccount) {
            setProjectStatus({
              status: "account-mismatch",
              project_name: projectJson.projectName || null,
              vercel_org: projectJson.orgSlug || null,
              production_url: null,
              staging_url: null,
              linked_account: linkedAccount,
              current_account: currentAccount
            });
            return;
          }
          let projectName = projectJson.projectName || null;
          let vercelOrg = projectJson.orgSlug || null;
          const lsResult = await shell.exec("sh", ["-c", "vercel ls --no-color 2>&1"]).catch(() => null);
          if (lsResult && lsResult.exit_code === 0) {
            const lsOutput = lsResult.stdout;
            const headerMatch = lsOutput.match(/Deployments?\s+for\s+(\S+)\/(\S+)/);
            if (headerMatch) {
              vercelOrg = headerMatch[1];
              if (!projectName) projectName = headerMatch[2];
            }
          } else if (lsResult && lsResult.exit_code !== 0 && !linkedAccount) {
            setProjectStatus({
              status: "account-mismatch",
              project_name: projectJson.projectName || null,
              vercel_org: projectJson.orgSlug || null,
              production_url: null,
              staging_url: null,
              linked_account: linkedAccount,
              current_account: currentAccount
            });
            return;
          }
          const domains = await fetchProjectDomains(projectId);
          const productionUrl = domains.length > 0 ? domains[0] : null;
          setProjectStatus({
            status: "connected",
            project_name: projectName,
            vercel_org: vercelOrg,
            production_url: productionUrl,
            staging_url: null,
            linked_account: linkedAccount || currentAccount,
            current_account: currentAccount
          });
        } catch {
          setProjectStatus({
            status: "not-linked",
            project_name: null,
            vercel_org: null,
            production_url: null,
            staging_url: null,
            linked_account: null,
            current_account: currentAccount
          });
        }
      }
    } catch {
      setCliStatus({ installed: false, authenticated: false });
    }
  };
  const fetchLatestDeployment = async () => {
    try {
      const result = await shell.exec("sh", ["-c", "vercel ls --no-color 2>&1"], { timeout: 15e3 });
      if (result.exit_code !== 0) return null;
      const lines = result.stdout.split("\n");
      let headerIndex = -1;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("Status")) {
          headerIndex = i;
          break;
        }
      }
      if (headerIndex === -1) return null;
      for (let i = headerIndex + 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const statusMatch = line.match(/●\s*(Ready|Building|Error|Queued|Canceled|Initializing)/i);
        if (!statusMatch) continue;
        const statusText = statusMatch[1].toUpperCase();
        const urlMatch = line.match(/(\S+\.vercel\.app)/);
        const url = urlMatch ? urlMatch[1] : "";
        const ageMatch = line.match(/^\s*(\S+)/);
        const age = ageMatch ? ageMatch[1] : "";
        return { status: statusText, url, age };
      }
      return null;
    } catch {
      return null;
    }
  };
  const fetchProjectDomains = async (projectId) => {
    try {
      const script = `
const fs = require('fs'), os = require('os'), https = require('https');
const home = os.homedir();
const paths = [
  home + '/Library/Application Support/com.vercel.cli/auth.json',
  home + '/.local/share/com.vercel.cli/auth.json',
  home + '/.config/com.vercel.cli/auth.json',
  home + '/.vercel/auth.json'
];
let token = null;
for (const p of paths) {
  try { token = JSON.parse(fs.readFileSync(p, 'utf8')).token; if (token) break; } catch {}
}
if (!token) { console.log('[]'); process.exit(0); }
https.get({
  hostname: 'api.vercel.com',
  path: '/v9/projects/' + encodeURIComponent(process.argv[1]) + '/domains',
  headers: { Authorization: 'Bearer ' + token }
}, (res) => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    try {
      const p = JSON.parse(d);
      console.log(JSON.stringify((p.domains || []).filter(x => !x.gitBranch).map(x => x.name)));
    } catch { console.log('[]'); }
  });
}).on('error', () => console.log('[]'));`;
      const result = await shell.exec("node", ["-e", script, projectId], { timeout: 1e4 });
      if (result.exit_code !== 0) return [];
      return JSON.parse(result.stdout.trim());
    } catch {
      return [];
    }
  };
  if (!cliStatus || !project) {
    return /* @__PURE__ */ jsx("button", { className: "toolbar-icon-btn vercel-button", disabled: true, title: "Vercel", children: /* @__PURE__ */ jsx(VercelIcon, {}) });
  }
  if (!hasGitRemote && (projectStatus == null ? void 0 : projectStatus.status) !== "connected") {
    return /* @__PURE__ */ jsx("button", { className: "toolbar-icon-btn vercel-button", disabled: true, title: "Push to GitHub to enable Vercel", children: /* @__PURE__ */ jsx(VercelIcon, {}) });
  }
  if (!cliStatus.installed) {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: "toolbar-icon-btn vercel-button vercel-install",
        onClick: async () => {
          setIsInstalling(true);
          try {
            const brewResult = await shell.exec("brew", ["install", "vercel-cli"]);
            if (brewResult.exit_code !== 0) {
              const npmResult = await shell.exec("npm", ["install", "-g", "vercel"]);
              if (npmResult.exit_code !== 0) {
                throw new Error("Failed to install via brew and npm");
              }
            }
            toast("Vercel CLI installed!", "success");
            await checkStatus();
          } catch {
            toast("Failed to install Vercel CLI", "error");
          } finally {
            setIsInstalling(false);
          }
        },
        disabled: isInstalling,
        title: "Install Vercel CLI via npm",
        children: [
          /* @__PURE__ */ jsx(VercelIcon, {}),
          isInstalling ? "Installing..." : "Install Vercel"
        ]
      }
    );
  }
  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      await ctx.actions.openTerminal("vercel", ["login"], { title: "Vercel Account" });
      await checkStatus();
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      await shell.exec("rm", ["-rf", ".vercel"]);
      setProjectStatus({
        status: "not-linked",
        project_name: null,
        vercel_org: null,
        production_url: null,
        staging_url: null,
        linked_account: null,
        current_account: null
      });
      setOptimisticLinked(false);
      toast("Project disconnected from Vercel", "success");
    } catch {
      toast("Failed to disconnect project", "error");
    } finally {
      setIsDisconnecting(false);
    }
  };
  const handleSwitchAccount = async () => {
    setIsSwitchingAccount(true);
    try {
      await shell.exec("vercel", ["logout"]).catch(() => {
      });
      setCliStatus({ installed: true, authenticated: false });
      setProjectStatus(null);
      void handleLogin();
    } catch {
      toast("Failed to sign out", "error");
    } finally {
      setIsSwitchingAccount(false);
    }
  };
  if (!cliStatus.authenticated) {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        className: "toolbar-icon-btn vercel-button vercel-connect",
        title: "Connect your Vercel account",
        onClick: () => void handleLogin(),
        disabled: isLoggingIn,
        children: [
          /* @__PURE__ */ jsx(VercelIcon, {}),
          isLoggingIn ? "Connecting..." : "Connect Vercel"
        ]
      }
    );
  }
  if (isDeploying) {
    return /* @__PURE__ */ jsxs("button", { className: "toolbar-icon-btn vercel-button vercel-deploying", disabled: true, title: "Deploying to Vercel...", children: [
      /* @__PURE__ */ jsx(VercelIcon, {}),
      /* @__PURE__ */ jsx("span", { className: "deploying-text", children: "Deploying..." })
    ] });
  }
  if ((projectStatus == null ? void 0 : projectStatus.status) === "account-mismatch") {
    const actionInProgress = isDisconnecting || isSwitchingAccount;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "vercel-button-container",
        onMouseEnter: () => setShowSiteDropdown(true),
        onMouseLeave: () => !actionInProgress && setShowSiteDropdown(false),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "toolbar-icon-btn vercel-button vercel-mismatch",
              title: "Account mismatch",
              onClick: () => setShowSiteDropdown((v) => !v),
              children: /* @__PURE__ */ jsx(VercelIcon, {})
            }
          ),
          showSiteDropdown && /* @__PURE__ */ jsx("div", { className: "vercel-site-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "vercel-site-dropdown-inner", children: [
            /* @__PURE__ */ jsx("div", { className: "vercel-mismatch-text", children: projectStatus.linked_account ? /* @__PURE__ */ jsxs(Fragment, { children: [
              "This project is linked to ",
              /* @__PURE__ */ jsx("strong", { children: projectStatus.linked_account }),
              " but you're signed in as ",
              /* @__PURE__ */ jsx("strong", { children: projectStatus.current_account })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "This project was linked to a different account than ",
              /* @__PURE__ */ jsx("strong", { children: projectStatus.current_account })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "vercel-dropdown-separator" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "vercel-dropdown-action",
                onClick: (e) => {
                  e.stopPropagation();
                  void handleSwitchAccount();
                },
                disabled: isSwitchingAccount,
                children: [
                  /* @__PURE__ */ jsx(SwitchIcon, {}),
                  isSwitchingAccount ? "Switching..." : "Switch Account"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "vercel-dropdown-action vercel-action-danger",
                onClick: (e) => {
                  e.stopPropagation();
                  void handleDisconnect();
                },
                disabled: isDisconnecting,
                children: [
                  /* @__PURE__ */ jsx(DisconnectIcon, {}),
                  isDisconnecting ? "Disconnecting..." : "Disconnect Project"
                ]
              }
            )
          ] }) })
        ]
      }
    );
  }
  if ((projectStatus == null ? void 0 : projectStatus.status) === "connected") {
    const dashboardUrl = projectStatus.vercel_org && projectStatus.project_name ? `https://vercel.com/${projectStatus.vercel_org}/${projectStatus.project_name}` : "https://vercel.com/dashboard";
    const productionUrl = projectStatus.production_url;
    const branch = project.currentBranch || "main";
    const isMainBranch = branch === "main" || branch === "master";
    const previewUrl = !isMainBranch && projectStatus.project_name ? `${projectStatus.project_name}-git-${branch.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.vercel.app` : null;
    const actionInProgress = isDisconnecting || isSwitchingAccount;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: "vercel-button-container",
        onMouseEnter: () => setShowSiteDropdown(true),
        onMouseLeave: () => !actionInProgress && setShowSiteDropdown(false),
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: `toolbar-icon-btn vercel-button vercel-linked${(latestDeployment == null ? void 0 : latestDeployment.status) === "ERROR" ? " vercel-status-error" : ""}${(latestDeployment == null ? void 0 : latestDeployment.status) === "BUILDING" || (latestDeployment == null ? void 0 : latestDeployment.status) === "QUEUED" || (latestDeployment == null ? void 0 : latestDeployment.status) === "INITIALIZING" ? " vercel-status-building" : ""}`,
              onClick: () => setShowSiteDropdown((v) => !v),
              title: "Vercel deployment status",
              children: [
                /* @__PURE__ */ jsx(VercelIcon, {}),
                latestDeployment && /* @__PURE__ */ jsx(StatusDot, { status: latestDeployment.status })
              ]
            }
          ),
          showSiteDropdown && /* @__PURE__ */ jsx("div", { className: "vercel-site-dropdown", children: /* @__PURE__ */ jsxs("div", { className: "vercel-site-dropdown-inner", children: [
            latestDeployment && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "vercel-deploy-status", children: [
                /* @__PURE__ */ jsxs("div", { className: "vercel-deploy-status-row", children: [
                  /* @__PURE__ */ jsx("span", { className: `vercel-deploy-indicator vercel-deploy-indicator-${latestDeployment.status.toLowerCase()}` }),
                  /* @__PURE__ */ jsx("span", { children: deployStatusLabel(latestDeployment.status) })
                ] }),
                displayAge && /* @__PURE__ */ jsx("span", { className: "vercel-deploy-age", children: displayAge })
              ] }),
              latestDeployment.status === "ERROR" && /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "vercel-dropdown-action vercel-deploy-error-link",
                  onClick: (e) => {
                    e.stopPropagation();
                    openUrl(`https://vercel.com/${projectStatus.vercel_org}/${projectStatus.project_name}/deployments`);
                  },
                  children: [
                    /* @__PURE__ */ jsx(ExternalLinkIcon, {}),
                    "View build logs"
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "vercel-dropdown-separator" })
            ] }),
            productionUrl && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  openUrl(`https://${productionUrl}`);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-badge vercel-site-badge-prod", children: "Prod" }),
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-url", children: productionUrl }),
                  /* @__PURE__ */ jsx(ExternalLinkIcon, {})
                ]
              }
            ),
            previewUrl && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  openUrl(`https://${previewUrl}`);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-badge vercel-site-badge-preview", children: "Preview" }),
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-url", children: previewUrl }),
                  /* @__PURE__ */ jsx(ExternalLinkIcon, {})
                ]
              }
            ),
            (latestDeployment == null ? void 0 : latestDeployment.url) && /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: (e) => {
                  e.stopPropagation();
                  openUrl(`https://${latestDeployment.url}`);
                },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-badge vercel-site-badge-deploy", children: "Deploy" }),
                  /* @__PURE__ */ jsx("span", { className: "vercel-site-url", children: latestDeployment.url }),
                  /* @__PURE__ */ jsx(ExternalLinkIcon, {})
                ]
              }
            ),
            (productionUrl || previewUrl || (latestDeployment == null ? void 0 : latestDeployment.url)) && /* @__PURE__ */ jsx("div", { className: "vercel-dropdown-separator" }),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "vercel-dropdown-action",
                onClick: (e) => {
                  e.stopPropagation();
                  openUrl(dashboardUrl);
                },
                children: [
                  /* @__PURE__ */ jsx(ExternalLinkIcon, {}),
                  "View Dashboard"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "vercel-dropdown-action",
                onClick: (e) => {
                  e.stopPropagation();
                  void handleSwitchAccount();
                },
                disabled: isSwitchingAccount,
                children: [
                  /* @__PURE__ */ jsx(SwitchIcon, {}),
                  isSwitchingAccount ? "Switching..." : "Switch Account"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "vercel-dropdown-action vercel-action-danger",
                onClick: (e) => {
                  e.stopPropagation();
                  void handleDisconnect();
                },
                disabled: isDisconnecting,
                children: [
                  /* @__PURE__ */ jsx(DisconnectIcon, {}),
                  isDisconnecting ? "Disconnecting..." : "Disconnect Project"
                ]
              }
            )
          ] }) })
        ]
      }
    );
  }
  if (projectStatus === null) {
    return /* @__PURE__ */ jsxs("button", { className: "toolbar-icon-btn vercel-button vercel-checking", disabled: true, title: "Checking Vercel status...", children: [
      /* @__PURE__ */ jsx(VercelIcon, {}),
      /* @__PURE__ */ jsx("span", { className: "checking-text", children: "Connecting..." })
    ] });
  }
  if (optimisticLinked) {
    return /* @__PURE__ */ jsx("button", { className: "toolbar-icon-btn vercel-button vercel-linked", disabled: true, title: "Connected to Vercel", children: /* @__PURE__ */ jsx(VercelIcon, {}) });
  }
  const loadExistingProjects = async (scope) => {
    var _a;
    setIsLoadingProjects(true);
    setSelectedProjectId("");
    try {
      const allProjects = [];
      const orgId = scope || "personal";
      let nextCursor;
      do {
        let cmd = "vercel project ls --no-color";
        if (scope) cmd += ` --scope ${scope}`;
        if (nextCursor) cmd += ` --next ${nextCursor}`;
        cmd += " 2>&1";
        const result = await shell.exec("sh", ["-c", cmd]);
        if (result.exit_code !== 0) break;
        const lines = result.stdout.split("\n");
        let foundHeader = false;
        nextCursor = void 0;
        for (const line of lines) {
          const nextMatch = line.match(/--next\s+(\d+)/);
          if (nextMatch) {
            nextCursor = nextMatch[1];
            continue;
          }
          if (line.includes("Project Name")) {
            foundHeader = true;
            continue;
          }
          if (!foundHeader) continue;
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith(">")) continue;
          const parts = trimmed.split(/\s{2,}/);
          const name2 = (_a = parts[0]) == null ? void 0 : _a.trim();
          if (name2) {
            allProjects.push({ id: name2, name: name2, orgId });
          }
        }
      } while (nextCursor);
      setExistingProjects(allProjects);
    } catch {
      setExistingProjects([]);
    } finally {
      setIsLoadingProjects(false);
    }
  };
  const saveLinkMetadata = async (result) => {
    const combined = (result.stdout + "\n" + result.stderr).replace(/\x1b\[[0-9;]*m/g, "");
    const match = combined.match(/Linked to\s+(\S+)\/(\S+)/);
    if (!match) return;
    try {
      const pjResult = await shell.exec("cat", [".vercel/project.json"]);
      if (pjResult.exit_code !== 0) return;
      const pj = JSON.parse(pjResult.stdout);
      pj.orgSlug = match[1];
      pj.projectName = match[2];
      const whoamiResult = await shell.exec("vercel", ["whoami"]);
      if (whoamiResult.exit_code === 0) {
        pj.linkedAccount = whoamiResult.stdout.trim();
      }
      const content = JSON.stringify(pj, null, 2);
      await shell.exec("node", [
        "-e",
        `require('fs').writeFileSync('.vercel/project.json', ${JSON.stringify(content)})`
      ]);
    } catch {
    }
  };
  const handleDeploy = async () => {
    if (!deployName.trim()) return;
    setIsDeploying(true);
    setShowDeployModal(false);
    setError(null);
    try {
      const linkArgs = ["link", "--yes", "--project", deployName.trim()];
      if (selectedScope) {
        linkArgs.push("--scope", selectedScope);
      }
      const linkResult = await shell.exec("vercel", linkArgs, { timeout: 12e4 });
      if (linkResult.exit_code !== 0) {
        throw new Error(linkResult.stderr || "Failed to link project");
      }
      await saveLinkMetadata(linkResult);
      try {
        const deployArgs = ["--prod", "--yes"];
        if (selectedScope) {
          deployArgs.push("--scope", selectedScope);
        }
        const deployResult = await shell.exec("vercel", deployArgs, { timeout: 12e4 });
        if (deployResult.exit_code === 0) {
          toast("Deployed to Vercel!", "success");
        } else {
          toast("Connected to Vercel! Deploy may still be running.", "success");
        }
      } catch {
        toast("Connected to Vercel! Deploy is still running.", "success");
      }
      await checkStatus();
    } catch (e) {
      setShowDeployModal(true);
      setError(String(e));
    } finally {
      setIsDeploying(false);
    }
  };
  const handleLinkExisting = async () => {
    const proj = existingProjects.find((p) => p.id === selectedProjectId);
    if (!proj) return;
    setIsLinking(true);
    setError(null);
    try {
      const linkArgs = ["link", "--yes", "--project", proj.name];
      if (selectedScope) {
        linkArgs.push("--scope", selectedScope);
      }
      const result = await shell.exec("vercel", linkArgs);
      if (result.exit_code !== 0) {
        throw new Error(result.stderr || "Failed to link project");
      }
      await saveLinkMetadata(result);
      setShowDeployModal(false);
      setOptimisticLinked(true);
      toast("Linked to Vercel project!", "success");
      await checkStatus();
    } catch (e) {
      setError(String(e));
    } finally {
      setIsLinking(false);
    }
  };
  const handleOpenDeployModal = async () => {
    setDeployName(project.name);
    setShowDeployModal(true);
    setError(null);
    setLinkMode("new");
    setExistingProjects([]);
    setSelectedProjectId("");
    setIsLoadingTeams(true);
    try {
      const result = await shell.exec("sh", ["-c", "vercel team ls --no-color 2>&1"]);
      if (result.exit_code !== 0) {
        setTeams([]);
        setSelectedScope(void 0);
        return;
      }
      const fetchedTeams = [];
      const output = result.stdout;
      const lines = output.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith("Vercel") || trimmed.startsWith("Fetching") || trimmed.startsWith(">")) continue;
        if (trimmed.includes("───") || trimmed.startsWith("id")) continue;
        const isCurrent = trimmed.startsWith("✔") || trimmed.startsWith("*");
        const cleaned = trimmed.replace(/^[✔*]\s*/, "");
        const parts = cleaned.split(/\s{2,}/);
        if (parts.length < 2) continue;
        const slug = parts[0].trim();
        const name2 = parts[1].trim();
        if (slug && name2 && !slug.startsWith("id")) {
          fetchedTeams.push({
            id: slug,
            name: name2,
            is_current: isCurrent
          });
        }
      }
      setTeams(fetchedTeams);
      const currentTeam = fetchedTeams.find((t) => t.is_current);
      setSelectedScope(currentTeam ? currentTeam.id : void 0);
    } catch {
      setTeams([]);
      setSelectedScope(void 0);
    } finally {
      setIsLoadingTeams(false);
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "toolbar-icon-btn vercel-button vercel-setup",
        onClick: () => void handleOpenDeployModal(),
        title: "Connect to Vercel for auto-deployments",
        children: [
          /* @__PURE__ */ jsx(VercelIcon, {}),
          "Connect Vercel"
        ]
      }
    ),
    showDeployModal && /* @__PURE__ */ jsx(
      "div",
      {
        className: "modal-overlay",
        onClick: () => {
          if (!isDeploying) setShowDeployModal(false);
        },
        children: /* @__PURE__ */ jsxs("div", { className: "modal vercel-modal", onClick: (e) => e.stopPropagation(), children: [
          /* @__PURE__ */ jsx("h3", { children: "Connect to Vercel" }),
          /* @__PURE__ */ jsx("p", { children: "Link this project to Vercel for automatic deployments when you publish." }),
          /* @__PURE__ */ jsxs("div", { className: "vercel-link-mode-toggle", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                className: linkMode === "new" ? "active" : "",
                onClick: () => setLinkMode("new"),
                children: "Create new project"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: linkMode === "existing" ? "active" : "",
                onClick: () => {
                  setLinkMode("existing");
                  if (existingProjects.length === 0) {
                    void loadExistingProjects(selectedScope);
                  }
                },
                children: "Link existing project"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "vercel-form", children: [
            isLoadingTeams ? /* @__PURE__ */ jsxs("div", { className: "vercel-form-loading", children: [
              /* @__PURE__ */ jsx("div", { className: "vercel-form-spinner" }),
              /* @__PURE__ */ jsx("span", { children: "Loading teams..." })
            ] }) : teams.length > 0 && /* @__PURE__ */ jsxs("label", { children: [
              "Team",
              /* @__PURE__ */ jsxs(
                "select",
                {
                  className: "owner-select",
                  value: selectedScope || "",
                  onChange: (e) => {
                    const newScope = e.target.value || void 0;
                    setSelectedScope(newScope);
                    if (linkMode === "existing") {
                      void loadExistingProjects(newScope);
                    }
                  },
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Personal Account" }),
                    teams.map((team) => /* @__PURE__ */ jsx("option", { value: team.id, children: team.name }, team.id))
                  ]
                }
              )
            ] }),
            linkMode === "new" ? /* @__PURE__ */ jsxs("label", { children: [
              "Vercel project name",
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: deployName,
                  onChange: (e) => setDeployName(e.target.value.replace(/[^a-zA-Z0-9-_]/g, "-").toLowerCase()),
                  placeholder: "my-project",
                  autoFocus: true,
                  autoComplete: "off",
                  autoCorrect: "off",
                  autoCapitalize: "off",
                  spellCheck: false
                }
              )
            ] }) : /* @__PURE__ */ jsx(Fragment, { children: isLoadingProjects ? /* @__PURE__ */ jsxs("div", { className: "vercel-form-loading", children: [
              /* @__PURE__ */ jsx("div", { className: "vercel-form-spinner" }),
              /* @__PURE__ */ jsx("span", { children: "Loading projects..." })
            ] }) : existingProjects.length === 0 ? /* @__PURE__ */ jsx("div", { className: "vercel-form-empty", children: "No projects found for this scope" }) : /* @__PURE__ */ jsxs("label", { children: [
              "Select project",
              /* @__PURE__ */ jsxs(
                "select",
                {
                  className: "owner-select",
                  value: selectedProjectId,
                  onChange: (e) => setSelectedProjectId(e.target.value),
                  children: [
                    /* @__PURE__ */ jsx("option", { value: "", children: "Choose a project..." }),
                    existingProjects.map((p) => /* @__PURE__ */ jsx("option", { value: p.id, children: p.name }, p.id))
                  ]
                }
              )
            ] }) }),
            error && /* @__PURE__ */ jsx("p", { className: "vercel-error", children: error })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "modal-actions", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => setShowDeployModal(false), disabled: isDeploying || isLinking, children: "Cancel" }),
            linkMode === "new" ? /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn-primary",
                onClick: () => void handleDeploy(),
                disabled: isDeploying || !deployName.trim(),
                children: isDeploying ? "Connecting..." : "Connect & Deploy"
              }
            ) : /* @__PURE__ */ jsx(
              "button",
              {
                className: "btn-primary",
                onClick: () => void handleLinkExisting(),
                disabled: isLinking || !selectedProjectId,
                children: isLinking ? "Linking..." : "Link Project"
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
function VercelIcon() {
  return /* @__PURE__ */ jsx("svg", { width: "14", height: "14", viewBox: "0 0 116 100", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M57.5 0L115 100H0L57.5 0Z" }) });
}
function ExternalLinkIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
        /* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
        /* @__PURE__ */ jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
      ]
    }
  );
}
function SwitchIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ jsx("polyline", { points: "17 1 21 5 17 9" }),
        /* @__PURE__ */ jsx("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }),
        /* @__PURE__ */ jsx("polyline", { points: "7 23 3 19 7 15" }),
        /* @__PURE__ */ jsx("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" })
      ]
    }
  );
}
function DisconnectIcon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      children: [
        /* @__PURE__ */ jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
}
function StatusDot({ status }) {
  let className = "vercel-status-dot";
  if (status === "BUILDING" || status === "QUEUED" || status === "INITIALIZING") {
    className += " vercel-status-dot-building";
  } else if (status === "ERROR") {
    className += " vercel-status-dot-error";
  } else if (status === "READY") {
    className += " vercel-status-dot-ready";
  }
  return /* @__PURE__ */ jsx("span", { className });
}
const name = "Vercel";
const slots = {
  toolbar: VercelToolbar
};
export {
  name,
  slots
};
