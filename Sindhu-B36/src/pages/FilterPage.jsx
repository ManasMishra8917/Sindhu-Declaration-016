import React, { useEffect } from 'react'
import useFetchData, { baseurl } from '../customhooks/useFetchData';
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter } from '@chakra-ui/react';

export const FilterPage = () => {
    const { data, fetchData } = useFetchData();
    useEffect(() => {
        fetchData(`${baseurl}/?subcategory=Office Chairs`);
    }, []);
  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
    {
     data.map((el, i) => (

                            <Card key={i} maxW='sm' margin='2' style={{marginTop:"80px"}}>
                                <Image
                                    src={el.image}
                                    alt={el.title}
                                    borderRadius='lg'
                                    maxW='100%'
                                    height='400px'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{el.title}</Heading>
                                    <Text>{el.description}</Text>
                                    <Text color='blue.600' fontSize='2xl'>
                                        ${el.price}
                                    </Text>
                                </Stack>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue' onClick={()=>handleClick(el)} >
                                            Add to cart
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))
                    }
                    </div>
    </>
  )
}
