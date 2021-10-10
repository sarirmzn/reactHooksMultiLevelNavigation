import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(
                'https://61606b7dfaa03600179fba64.mockapi.io/data',
            );
            const json = await res.json();
            setData(json);
        };
        fetchData();

    }, [setData]);

    const level1 = []
    const level2 = []
    const test = data.map((numbers) => {
            if(numbers.USTKATEGORIID !== "0")
                level1.push(numbers.USTKATEGORIID)
            if(numbers.USTKATEGORIID !== "0")
                level2.push(numbers)
        }
    );


    level1.map((x) =>{

        let abc = level2.filter(item => item.USTKATEGORIID === x)

        let newMarkers = data.map(el => (
            el.KNO === x ? {...el, "altKategori" : true ,"altKategoriIcerik": abc}: el
        ))
        let newarray = newMarkers.filter(element => element.USTKATEGORIID !== x);
        setData(newarray);

    })
    console.log(data);


    return (
        <ul>
            {data.map(item => (
                <li key={item.KNO}>
                    {item.KATEGORIADI}
                    {item.altKategori ? <ul>
                        {
                            item.altKategoriIcerik.map(item => (
                                <li key={item.KNO}>
                                   {item.KATEGORIADI}
                                    {item.altKategori ? <ul>
                                        {
                                            item.altKategoriIcerik.map(item => (
                                                <li key={item.KNO}>
                                                    {item.KATEGORIADI}
                                                    {item.altKategori ? <ul>
                                                        {
                                                            item.altKategoriIcerik.map(item => (
                                                                <li key={item.KNO}>
                                                                    {item.KATEGORIADI}
                                                                </li>
                                                            ))
                                                        }
                                                    </ul> : false}
                                                </li>
                                            ))
                                        }
                                    </ul> : false}
                                </li>
                            ))
                        }
                    </ul> : false}
                </li>
            ))}
        </ul>
    );
}

export default App;

