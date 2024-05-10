import React, { useEffect, useState } from 'react';
import useFetchData from '../customhooks/useFetchData';
import { Sidebar } from '../components/Sidebar';
import { Card, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, CardFooter } from '@chakra-ui/react';

export const Chairs = ({handleClick}) => {
    const { data, fetchData } = useFetchData();
    const [filteredData, setFilteredData] = useState([]); // State to store filtered data

    useEffect(() => {
        fetchData();
    }, []);

    // Filter function to filter data based on checkbox selections
    const filterData = (checkboxState) => {
        const { officeChairs, diningChairs, livingChairs } = checkboxState;
        const filtered = data.filter(item => {
            if (officeChairs && item.subcategory === 'Office Chairs') return true;
            if (diningChairs && item.subcategory === 'Dining Chairs') return true;
            if (livingChairs && item.subcategory === 'Living Chairs') return true;
            return false;
        });
        setFilteredData(filtered);
    };

    return (
        <>
            {/* <div style={{ display: "flex", flexWrap: "wrap" ,flexDirection:"row"}}> */}
                <Sidebar filterData={filterData} />
                <div style={{backgroundColor:""}}>
                <div style={{ marginLeft: "320px", flexGrow: 1,display:"flex",flexWrap:"wrap",justifyContent:"space-around" }}>
                    
                    {
                        // Render filtered data if available, otherwise render all data
                        (filteredData.length > 0 ? filteredData : data).map((el, i) => (
                            <Card key={i} maxW='sm' margin='2'>
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
                                        {el.price}
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
            </div>
        </>
    );
};
