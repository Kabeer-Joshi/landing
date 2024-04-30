import {
  Card,
  CardBody,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack,
} from '@chakra-ui/react';
import { animated, useSpring } from 'react-spring';

const UsersInfo = () => {
  const targetSchools = 1;
  const targetUsers = 1500;
  const users = useSpring({
    val: targetUsers,
    from: { val: 0 },
    config: { duration: 2500 },
  });
  const schools = useSpring({
    val: targetSchools,
    from: { val: 0 },
    config: { duration: 100 },
  });

  return (
    <VStack rounded={'lg'} p={5} spacing={10}>
      <Text fontSize={'4xl'} fontWeight={'semibold'} textAlign={'center'}>
        Providing solutions since 2023
      </Text>
      <HStack
        spacing={4}
        justify={'space-around'}
        align={'center'}
        display={'flex'}
        flexDirection={{
          base: 'column',
          md: 'row',
        }}
        w={'full'}
        p={4}
      >
        <Card
          w={{
            base: 'full',
            md: 'xl',
          }}
          p={2}
          shadow={'dark-lg'}
          alignItems={'center'}
        >
          <CardBody>
            <Stat>
              <StatLabel
                textAlign={'center'}
                fontSize={'2xl'}
                fontWeight={'thin'}
              >
                Users
              </StatLabel>
              <StatNumber
                fontSize={{
                  base: '4xl',
                  md: '6xl',
                }}
                display={'flex'}
              >
                <animated.div>
                  {users.val.interpolate((val) => Math.floor(val))}
                </animated.div>
                +
              </StatNumber>
            </Stat>
          </CardBody>
        </Card>

        {/* 2nd information card */}

        <Card
          w={{
            base: 'full',
            md: 'xl',
          }}
          p={2}
          shadow={'dark-lg'}
          alignItems={'center'}
        >
          <CardBody>
            <Stat>
              <StatLabel
                textAlign={'center'}
                fontSize={'2xl'}
                fontWeight={'thin'}
              >
                Schools
              </StatLabel>
              <StatNumber
                textAlign={'center'}
                fontSize={{
                  base: '4xl',
                  md: '6xl',
                }}
                display={'flex'}
              >
                <animated.div>
                  {schools.val.interpolate((val) => Math.floor(val))}
                </animated.div>
                +
              </StatNumber>
            </Stat>
          </CardBody>
        </Card>
      </HStack>
    </VStack>
  );
};

export default UsersInfo;
