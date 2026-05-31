import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();

const blockedPathParts = new Set([
  ".claude",
  ".mcp.json",
  ".next",
  ".playwright-mcp",
  ".serena",
  ".vscode",
  "coverage",
  "dist",
  "node_modules",
  "output",
  "playwright-report",
  "src",
  "supabase",
  "test-results",
  "tmp"
]);

const blockedPathFragments = [
  "docs/security/",
  "docs/operations",
  ".env",
  "ownership-map",
  "hardening-report",
  "threat-model",
  "migration",
  "schema",
  "prod",
  "production"
];

const blockedContentPatterns = [
  new RegExp(["SUPABASE", "SERVICE", "ROLE", "KEY"].join("_"), "i"),
  new RegExp(["SUPABASE", "DB", "URL"].join("_"), "i"),
  /DATABASE_URL\s*[:=]/i,
  /SERVICE_ROLE\s*[:=]/i,
  /(?:API|ACCESS|AUTH|REFRESH|SESSION|PRIVATE|SECRET)[_-]?(?:KEY|TOKEN|SECRET|PASSWORD)\s*[:=]/i,
  /Authorization:\s*Bearer\s+[A-Za-z0-9._~-]+/i,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  /postgres(?:ql)?:\/\/[^ \n\r]+/i,
  /eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/
];

const maxTextFileBytes = 512 * 1024;
const failures = [];

function toRepoPath(filePath) {
  return path.relative(root, filePath).split(path.sep).join("/");
}

function isBlockedPath(repoPath) {
  const parts = repoPath.split("/");
  if (parts.some((part) => blockedPathParts.has(part))) {
    return true;
  }

  const lower = repoPath.toLowerCase();
  return blockedPathFragments.some((fragment) => lower.includes(fragment));
}

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === ".git") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const repoPath = toRepoPath(fullPath);

    if (isBlockedPath(repoPath)) {
      failures.push(`Blocked path: ${repoPath}`);
      continue;
    }

    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      failures.push(`Unexpected non-file entry: ${repoPath}`);
      continue;
    }

    const stats = statSync(fullPath);
    if (stats.size > maxTextFileBytes) {
      failures.push(`File too large for public docs repo: ${repoPath}`);
      continue;
    }

    const content = readFileSync(fullPath);
    if (content.includes(0)) {
      failures.push(`Binary-like file blocked: ${repoPath}`);
      continue;
    }

    const text = content.toString("utf8");
    for (const pattern of blockedContentPatterns) {
      if (pattern.test(text)) {
        failures.push(`Sensitive-looking content blocked in ${repoPath}: ${pattern}`);
      }
    }
  }
}

walk(root);

if (failures.length > 0) {
  console.error("Public repository validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Public repository validation passed.");
