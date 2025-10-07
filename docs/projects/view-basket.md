---
id: view-basket
title: View Basket (Broken Access Control)
---

_Work in progress._

**Goal:** Exploit missing access control to view another user’s basket.  
**Approach:** Identify insecure direct object references, test basket IDs, confirm unauthorized access.  
**Remediation:** Enforce server-side authorization checks; never trust client identifiers.  
**Verification:** Add tests that assert a user can only access their own basket.
