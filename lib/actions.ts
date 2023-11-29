'use server';

const { PrismaClient } = require('@prisma/client')
 
export async function createBooking(formData: FormData) {
    const prisma = new PrismaClient();

    const rawFormData = {
        bookingTitle: formData.get('bookingTitle'),
        bookingDay: formData.get('bookingDay'),
        bookingMonth: formData.get('bookingMonth'),
        bookingYear: formData.get('bookingYear'),
        bookingStartTime: formData.get('bookingStartTime'),
        bookingEndTime: formData.get('bookingEndTime'),
    };

    // Save booking to database
    try {
      const booking = await prisma.booking.create({
          data: {
              title: rawFormData.bookingTitle,
              day: rawFormData.bookingDay,
              month: rawFormData.bookingMonth,
              year: rawFormData.bookingYear,
              startTime: rawFormData.bookingStartTime,
              endTime: rawFormData.bookingEndTime,
          },
      });
      console.log('Booking created:', booking);
    } catch (error: any) {
        console.error(`Error creating booking: ${error.message}`);
    } finally {
        await prisma.$disconnect();
    }
}