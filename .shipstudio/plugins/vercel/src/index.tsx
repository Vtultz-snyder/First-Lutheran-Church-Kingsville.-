/**
 * Vercel Plugin for Ship Studio
 *
 * Provides Vercel deployment integration via the toolbar slot.
 * Uses shell.exec() to call Vercel CLI directly.
 */
import { useState, useRef, useEffect } from 'react';

// ============ CSS injection ============

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

// ============ SDK access via window globals ============

interface PluginContext {
  pluginId: string;
  project: { name: string; path: string; currentBranch: string } | null;
  actions: {
    showToast: (msg: string, type?: 'success' | 'error') => void;
    openUrl: (url: string) => void;
    openTerminal: (command: string, args: string[], options?: { title?: string }) => Promise<number | null>;
  };
  shell: {
    exec: (
      command: string,
      args: string[],
      options?: { timeout?: number }
    ) => Promise<{ stdout: string; stderr: string; exit_code: number }>;
  };
}

function getCtx(): PluginContext {
  // Try React Context ref first (newer API)
  const _w = window as any;
  const React = _w.__SHIPSTUDIO_REACT__;
  const CtxRef = _w.__SHIPSTUDIO_PLUGIN_CONTEXT_REF__;

  if (CtxRef && React?.useContext) {
    const ctx = React.useContext(CtxRef) as PluginContext | null;
    if (ctx) return ctx;
  }

  // Fall back to legacy global
  const directCtx = _w.__SHIPSTUDIO_PLUGIN_CONTEXT__ as PluginContext | undefined;
  if (directCtx) return directCtx;

  throw new Error('Plugin context not available');
}

// ============ Types ============

interface VercelCliStatus {
  installed: boolean;
  authenticated: boolean;
}

interface ProjectVercelStatus {
  status: 'not-linked' | 'not-git-connected' | 'connected' | 'account-mismatch';
  project_name: string | null;
  vercel_org: string | null;
  production_url: string | null;
  staging_url: string | null;
  linked_account: string | null;
  current_account: string | null;
}

interface VercelTeam {
  id: string;
  name: string;
  is_current: boolean;
}

interface VercelProject {
  id: string;
  name: string;
  orgId: string;
}

type DeploymentStatus = 'READY' | 'BUILDING' | 'ERROR' | 'QUEUED' | 'CANCELED' | 'INITIALIZING';

interface DeploymentInfo {
  status: DeploymentStatus;
  url: string;
  age: string;
}

function deployStatusLabel(status: DeploymentStatus): string {
  switch (status) {
    case 'READY': return 'Ready';
    case 'BUILDING': return 'Building...';
    case 'ERROR': return 'Error';
    case 'QUEUED': return 'Queued...';
    case 'CANCELED': return 'Canceled';
    case 'INITIALIZING': return 'Initializing...';
  }
}

function parseAgeToSeconds(age: string): number {
  const match = age.match(/^(\d+)(s|m|h|d)$/);
  if (!match) return 0;
  const value = parseInt(match[1], 10);
  switch (match[2]) {
    case 's': return value;
    case 'm': return value * 60;
    case 'h': return value * 3600;
    case 'd': return value * 86400;
    default: return 0;
  }
}

function formatSecondsToAge(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  return `${Math.floor(seconds / 86400)}d`;
}

// ============ Toolbar component ============

