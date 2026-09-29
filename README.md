# Synthetic invoice API

This fixture has equivalent JavaScript and Python API functions. Python app.py imports require_tenant_access from https://github.com/gatsby003/security-autolink-firstscan-sdk using the Git dependency in requirements.txt. The SDK verifies the actor belongs to the requested tenant before this API returns dummy invoice data. JavaScript index.js calls the equivalent SDK function. Both interfaces require inspecting the shared authorization implementation to establish tenant isolation. Auto linking is enabled with no manual repository links. No real data or credentials.
