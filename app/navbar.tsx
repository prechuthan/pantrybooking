import { Box, Center, Link } from "@chakra-ui/react"
import Image from "next/image";

export default function NavBar() {
    return (
        <Center>
            <Box m={[3, 5, 30]}>
                <Link href="/">
                    <Image src="/logo-no-background.png" alt="pantrybooking logo" width="130" height="130"></Image>
                </Link>
            </Box>
        </Center>
    );
}