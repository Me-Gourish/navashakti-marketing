import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const userAgent = req.headers.get("user-agent") || "unknown";
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";
    
    const visitData = {
      event: body.event || "page_view",
      path: body.path || "/",
      timestamp: new Date().toISOString(),
      userAgent,
      ip,
      device: body.device || "desktop",
    };

    console.log("[BACKEND VISITOR LOG]:", JSON.stringify(visitData));

    // Optional: If Supabase credentials are configured in .env.local:
    // const { createClient } = require("@supabase/supabase-js");
    // const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
    // await supabase.from("page_visits").insert([visitData]);

    return NextResponse.json({ success: true, logged: visitData });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to record visit" }, { status: 500 });
  }
}
