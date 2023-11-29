import { Card, CardHeader, CardBody, Heading, Text } from "@chakra-ui/react"

export default function BookingSkeleton() {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>Loading...</Heading>
            </CardHeader>
            <CardBody>
                <Heading size='sm'>Loading...</Heading>
                <Text>Loading...</Text>
            </CardBody>
        </Card>
    );
}