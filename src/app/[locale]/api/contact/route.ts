// src/app/api/contact/route.ts
//
// Server-side route handler for contact form submissions.
// Submits to HubSpot Forms API and tags the deal with selected products.
//
// Required env vars (in .env.local):
//   HUBSPOT_FORMS_API_KEY   — HubSpot private app token (server-side only)
//   NEXT_PUBLIC_HUBSPOT_PORTAL_ID — portal ID (also used client-side for meetings embed)
//   HUBSPOT_FORM_GUID       — the GUID of your HubSpot form (from Forms dashboard)

import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  products: string[];
  locale: string;
  scheduleCall: boolean;
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as ContactPayload;

  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  const apiKey = process.env.HUBSPOT_FORMS_API_KEY;

  // Fail gracefully if HubSpot isn't configured yet (local dev)
  if (!portalId || !formGuid || !apiKey) {
    console.warn("[contact] HubSpot env vars not set — skipping submission");
    return NextResponse.json({ ok: true, skipped: true });
  }

  const hubspotPayload = {
    fields: [
      { name: "firstname", value: body.name },
      { name: "email", value: body.email },
      { name: "company", value: body.company },
      { name: "jobtitle", value: body.role },
      // Custom HubSpot property — create this in your portal: "productos_interes"
      { name: "productos_interes", value: body.products.join(";") },
      { name: "preferred_contact_method", value: body.scheduleCall ? "call" : "email" },
    ],
    context: {
      // hutk cookie could be passed here if you add HubSpot tracking script
    },
  };

  try {
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    if (!res.ok) {
      const error = await res.text();
      console.error("[contact] HubSpot submission error:", error);
      // Return 200 to the client — don't surface HubSpot errors to users
      return NextResponse.json({ ok: false, error });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json({ ok: true }); // non-blocking
  }
}
