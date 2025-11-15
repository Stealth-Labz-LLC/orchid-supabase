import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();

    // Try to query the table
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .limit(1);

    if (error) {
      return NextResponse.json({
        status: "error",
        message: "Table does not exist or cannot be accessed",
        error: error.message,
        code: error.code,
        hint: "Please run the SQL migration from supabase-migrations.sql in your Supabase SQL Editor"
      }, { status: 500 });
    }

    return NextResponse.json({
      status: "success",
      message: "Database connection successful! Table exists and is accessible.",
      rowCount: data?.length || 0
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Failed to connect to Supabase",
      error: String(error)
    }, { status: 500 });
  }
}
