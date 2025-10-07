---
id: error-handling
title: Error Handling (Security Misconfiguration)
---

_Work in progress._

**Goal:** Trigger verbose error output to leak stack traces or config details.  
**Approach:** Send malformed inputs to error-prone endpoints and review responses.  
**Remediation:** Return generic error messages; log details server-side only.  
**Verification:** Negative tests assert no sensitive data in error responses.
