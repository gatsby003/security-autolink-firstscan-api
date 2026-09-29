# Synthetic invoice API

The readInvoice function calls requireTenantAccess from https://github.com/gatsby003/security-autolink-firstscan-sdk before returning dummy invoice data. package.json declares that Git dependency. Tenant authorization is implemented in the SDK, so security analysis of this API must follow that boundary. This fixture has no manual repository links and is for first-scan automatic discovery testing. No real customer data or credentials.
