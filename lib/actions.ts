'use server';
 
export async function createBooking(formData: FormData) {
    const rawFormData = {
        bookingTitle: formData.get('bookingTitle'),
        bookingDay: formData.get('bookingDay'),
        bookingMonth: formData.get('bookingMonth'),
        bookingYear: formData.get('bookingYear'),
        bookingStartTime: formData.get('bookingStartTime'),
        bookingEndTime: formData.get('bookingEndTime'),
      };

      console.log(rawFormData);
}