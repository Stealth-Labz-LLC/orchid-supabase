import { createClient } from "@/lib/supabase/api-client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createClient();

    // Try a test insert
    const testData = {
      name: "Test User",
      email: "test@example.com",
      service: "test",
      message: "This is a test message from RLS diagnostic",
    };

    const { data: insertData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert([testData])
      .select();

    return NextResponse.json({
      testInsert: {
        success: !insertError,
        data: insertData,
        error: insertError ? {
          message: insertError.message,
          code: insertError.code,
          details: insertError.details,
          hint: insertError.hint,
        } : null,
      },
      environment: {
        hasUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        urlPrefix: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30) + "...",
      },
      instructions: insertError
        ? "RLS policies are blocking the insert. Run fix-rls-policies.sql in your Supabase SQL Editor."
        : "Success! RLS policies are working correctly.",
    });
  } catch (error) {
    console.error("Test RLS error:", error);
    return NextResponse.json(
      {
        error: "Test failed",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
