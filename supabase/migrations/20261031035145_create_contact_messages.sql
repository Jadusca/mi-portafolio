/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key, generated automatically)
  - `name` (text, required, 1 to 100 characters)
  - `email` (text, required, 3 to 254 characters, basic email format)
  - `message` (text, required, 1 to 2000 characters)
  - `created_at` (timestamp, set automatically)

2. Security
- Row level security is enabled on `contact_messages`.
- Visitors (anonymous and signed-in roles) may only INSERT new messages.
- No SELECT, UPDATE or DELETE access is granted, so messages cannot be read or changed from the website. They can be reviewed in the Supabase dashboard.

3. Notes
- The format and length checks are enforced by the database itself, not only by the form.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 254 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
