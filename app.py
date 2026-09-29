from tenant_auth import require_tenant_access

def read_invoice(actor, tenant_id, invoice_id):
    require_tenant_access(actor, tenant_id)
    return {"id": invoice_id, "tenant_id": tenant_id, "amount": 100, "synthetic": True}
