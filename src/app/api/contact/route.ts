import { NextRequest, NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@netcb.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@netcb.com";

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  website?: string;
}

const SUBJECT_MAP: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  "hybrid-cloud": "Hybrid Cloud",
  "digital-workspaces": "Digital Workspaces",
  "open-source": "Open Source Solutions",
  support: "Support Services",
  partnership: "Partnership Enquiry",
  other: "Other",
};

function validate(data: ContactFormData): string[] {
  const errors: string[] = [];
  if (!data.name?.trim()) errors.push("Name is required.");
  if (!data.email?.trim()) {
    errors.push("Email is required.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("A valid email is required.");
  }
  if (!data.subject) errors.push("Subject is required.");
  if (!data.message?.trim()) errors.push("Message is required.");
  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    // Validate
    const errors = validate(body);
    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    // Check API key
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const subjectLabel = SUBJECT_MAP[body.subject] || body.subject;

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a1a2e; border-bottom: 2px solid #00e5ff; padding-bottom: 8px;">
          New Contact Enquiry
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; width: 120px;">Name</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(body.name)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Email</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">
              <a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a>
            </td>
          </tr>
          ${body.company ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Company</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(body.company)}</td>
          </tr>` : ""}
          ${body.phone ? `
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(body.phone)}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555;">Subject</td>
            <td style="padding: 8px 12px; color: #1a1a2e;">${escapeHtml(subjectLabel)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 8px 12px; color: #1a1a2e; white-space: pre-wrap;">${escapeHtml(body.message)}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">
          Submitted via netcb.com contact form at ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
        </p>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `NETCB Contact Form <${FROM_EMAIL}>`,
        to: [CONTACT_EMAIL],
        replyTo: body.email,
        subject: `[NETCB] ${subjectLabel} — ${body.name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend API error:", err);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
