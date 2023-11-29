'use client'

import { Box, Button, Center, Input, SimpleGrid, Select, Text } from "@chakra-ui/react";
import { CalendarIcon } from '@chakra-ui/icons';
import { createBooking } from "@/lib/actions";

export default function Booking() {
    var days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    var months = [
        'January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    var years = [2023, 2024]
    var times = ["07:00", "07:30", "08:00", "08:30", "09:00", "09:30", "10:00", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:30", "18:00", "18:30", "19:00"]
    
    return (
        <form action={createBooking}>
            <Center>
                {/* Background gray box */}
                <Box bg="gray.50" w="100%" h={450} p={4}>
                    <Center>
                        <Text color="gray.700" fontSize="4xl" my={[3, 5, 30]}>
                            Book the pantry in 
                            <Text as="b"> 20 seconds</Text>.
                        </Text>
                    </Center>
                    {/* Booking title */}
                    <Box maxW="600px" mx="auto" mt={8}>
                    <SimpleGrid columns={1} spacing={1}>
                        <Input name="bookingTitle" maxW="{2}" placeholder="Please type in your event name" />    
                    </SimpleGrid>
                    </Box>
                    {/* Date picker */}
                    <Box maxW="600px" mx="auto" mt={4}>
                    <SimpleGrid columns={3} spacing={1}>
                        <Select name="bookingDay" maxW="{2}" placeholder="Day">
                            {days.map((day) => 
                                <option key={day} value={day}>{day}</option>
                            )}
                        </Select>
                        <Select name="bookingMonth" maxW="{2}" placeholder="Month">
                            {months.map((month, index) => 
                                <option key={month} value={index + 1}>{month}</option>
                            )}
                        </Select>
                        <Select name="bookingYear" maxW="{2}" placeholder="Year">
                            {years.map((year) => 
                                <option key={year} value={year}>{year}</option>
                            )}
                        </Select>
                        </SimpleGrid>
                    </Box>
                    {/* Time picker */}
                    <Box maxW="400px" mx="auto" mt={4}>
                        <SimpleGrid columns={2} spacing={1}>
                            <Select name="bookingStartTime" maxW="{2}" placeholder="Start time">
                                {times.map((time) => 
                                    <option key={`start-${time}`} value={time}>{time}</option>
                                )}
                            </Select>
                            <Select name="bookingEndTime" maxW="{2}" placeholder="End time">
                                {times.map((time) => 
                                    <option key={`end-${time}`} value={time}>{time}</option>
                                )}
                            </Select>
                        </SimpleGrid>
                    </Box>
                    {/* Submit booking */}
                    <Box maxW="200px" mx="auto" mt={8}>
                        <SimpleGrid columns={1} spacing={1}>
                        <Button type="submit" leftIcon={<CalendarIcon />} loadingText='Booking' colorScheme='blue'variant='outline' size='lg'>
                            Book now
                        </Button>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Center>
        </form>
    );
}