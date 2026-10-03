import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email, subject, type } = body;

    if (!phone && !email) {
      return NextResponse.json(
        { error: 'Contact phone or email is required.' },
        { status: 400 }
      );
    }

    console.log('[GORDON Contact Desk] New Inbound Submission:', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email,
      subject,
      type,
      raw: body,
    });

    return NextResponse.json({
      success: true,
      message: 'Your enquiry has been received. Our team will get back to you shortly.',
      ticketId: `GD-${Date.now().toString().slice(-6)}`,
    });
  } catch (err: unknown) {
    console.error('Error handling contact request:', err);
    return NextResponse.json(
      { error: 'Failed to submit contact enquiry. Please call us directly.' },
      { status: 500 }
    );
  }
}
