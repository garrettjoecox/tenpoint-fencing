# Supabase Setup for TenPoint Fencing Contact Form

## Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update `.env.local` with your actual Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Database Setup

Create a `quotes` table in your Supabase project with the following SQL:

```sql
-- Create quotes table
CREATE TABLE quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (recommended)
ALTER TABLE quotes ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow inserts (for form submissions)
CREATE POLICY "Allow public insert access" ON quotes
FOR INSERT TO anon
WITH CHECK (true);

-- Create a policy to allow authenticated users to read (for admin access)
CREATE POLICY "Allow authenticated read access" ON quotes
FOR SELECT TO authenticated
USING (true);
```

## How it works

- The contact form uses React Hook Form for validation and form state management
- Form data is validated using Zod schema
- On successful validation, data is inserted into the `quotes` table in Supabase
- Users receive a toast notification confirming submission
- Form errors are displayed inline with field validation

## Next Steps

1. Set up your Supabase project and database table
2. Add your Supabase credentials to `.env.local`
3. Test the form to ensure it's working correctly
4. Optional: Set up email notifications when new quotes are submitted
