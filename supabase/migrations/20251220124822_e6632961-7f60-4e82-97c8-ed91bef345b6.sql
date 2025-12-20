-- Add policy to allow authenticated users to view contact messages
CREATE POLICY "Authenticated users can view contact messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated
USING (true);

-- Add policy to allow authenticated users to delete contact messages
CREATE POLICY "Authenticated users can delete contact messages" 
ON public.contact_messages 
FOR DELETE 
TO authenticated
USING (true);

-- Add policy to allow authenticated users to update contact messages (mark as read, etc.)
CREATE POLICY "Authenticated users can update contact messages" 
ON public.contact_messages 
FOR UPDATE 
TO authenticated
USING (true);