function VercelToolbar() {
  const ctx = getCtx();
  const project = ctx.project;
  const shell = ctx.shell;
  const toast = ctx.actions.showToast;
  const openUrl = ctx.actions.openUrl;

  const [cliStatus, setCliStatus] = useState<VercelCliStatus | null>(null);
  const [hasGitRemote, setHasGitRemote] = useState(false);
  const [projectStatus, setProjectStatus] = useState<ProjectVercelStatus | null>(null);
  const [isInstalling, setIsInstalling] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [showDeployModal, setShowDeployModal] = useState(false);
  const [showSiteDropdown, setShowSiteDropdown] = useState(false);
  const [deployName, setDeployName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [teams, setTeams] = useState<VercelTeam[]>([]);
  const [selectedScope, setSelectedScope] = useState<string | undefined>(undefined);
  const [isLoadingTeams, setIsLoadingTeams] = useState(false);
  const [linkMode, setLinkMode] = useState<'new' | 'existing'>('new');
  const [existingProjects, setExistingProjects] = useState<VercelProject[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [isLoadingProjects, setIsLoadingProjects] = useState(false);
  const [isLinking, setIsLinking] = useState(false);
  const [optimisticLinked, setOptimisticLinked] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [isSwitchingAccount, setIsSwitchingAccount] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const pollRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [latestDeployment, setLatestDeployment] = useState<DeploymentInfo | null>(null);
  const prevDeployStatusRef = useRef<DeploymentStatus | null>(null);
  const [displayAge, setDisplayAge] = useState<string | null>(null);
  const ageBaseRef = useRef<{ seconds: number; timestamp: number } | null>(null);
  const optimisticBuildRef = useRef<number | null>(null);

  // Inject CSS on mount, remove on unmount
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-vercel-plugin', 'true');
    style.textContent = VERCEL_CSS;
    document.head.appendChild(style);
    return () => {
      style.remove();
    };
  }, []);

  // Check CLI status on mount and when project changes
  useEffect(() => {
    void checkStatus();
    return () => {
      if (pollRef.current) clearTimeout(pollRef.current);
    };
  }, [project?.path]);

  // Poll for git remote when none is detected
  useEffect(() => {
    if (hasGitRemote) return;
    const interval = setInterval(async () => {
      const result = await shell.exec('git', ['remote', '-v']).catch(() => null);
      if (result && result.exit_code === 0 && result.stdout.trim().length > 0) {
        setHasGitRemote(true);
        void checkStatus();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [hasGitRemote]);

  // Poll deployment status when project is connected
  useEffect(() => {
    if (projectStatus?.status !== 'connected') return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const poll = async () => {
      const deployment = await fetchLatestDeployment();
      if (cancelled) return;

      // During optimistic build, keep showing building until real build appears or timeout
      if (optimisticBuildRef.current) {
        const elapsed = Date.now() - optimisticBuildRef.current;
        const isRealBuild = deployment &&
          (deployment.status === 'BUILDING' || deployment.status === 'QUEUED' || deployment.status === 'INITIALIZING');
        if (isRealBuild) {
          optimisticBuildRef.current = null;
        } else if (elapsed < 30000) {
          if (!cancelled) timeoutId = setTimeout(() => void poll(), 3000);
          return;
        } else {
          optimisticBuildRef.current = null;
        }
      }

      if (deployment) {
        const prevStatus = prevDeployStatusRef.current;

        if (prevStatus !== null) {
          const wasActive = prevStatus === 'BUILDING' || prevStatus === 'QUEUED' || prevStatus === 'INITIALIZING';
          if (wasActive && deployment.status === 'READY') {
            toast('Deployment is live!', 'success');
          } else if (wasActive && deployment.status === 'ERROR') {
            toast('Deployment failed', 'error');
          }
        }

        prevDeployStatusRef.current = deployment.status;
        setLatestDeployment(deployment);
      }

      if (cancelled) return;

      const isActive = deployment &&
        (deployment.status === 'BUILDING' || deployment.status === 'QUEUED' || deployment.status === 'INITIALIZING');
      const delay = isActive ? 5000 : 15000;
      timeoutId = setTimeout(() => void poll(), delay);
    };

    timeoutId = setTimeout(() => void poll(), 2000);

    return () => {
      cancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [projectStatus?.status]);

  // Sync ageBaseRef whenever latestDeployment updates from a poll
  useEffect(() => {
    if (!latestDeployment?.age) return;
    const seconds = parseAgeToSeconds(latestDeployment.age);
    ageBaseRef.current = { seconds, timestamp: Date.now() };
    setDisplayAge(formatSecondsToAge(seconds));
  }, [latestDeployment?.age]);

  // Tick displayAge every second during active deployments
  useEffect(() => {
    if (!latestDeployment) return;
    const isActive = latestDeployment.status === 'BUILDING' || latestDeployment.status === 'QUEUED' || latestDeployment.status === 'INITIALIZING';
    if (!isActive || !ageBaseRef.current) return;

    const interval = setInterval(() => {
      if (!ageBaseRef.current) return;
      const elapsed = Math.floor((Date.now() - ageBaseRef.current.timestamp) / 1000);
      setDisplayAge(formatSecondsToAge(ageBaseRef.current.seconds + elapsed));
    }, 1000);

    return () => clearInterval(interval);
  }, [latestDeployment?.status, latestDeployment?.age]);

  // Watch for git pushes to trigger optimistic building state
  useEffect(() => {
    if (projectStatus?.status !== 'connected') return;

    let cancelled = false;
    let lastRemoteSha: string | null = null;

    const check = async () => {
      const branch = project.currentBranch || 'main';
      const result = await shell.exec('git', ['rev-parse', `origin/${branch}`]).catch(() => null);
      if (cancelled || !result || result.exit_code !== 0) return;

      const sha = result.stdout.trim();
      if (lastRemoteSha !== null && sha !== lastRemoteSha) {
        optimisticBuildRef.current = Date.now();
        prevDeployStatusRef.current = null;
        setLatestDeployment({ status: 'BUILDING', url: '', age: '' });
        setDisplayAge('waiting');
        ageBaseRef.current = null;
      }
      lastRemoteSha = sha;
    };

    const interval = setInterval(() => void check(), 3000);
    void check();

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [projectStatus?.status, project?.currentBranch]);

  const checkStatus = async () => {
    try {
      // Check if git remote is configured
      const remoteResult = await shell.exec('git', ['remote', '-v']);
      setHasGitRemote(remoteResult.exit_code === 0 && remoteResult.stdout.trim().length > 0);

      // Check if vercel CLI is installed
      const versionResult = await shell.exec('vercel', ['--version']);
      const installed = versionResult.exit_code === 0;

      if (!installed) {
        setCliStatus({ installed: false, authenticated: false });
        return;
      }

      // Check if authenticated
      const whoamiResult = await shell.exec('vercel', ['whoami']);
      const authenticated = whoamiResult.exit_code === 0;
      const currentAccount = authenticated ? whoamiResult.stdout.trim() : null;

      setCliStatus({ installed: true, authenticated });

      if (authenticated && project?.path) {
        // Read .vercel/project.json to check link status
        const catResult = await shell.exec('cat', ['.vercel/project.json']);
        if (catResult.exit_code !== 0) {
          setProjectStatus({
            status: 'not-linked',
            project_name: null,
            vercel_org: null,
            production_url: null,
            staging_url: null,
            linked_account: null,
            current_account: currentAccount,
          });
          return;
        }

        try {
          const projectJson = JSON.parse(catResult.stdout);
          const projectId = projectJson.projectId;
          const orgId = projectJson.orgId;
          const linkedAccount: string | null = projectJson.linkedAccount || null;

          if (!projectId || !orgId) {
            setProjectStatus({
              status: 'not-linked',
              project_name: null,
              vercel_org: null,
              production_url: null,
              staging_url: null,
              linked_account: null,
              current_account: currentAccount,
            });
            return;
          }

          // Check for account mismatch if linkedAccount is stored
          if (linkedAccount && currentAccount && linkedAccount !== currentAccount) {
            setProjectStatus({
              status: 'account-mismatch',
              project_name: projectJson.projectName || null,
              vercel_org: projectJson.orgSlug || null,
              production_url: null,
              staging_url: null,
              linked_account: linkedAccount,
              current_account: currentAccount,
            });
            return;
          }

          let projectName: string | null = projectJson.projectName || null;
          let vercelOrg: string | null = projectJson.orgSlug || null;

          // Get org slug and project name from vercel ls
          // Output may be in stdout, stderr, or both depending on shell proxy
          const lsResult = await shell.exec('sh', ['-c', 'vercel ls --no-color 2>&1']).catch(() => null);
          if (lsResult && lsResult.exit_code === 0) {
            const lsOutput = lsResult.stdout;
            const headerMatch = lsOutput.match(/Deployments?\s+for\s+(\S+)\/(\S+)/);
            if (headerMatch) {
              vercelOrg = headerMatch[1];
              if (!projectName) projectName = headerMatch[2];
            }
          } else if (lsResult && lsResult.exit_code !== 0 && !linkedAccount) {
            // vercel ls failed and no linkedAccount stored — likely wrong account
            setProjectStatus({
              status: 'account-mismatch',
              project_name: projectJson.projectName || null,
              vercel_org: projectJson.orgSlug || null,
              production_url: null,
              staging_url: null,
              linked_account: linkedAccount,
              current_account: currentAccount,
            });
            return;
          }

          // Fetch real production domains from Vercel API, fall back to default
          const domains = await fetchProjectDomains(projectId);
          const productionUrl = domains.length > 0 ? domains[0] : null;

          setProjectStatus({
            status: 'connected',
            project_name: projectName,
            vercel_org: vercelOrg,
            production_url: productionUrl,
            staging_url: null,
            linked_account: linkedAccount || currentAccount,
            current_account: currentAccount,
          });
        } catch {
          setProjectStatus({
            status: 'not-linked',
            project_name: null,
            vercel_org: null,
            production_url: null,
            staging_url: null,
            linked_account: null,
            current_account: currentAccount,
          });
        }
      }
    } catch {
      setCliStatus({ installed: false, authenticated: false });
    }
  };

  const fetchLatestDeployment = async (): Promise<DeploymentInfo | null> => {
    try {
      const result = await shell.exec('sh', ['-c', 'vercel ls --no-color 2>&1'], { timeout: 15000 });
      if (result.exit_code !== 0) return null;

      const lines = result.stdout.split('\n');
      let headerIndex = -1;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('Status')) {
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

        const statusText = statusMatch[1].toUpperCase() as DeploymentStatus;

        const urlMatch = line.match(/(\S+\.vercel\.app)/);
        const url = urlMatch ? urlMatch[1] : '';

        const ageMatch = line.match(/^\s*(\S+)/);
        const age = ageMatch ? ageMatch[1] : '';

        return { status: statusText, url, age };
      }

      return null;
    } catch {
      return null;
    }
  };

  const fetchProjectDomains = async (projectId: string): Promise<string[]> => {
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
      const result = await shell.exec('node', ['-e', script, projectId], { timeout: 10000 });
      if (result.exit_code !== 0) return [];
      return JSON.parse(result.stdout.trim());
    } catch {
      return [];
    }
  };

  // Always render the icon so the plugin list shows it, but disable when not ready
  if (!cliStatus || !project) {
    return (
      <button className="toolbar-icon-btn vercel-button" disabled title="Vercel">
        <VercelIcon />
      </button>
    );
  }

  if (!hasGitRemote && projectStatus?.status !== 'connected') {
    return (
      <button className="toolbar-icon-btn vercel-button" disabled title="Push to GitHub to enable Vercel">
        <VercelIcon />
      </button>
    );
  }

  // ---- Install CLI ----
  if (!cliStatus.installed) {
    return (
      <button
        className="toolbar-icon-btn vercel-button vercel-install"
        onClick={async () => {
          setIsInstalling(true);
          try {
            // Try brew first, fallback to npm
            const brewResult = await shell.exec('brew', ['install', 'vercel-cli']);
            if (brewResult.exit_code !== 0) {
              const npmResult = await shell.exec('npm', ['install', '-g', 'vercel']);
              if (npmResult.exit_code !== 0) {
                throw new Error('Failed to install via brew and npm');
              }
            }
            toast('Vercel CLI installed!', 'success');
            await checkStatus();
          } catch {
            toast('Failed to install Vercel CLI', 'error');
          } finally {
            setIsInstalling(false);
          }
        }}
        disabled={isInstalling}
        title="Install Vercel CLI via npm"
      >
        <VercelIcon />
        {isInstalling ? 'Installing...' : 'Install Vercel'}
      </button>
    );
  }

  // ---- Login handler — opens interactive terminal modal ----
  const handleLogin = async () => {
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    try {
      await ctx.actions.openTerminal('vercel', ['login'], { title: 'Vercel Account' });
      // Terminal closed — re-check auth status regardless of exit code
      // (user may have completed login even if the process was cancelled)
      await checkStatus();
    } finally {
      setIsLoggingIn(false);
    }
  };

  // ---- Disconnect / switch account handlers (defined before early returns that use them) ----
  const handleDisconnect = async () => {
    setIsDisconnecting(true);
    try {
      await shell.exec('rm', ['-rf', '.vercel']);
      setProjectStatus({
        status: 'not-linked',
        project_name: null,
        vercel_org: null,
        production_url: null,
        staging_url: null,
        linked_account: null,
        current_account: null,
      });
      setOptimisticLinked(false);
      toast('Project disconnected from Vercel', 'success');
    } catch {
      toast('Failed to disconnect project', 'error');
    } finally {
      setIsDisconnecting(false);
    }
  };

  const handleSwitchAccount = async () => {
    setIsSwitchingAccount(true);
    try {
      await shell.exec('vercel', ['logout']).catch(() => {});
      setCliStatus({ installed: true, authenticated: false });
      setProjectStatus(null);
      // Open the interactive terminal for login
      void handleLogin();
    } catch {
      toast('Failed to sign out', 'error');
    } finally {
      setIsSwitchingAccount(false);
    }
  };

  // ---- Not authenticated ----
  if (!cliStatus.authenticated) {
    return (
      <button
        className="toolbar-icon-btn vercel-button vercel-connect"
        title="Connect your Vercel account"
        onClick={() => void handleLogin()}
        disabled={isLoggingIn}
      >
        <VercelIcon />
        {isLoggingIn ? 'Connecting...' : 'Connect Vercel'}
      </button>
    );
  }

  // ---- Deploying ----
  if (isDeploying) {
    return (
      <button className="toolbar-icon-btn vercel-button vercel-deploying" disabled title="Deploying to Vercel...">
        <VercelIcon />
        <span className="deploying-text">Deploying...</span>
      </button>
    );
  }

  // ---- Account mismatch: show warning with actions ----
  if (projectStatus?.status === 'account-mismatch') {
    const actionInProgress = isDisconnecting || isSwitchingAccount;
    return (
      <div
        className="vercel-button-container"
        onMouseEnter={() => setShowSiteDropdown(true)}
        onMouseLeave={() => !actionInProgress && setShowSiteDropdown(false)}
      >
        <button
          className="toolbar-icon-btn vercel-button vercel-mismatch"
          title="Account mismatch"
          onClick={() => setShowSiteDropdown((v) => !v)}
        >
          <VercelIcon />
        </button>

        {showSiteDropdown && (
          <div className="vercel-site-dropdown">
            <div className="vercel-site-dropdown-inner">
              <div className="vercel-mismatch-text">
                {projectStatus.linked_account ? (
                  <>This project is linked to <strong>{projectStatus.linked_account}</strong> but you&apos;re signed in as <strong>{projectStatus.current_account}</strong></>
                ) : (
                  <>This project was linked to a different account than <strong>{projectStatus.current_account}</strong></>
                )}
              </div>
              <div className="vercel-dropdown-separator" />
              <button
                className="vercel-dropdown-action"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleSwitchAccount();
                }}
                disabled={isSwitchingAccount}
              >
                <SwitchIcon />
                {isSwitchingAccount ? 'Switching...' : 'Switch Account'}
              </button>
              <button
                className="vercel-dropdown-action vercel-action-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleDisconnect();
                }}
                disabled={isDisconnecting}
              >
                <DisconnectIcon />
                {isDisconnecting ? 'Disconnecting...' : 'Disconnect Project'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---- Connected: show dashboard link + site dropdown ----
  if (projectStatus?.status === 'connected') {
    const dashboardUrl =
      projectStatus.vercel_org && projectStatus.project_name
        ? `https://vercel.com/${projectStatus.vercel_org}/${projectStatus.project_name}`
        : 'https://vercel.com/dashboard';
    const productionUrl = projectStatus.production_url;
    const branch = project.currentBranch || 'main';
    const isMainBranch = branch === 'main' || branch === 'master';
    const previewUrl =
      !isMainBranch && projectStatus.project_name
        ? `${projectStatus.project_name}-git-${branch.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.vercel.app`
        : null;
    const actionInProgress = isDisconnecting || isSwitchingAccount;

    return (
      <div
        className="vercel-button-container"
        onMouseEnter={() => setShowSiteDropdown(true)}
        onMouseLeave={() => !actionInProgress && setShowSiteDropdown(false)}
      >
        <button
          className={`toolbar-icon-btn vercel-button vercel-linked${
            latestDeployment?.status === 'ERROR' ? ' vercel-status-error' : ''
          }${
            latestDeployment?.status === 'BUILDING' || latestDeployment?.status === 'QUEUED' || latestDeployment?.status === 'INITIALIZING' ? ' vercel-status-building' : ''
          }`}
          onClick={() => setShowSiteDropdown((v) => !v)}
          title="Vercel deployment status"
        >
          <VercelIcon />
          {latestDeployment && <StatusDot status={latestDeployment.status} />}
        </button>

        {showSiteDropdown && (
          <div className="vercel-site-dropdown">
            <div className="vercel-site-dropdown-inner">
              {latestDeployment && (
                <>
                  <div className="vercel-deploy-status">
                    <div className="vercel-deploy-status-row">
                      <span className={`vercel-deploy-indicator vercel-deploy-indicator-${latestDeployment.status.toLowerCase()}`} />
                      <span>{deployStatusLabel(latestDeployment.status)}</span>
                    </div>
                    {displayAge && (
                      <span className="vercel-deploy-age">{displayAge}</span>
                    )}
                  </div>
                  {latestDeployment.status === 'ERROR' && (
                    <button
                      className="vercel-dropdown-action vercel-deploy-error-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        openUrl(`https://vercel.com/${projectStatus.vercel_org}/${projectStatus.project_name}/deployments`);
                      }}
                    >
                      <ExternalLinkIcon />
                      View build logs
                    </button>
                  )}
                  <div className="vercel-dropdown-separator" />
                </>
              )}
              {productionUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openUrl(`https://${productionUrl}`);
                  }}
                >
                  <span className="vercel-site-badge vercel-site-badge-prod">Prod</span>
                  <span className="vercel-site-url">{productionUrl}</span>
                  <ExternalLinkIcon />
                </button>
              )}
              {previewUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openUrl(`https://${previewUrl}`);
                  }}
                >
                  <span className="vercel-site-badge vercel-site-badge-preview">Preview</span>
                  <span className="vercel-site-url">{previewUrl}</span>
                  <ExternalLinkIcon />
                </button>
              )}
              {latestDeployment?.url && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openUrl(`https://${latestDeployment.url}`);
                  }}
                >
                  <span className="vercel-site-badge vercel-site-badge-deploy">Deploy</span>
                  <span className="vercel-site-url">{latestDeployment.url}</span>
                  <ExternalLinkIcon />
                </button>
              )}
              {(productionUrl || previewUrl || latestDeployment?.url) && (
                <div className="vercel-dropdown-separator" />
              )}
              <button
                className="vercel-dropdown-action"
                onClick={(e) => {
                  e.stopPropagation();
                  openUrl(dashboardUrl);
                }}
              >
                <ExternalLinkIcon />
                View Dashboard
              </button>
              <button
                className="vercel-dropdown-action"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleSwitchAccount();
                }}
                disabled={isSwitchingAccount}
              >
                <SwitchIcon />
                {isSwitchingAccount ? 'Switching...' : 'Switch Account'}
              </button>
              <button
                className="vercel-dropdown-action vercel-action-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  void handleDisconnect();
                }}
                disabled={isDisconnecting}
              >
                <DisconnectIcon />
                {isDisconnecting ? 'Disconnecting...' : 'Disconnect Project'}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ---- Still checking status ----
  if (projectStatus === null) {
    return (
      <button className="toolbar-icon-btn vercel-button vercel-checking" disabled title="Checking Vercel status...">
        <VercelIcon />
        <span className="checking-text">Connecting...</span>
      </button>
    );
  }

  // ---- Optimistic linked state ----
  if (optimisticLinked) {
    return (
      <button className="toolbar-icon-btn vercel-button vercel-linked" disabled title="Connected to Vercel">
        <VercelIcon />
      </button>
    );
  }

  // ---- Helper functions ----
  const loadExistingProjects = async (scope: string | undefined) => {
    setIsLoadingProjects(true);
    setSelectedProjectId('');
    try {
      const allProjects: VercelProject[] = [];
      const orgId = scope || 'personal';
      let nextCursor: string | undefined;

      do {
        let cmd = 'vercel project ls --no-color';
        if (scope) cmd += ` --scope ${scope}`;
        if (nextCursor) cmd += ` --next ${nextCursor}`;
        cmd += ' 2>&1';

        const result = await shell.exec('sh', ['-c', cmd]);
        if (result.exit_code !== 0) break;

        const lines = result.stdout.split('\n');
        let foundHeader = false;
        nextCursor = undefined;

        for (const line of lines) {
          // Extract pagination cursor from "vercel project ls --next 123456" hint
          const nextMatch = line.match(/--next\s+(\d+)/);
          if (nextMatch) {
            nextCursor = nextMatch[1];
            continue;
          }

          // Detect the header row to know when data lines start
          if (line.includes('Project Name')) {
            foundHeader = true;
            continue;
          }
          if (!foundHeader) continue;

          // Parse data lines: columns separated by 2+ spaces
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('>')) continue;

          const parts = trimmed.split(/\s{2,}/);
          const name = parts[0]?.trim();
          if (name) {
            allProjects.push({ id: name, name, orgId });
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

  // Save org slug + project name + linkedAccount from "Linked to <org>/<project>" output
  const saveLinkMetadata = async (result: { stdout: string; stderr: string }) => {
    const combined = (result.stdout + '\n' + result.stderr).replace(/\x1b\[[0-9;]*m/g, '');
    const match = combined.match(/Linked to\s+(\S+)\/(\S+)/);
    if (!match) return;
    try {
      const pjResult = await shell.exec('cat', ['.vercel/project.json']);
      if (pjResult.exit_code !== 0) return;
      const pj = JSON.parse(pjResult.stdout);
      pj.orgSlug = match[1];
      pj.projectName = match[2];
      // Store current account for mismatch detection
      const whoamiResult = await shell.exec('vercel', ['whoami']);
      if (whoamiResult.exit_code === 0) {
        pj.linkedAccount = whoamiResult.stdout.trim();
      }
      const content = JSON.stringify(pj, null, 2);
      await shell.exec('node', [
        '-e',
        `require('fs').writeFileSync('.vercel/project.json', ${JSON.stringify(content)})`,
      ]);
    } catch {
      // non-critical — checkStatus will still work via vercel ls
    }
  };

  const handleDeploy = async () => {
    if (!deployName.trim()) return;
    setIsDeploying(true);
    setShowDeployModal(false);
    setError(null);
    try {
      // Step 1: Link the project
      const linkArgs = ['link', '--yes', '--project', deployName.trim()];
      if (selectedScope) {
        linkArgs.push('--scope', selectedScope);
      }
      const linkResult = await shell.exec('vercel', linkArgs, { timeout: 120_000 });
      if (linkResult.exit_code !== 0) {
        throw new Error(linkResult.stderr || 'Failed to link project');
      }

      await saveLinkMetadata(linkResult);

      // Step 2: Production deploy — may take up to 2 minutes
      try {
        const deployArgs = ['--prod', '--yes'];
        if (selectedScope) {
          deployArgs.push('--scope', selectedScope);
        }
        const deployResult = await shell.exec('vercel', deployArgs, { timeout: 120_000 });
        if (deployResult.exit_code === 0) {
          toast('Deployed to Vercel!', 'success');
        } else {
          toast('Connected to Vercel! Deploy may still be running.', 'success');
        }
      } catch {
        // Deploy timed out or failed — project is still linked
        toast('Connected to Vercel! Deploy is still running.', 'success');
      }

      await checkStatus();
    } catch (e) {
      // If link failed, show error in modal
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
      const linkArgs = ['link', '--yes', '--project', proj.name];
      if (selectedScope) {
        linkArgs.push('--scope', selectedScope);
      }
      const result = await shell.exec('vercel', linkArgs);
      if (result.exit_code !== 0) {
        throw new Error(result.stderr || 'Failed to link project');
      }

      await saveLinkMetadata(result);

      setShowDeployModal(false);
      setOptimisticLinked(true);
      toast('Linked to Vercel project!', 'success');
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
    setLinkMode('new');
    setExistingProjects([]);
    setSelectedProjectId('');
    setIsLoadingTeams(true);

    try {
      // Parse teams from `vercel team ls`
      // Text output goes to stderr; format:
      //   id                           Team name
      // ✔ julianmemberstacks-projects  julianmemberstack's projects
      //   memberstack-team             Memberstack Team
      const result = await shell.exec('sh', ['-c', 'vercel team ls --no-color 2>&1']);
      if (result.exit_code !== 0) {
        setTeams([]);
        setSelectedScope(undefined);
        return;
      }

      const fetchedTeams: VercelTeam[] = [];
      const output = result.stdout;
      const lines = output.split('\n');

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed) continue;
        // Skip non-data lines
        if (trimmed.startsWith('Vercel') || trimmed.startsWith('Fetching') || trimmed.startsWith('>')) continue;
        if (trimmed.includes('───') || trimmed.startsWith('id')) continue;

        // Detect current team marker (✔ at start)
        const isCurrent = trimmed.startsWith('✔') || trimmed.startsWith('*');
        const cleaned = trimmed.replace(/^[✔*]\s*/, '');

        // Columns: slug (id)  Team name — separated by 2+ spaces
        const parts = cleaned.split(/\s{2,}/);
        if (parts.length < 2) continue;

        const slug = parts[0].trim();
        const name = parts[1].trim();

        if (slug && name && !slug.startsWith('id')) {
          fetchedTeams.push({
            id: slug,
            name,
            is_current: isCurrent,
          });
        }
      }

      setTeams(fetchedTeams);
      const currentTeam = fetchedTeams.find((t) => t.is_current);
      setSelectedScope(currentTeam ? currentTeam.id : undefined);
    } catch {
      setTeams([]);
      setSelectedScope(undefined);
    } finally {
      setIsLoadingTeams(false);
    }
  };

  // ---- Not linked: show Connect button ----
  return (
    <>
      <button
        className="toolbar-icon-btn vercel-button vercel-setup"
        onClick={() => void handleOpenDeployModal()}
        title="Connect to Vercel for auto-deployments"
      >
        <VercelIcon />
        Connect Vercel
      </button>

      {showDeployModal && (
        <div
          className="modal-overlay"
          onClick={() => {
            if (!isDeploying) setShowDeployModal(false);
          }}
        >
          <div className="modal vercel-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Connect to Vercel</h3>
            <p>Link this project to Vercel for automatic deployments when you publish.</p>

            <div className="vercel-link-mode-toggle">
              <button
                className={linkMode === 'new' ? 'active' : ''}
                onClick={() => setLinkMode('new')}
              >
                Create new project
              </button>
              <button
                className={linkMode === 'existing' ? 'active' : ''}
                onClick={() => {
                  setLinkMode('existing');
                  if (existingProjects.length === 0) {
                    void loadExistingProjects(selectedScope);
                  }
                }}
              >
                Link existing project
              </button>
            </div>

            <div className="vercel-form">
              {isLoadingTeams ? (
                <div className="vercel-form-loading">
                  <div className="vercel-form-spinner" />
                  <span>Loading teams...</span>
                </div>
              ) : (
                teams.length > 0 && (
                  <label>
                    Team
                    <select
                      className="owner-select"
                      value={selectedScope || ''}
                      onChange={(e) => {
                        const newScope = e.target.value || undefined;
                        setSelectedScope(newScope);
                        if (linkMode === 'existing') {
                          void loadExistingProjects(newScope);
                        }
                      }}
                    >
                      <option value="">Personal Account</option>
                      {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      ))}
                    </select>
                  </label>
                )
              )}

              {linkMode === 'new' ? (
                <label>
                  Vercel project name
                  <input
                    type="text"
                    value={deployName}
                    onChange={(e) =>
                      setDeployName(e.target.value.replace(/[^a-zA-Z0-9-_]/g, '-').toLowerCase())
                    }
                    placeholder="my-project"
                    autoFocus
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck={false}
                  />
                </label>
              ) : (
                <>
                  {isLoadingProjects ? (
                    <div className="vercel-form-loading">
                      <div className="vercel-form-spinner" />
                      <span>Loading projects...</span>
                    </div>
                  ) : existingProjects.length === 0 ? (
                    <div className="vercel-form-empty">No projects found for this scope</div>
                  ) : (
                    <label>
                      Select project
                      <select
                        className="owner-select"
                        value={selectedProjectId}
                        onChange={(e) => setSelectedProjectId(e.target.value)}
                      >
                        <option value="">Choose a project...</option>
                        {existingProjects.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name}
                          </option>
                        ))}
                      </select>
                    </label>
                  )}
                </>
              )}

              {error && <p className="vercel-error">{error}</p>}
            </div>

            <div className="modal-actions">
              <button onClick={() => setShowDeployModal(false)} disabled={isDeploying || isLinking}>
                Cancel
              </button>
              {linkMode === 'new' ? (
                <button
                  className="btn-primary"
                  onClick={() => void handleDeploy()}
                  disabled={isDeploying || !deployName.trim()}
                >
                  {isDeploying ? 'Connecting...' : 'Connect & Deploy'}
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={() => void handleLinkExisting()}
                  disabled={isLinking || !selectedProjectId}
                >
                  {isLinking ? 'Linking...' : 'Link Project'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ============ Icons ============

function VercelIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 116 100" fill="currentColor">
      <path d="M57.5 0L115 100H0L57.5 0Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}

function DisconnectIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function StatusDot({ status }: { status: DeploymentStatus }) {
  let className = 'vercel-status-dot';
  if (status === 'BUILDING' || status === 'QUEUED' || status === 'INITIALIZING') {
    className += ' vercel-status-dot-building';
  } else if (status === 'ERROR') {
    className += ' vercel-status-dot-error';
  } else if (status === 'READY') {
    className += ' vercel-status-dot-ready';
  }
  return <span className={className} />;
}

// ============ Plugin exports ============

export const name = 'Vercel';

export const slots: Record<string, React.ComponentType> = {
  toolbar: VercelToolbar,
};
