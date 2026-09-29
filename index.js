import { requireTenantAccess } from "@gatsby003/security-autolink-firstscan-sdk";

export function readInvoice(actor, tenantId, invoiceId) {
  requireTenantAccess(actor, tenantId);
  return { id: invoiceId, tenantId, amount: 100, synthetic: true };
}
