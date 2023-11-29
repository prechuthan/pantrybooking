import { Card, CardHeader, CardBody, Heading, Text } from "@chakra-ui/react"

export default function Booking({ title, day, month, year, startTime, endTime }) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{`${day} ${month} ${year}`}</Heading>
            </CardHeader>
            <CardBody>
                <Heading size='sm'>{`${title}`}</Heading>
                <Text>{`${startTime} - ${endTime}`}</Text>
            </CardBody>
        </Card>
    );
}