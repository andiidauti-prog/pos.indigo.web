-- Migration: 20260917000000_create_leads_table.sql
-- Create leads table for onlinePOS demo requests and sales pipeline management

CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_name TEXT NOT NULL,
  business_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  business_type TEXT NOT NULL CHECK (business_type IN ('restaurant', 'shop', 'warehouse', 'other')),
  interests TEXT[] NOT NULL DEFAULT '{}',
  message TEXT,
  preferred_contact TEXT NOT NULL DEFAULT 'either' CHECK (preferred_contact IN ('phone', 'email', 'either')),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'demo_scheduled', 'converted', 'closed')),
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Trigger to automatically update updated_at on row modification
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_leads_updated_at ON public.leads;
CREATE TRIGGER set_leads_updated_at
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Security Policies

-- 1. Public Insertion: Anyone (anonymous visitors) can submit a lead / demo request
CREATE POLICY "Allow public insert for leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- 2. Admin Selection: ONLY authenticated users can view/read leads
CREATE POLICY "Allow authenticated users to select leads"
  ON public.leads
  FOR SELECT
  TO authenticated
  USING (true);

-- 3. Admin Update: ONLY authenticated users can update lead status and notes
CREATE POLICY "Allow authenticated users to update leads"
  ON public.leads
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 4. Admin Delete: ONLY authenticated users can delete leads
CREATE POLICY "Allow authenticated users to delete leads"
  ON public.leads
  FOR DELETE
  TO authenticated
  USING (true);
