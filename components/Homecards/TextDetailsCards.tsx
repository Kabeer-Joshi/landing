import {
    Flex,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
} from "@chakra-ui/react";
import React from "react";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const TextDetailsCards = ({ title, icon }) => {
    return (
        <Card
            _hover={{
                boxShadow: "2xl",
            }}
            w={"100%"}
            py={8}
        >
            <Flex color={"blue.900"} py={8} justify={"center"} align={"center"}>
                {icon}
            </Flex>

            <CardBody
                fontSize={{ base: "md", md: 18 }}
                textAlign={"center"}
                fontWeight={"bold"}
            >
                {title}
            </CardBody>
            {/* <CardFooter w={"100%"}>
                <Flex w={"100%"} justifyContent={"end"}>
                    <Button variant={"outline"} size={"md"}>
                        Explore
                    </Button>
                </Flex>
            </CardFooter> */}
        </Card>
    );
};

export default TextDetailsCards;
