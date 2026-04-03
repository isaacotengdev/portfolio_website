import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: Integrate with your email provider here.
    // Options: Resend (https://resend.com), ConvertKit, Mailchimp, etc.
    //
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.contacts.create({
    //   email,
    //   audienceId: process.env.RESEND_AUDIENCE_ID!,
    // });

    console.log("New subscriber:", email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
