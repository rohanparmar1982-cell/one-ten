import { createClient } from '@supabase/supabase-js';
import { ReservationRecord } from '../types';

export const SUPABASE_PROJECT_ID = 'wowkoxwlpokoalekqame';
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://wowkoxwlpokoalekqame.supabase.co';
export const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_mbKt8zm6BTK9JjzKVxyNIw_zF8b4iwx';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const SUPABASE_SQL_SCHEMA = `-- 1. Create the reservations table in your Supabase SQL Editor:
CREATE TABLE IF NOT EXISTS public.reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_reference TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  date DATE NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  seating_preference TEXT NOT NULL,
  occasion TEXT,
  special_requests TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous guests & patrons to submit bookings
CREATE POLICY "Allow public insert" ON public.reservations
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

-- 4. Allow public or staff to read reservations
CREATE POLICY "Allow public select" ON public.reservations
  FOR SELECT TO anon, authenticated
  USING (true);
`;

export interface SaveReservationResult {
  success: boolean;
  data?: any;
  error?: string;
  code?: string;
  tableMissing?: boolean;
}

/**
 * Inserts a new guest reservation into the Supabase 'reservations' table.
 */
export async function saveReservationToSupabase(
  reservation: ReservationRecord
): Promise<SaveReservationResult> {
  try {
    const { data, error } = await supabase
      .from('reservations')
      .insert([
        {
          booking_reference: reservation.booking_reference,
          full_name: reservation.full_name,
          email: reservation.email,
          phone: reservation.phone,
          date: reservation.date,
          time: reservation.time,
          guests: reservation.guests,
          seating_preference: reservation.seating_preference,
          occasion: reservation.occasion,
          special_requests: reservation.special_requests || '',
          status: reservation.status || 'confirmed',
        },
      ])
      .select();

    if (error) {
      console.warn('Supabase reservation insertion error:', error);
      const isTableMissing =
        error.code === 'PGRST205' ||
        error.message?.includes('Could not find the table') ||
        error.message?.includes('does not exist');

      return {
        success: false,
        error: error.message,
        code: error.code,
        tableMissing: isTableMissing,
      };
    }

    return {
      success: true,
      data: data?.[0],
    };
  } catch (err: any) {
    console.error('Unexpected Supabase connection error:', err);
    return {
      success: false,
      error: err?.message || 'Network connection failed',
    };
  }
}

/**
 * Fetches recent reservations logged in Supabase for concierge monitoring.
 */
export async function fetchRecentReservations(limit: number = 20): Promise<{
  success: boolean;
  data?: ReservationRecord[];
  error?: string;
  tableMissing?: boolean;
}> {
  try {
    const { data, error } = await supabase
      .from('reservations')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      const isTableMissing =
        error.code === 'PGRST205' ||
        error.message?.includes('Could not find the table') ||
        error.message?.includes('does not exist');

      return {
        success: false,
        error: error.message,
        tableMissing: isTableMissing,
      };
    }

    return {
      success: true,
      data: (data as ReservationRecord[]) || [],
    };
  } catch (err: any) {
    return {
      success: false,
      error: err?.message || 'Failed to fetch reservations',
    };
  }
}
