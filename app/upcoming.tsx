import { Box, Card, CardHeader, CardBody, CardFooter, Center, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { Suspense } from "react";
import Booking from "@/app//booking";
import { getAllBookings } from "@/lib/actions";

export default async function Upcoming() {
    const bookings = await getAllBookings();

    return (
        <Center>
            <Box bg='blue.600' w="100%" p={4} pb={20}>
                <Center>
                    <Text as='b' color="white" fontSize="3xl" my={[3, 5, 30]}>
                        Upcoming Bookings
                    </Text>
                </Center>
                {/* Stack of upcoming bookings */}
                <VStack marginLeft='auto' marginRight='auto' maxW={400} spacing={5} align='stretch'>
                    {bookings.map((booking:any) => (
                        <Booking key={booking.id} title={booking.title} day={booking.day} month={booking.month} year={booking.year} startTime={booking.startTime} endTime={booking.endTime}/>
                    ))};
                </VStack>
            </Box>
        </Center>
    );
}