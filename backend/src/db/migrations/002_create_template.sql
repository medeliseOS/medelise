CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    template_event VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    subject TEXT,
    mail_variables TEXT,
    html_body TEXT,
    text_body TEXT,

    is_deleted BOOLEAN NOT NULL DEFAULT FALSE,

    created_by UUID,
    updated_by UUID,

    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_templates_template_event
ON templates (template_event)
WHERE is_deleted = FALSE;

CREATE INDEX IF NOT EXISTS idx_templates_created_at
ON templates (created_at DESC);

