import { createClient } from "@/lib/supabase/api-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = createClient();

    // Insert into Supabase
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name,
          email,
          company: company || null,
          phone: phone || null,
          service,
          message,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        {
          error: "Failed to submit form",
          details: error.message,
          code: error.code
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
