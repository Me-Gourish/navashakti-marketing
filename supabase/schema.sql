-- ========================================================
-- NAVASHAKTI MARKETING: BACKEND VISITOR & INQUIRY SCHEMA
-- ========================================================

-- Table 1: Page Visits Tracker
CREATE TABLE IF NOT EXISTS page_visits (
  id BIGSERIAL PRIMARY KEY,
  event_type TEXT NOT NULL DEFAULT 'page_view',
  page_path TEXT NOT NULL DEFAULT '/',
  device_type TEXT,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Table 2: Quotation Requests / WhatsApp Clicks
CREATE TABLE IF NOT EXISTS quote_inquiries (
  id BIGSERIAL PRIMARY KEY,
  customer_name TEXT,
  organization TEXT,
  phone TEXT,
  delivery_city TEXT,
  product_name TEXT NOT NULL,
  quantity TEXT,
  channel TEXT DEFAULT 'whatsapp',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS)
ALTER TABLE page_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous insertions for telemetry
CREATE POLICY "Allow public insert on page_visits" ON page_visits FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public insert on quote_inquiries" ON quote_inquiries FOR INSERT WITH CHECK (true);
