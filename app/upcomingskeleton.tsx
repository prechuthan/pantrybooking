import { Box, Card, CardHeader, CardBody, CardFooter, Center, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { getAllBookings } from "@/lib/actions";
import BookingSkeleton from "@/app/bookingskeleton";

export default function UpcomingSkeleton() {
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
                    <BookingSkeleton/>
                </VStack>
            </Box>
        </Center>
    );
}