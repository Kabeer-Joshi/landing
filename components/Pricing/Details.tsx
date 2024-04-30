import { Text, Box, Heading, Divider } from "@chakra-ui/react";

const Details = () => {
    return (
        <Box
            color="black"
            borderRadius="lg"
            m={{ base: 4, md: 4, lg: 4 }}
            p={{ base: 4, md: 5, lg: 6 }}
            textAlign="center"
            h="full"
        >
            <Heading
                color="brand.100"
                fontSize={{ base: "3xl", md: "5xl" }}
                fontWeight="bold"
                mb={3}
            >
                Ready to Elevate Your Institution’s Potential?
            </Heading>

            <Divider mb={10} />

            <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.700" mb={3}>
                To get started and receive customized pricing tailored to your
                school or college’s unique requirements, simply fill out the
                form below.
            </Text>

            <Divider mb={10} />

            <Text fontSize={{ base: "lg", md: "2xl" }} color="gray.700" mb={5}>
                Our team of dedicated sales specialists is committed to
                understanding your needs and offering the best pricing options
                that align with your institution’s goals. Complete the form, and
                a member of our team will reach out to you shortly.
            </Text>
        </Box>
    );
};

export default Details;
