// app/api/appointments/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.EMAIL_PASS as string);

export async function POST(req: Request) {
  try {
    const {
      appointmentType,
      scheduleType,
      appointmentDate,
      appointmentTime,
      formData,
    } = await req.json();

    await resend.emails.send({
      from: process.env.EMAIL_USER as string,
      to: process.env.ADMIN_EMAIL as string,
      subject: 'New Appointment Request',
      html: `
        <p>Type: ${appointmentType}</p>
        <p>Schedule: ${scheduleType}</p>
        <p>Date: ${new Date(appointmentDate).toLocaleDateString()}</p>
        <p>Time: ${appointmentTime}</p>
        <p>Name: ${formData.firstName} ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Phone: ${formData.phone}</p>
      `,
    });

    return NextResponse.json({ message: 'Appointment scheduled successfully!' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to schedule appointment' },
      { status: 500 }
    );
  }
}
