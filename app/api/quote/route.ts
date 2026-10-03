import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation
    const { name, phone, productCategory, approxArea, city } = body;

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required for quote estimation.' },
        { status: 400 }
      );
    }

    console.log('[GORDON Lead Desk] New Trade Quote Request:', {
      timestamp: new Date().toISOString(),
      name,
      phone,
      productCategory,
      approxArea,
      city,
      raw: body,
    });

    // In production, integrate with CRM/SendGrid/Twilio/WhatsApp Business API
    return NextResponse.json({
      success: true,
      message: 'Quote request logged successfully. Our Delhi NCR trade desk will contact you within 2 business hours.',
      data: {
        leadId: `GD-Q-${Date.now().toString().slice(-6)}`,
        product: productCategory,
        area: approxArea,
      },
    });
  } catch (err: unknown) {
    console.error('Error handling quote request:', err);
    return NextResponse.json(
      { error: 'Failed to submit quote request. Please reach us directly via WhatsApp.' },
      { status: 500 }
    );
  }
}
