---
id: vulnerable-library
title: Vulnerable Library (Using components with known vulnerabilities)
---

_Work in progress._

**Goal:** Identify and fix a dependency with known CVEs.  
**Approach:** Run `npm audit` / SCA tools, confirm CVE, reproduce risk if possible.  
**Remediation:** Upgrade to a patched version; consider lockfile maintenance.  
**Verification:** Re-run audits and tests; validate the vulnerable path is no longer present.
