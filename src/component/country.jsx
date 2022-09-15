import React from 'react'
import { useState, useEffect } from 'react'

const Country = ({ setConfrm, setRecover, setDead, setIsCountry }) => {
    const [newData, setNewData] = useState([

    ])
    // const [sCountry, setScountry] = useState([]);

    const getCountry = async () => {
        try {

            const respons = await fetch('http://covid19.mathdro.id/api/countries')
            const avsa = await respons.json();
            setNewData(avsa.countries);
            // console.log(newData);

            // setNewData(abc)
        }
        catch (error) {

            console.log('oops its my error', error);
        }


    }

    useEffect(() => {
        getCountry()
    }, [])


    let url = 'http://covid19.mathdro.id/api/countries'





    const handleChange = async (e) => {
        console.log(e.target.value)
        if (e.target.value === 'Global') {
            setIsCountry('');
        } else {
            let countryName = await fetch(`${url}/${e.target.value}`)
            let resp = await countryName.json()
            // console.log(resp);
            setConfrm(resp.confirmed.value);
            setRecover(resp.recovered.value)
            setDead(resp.deaths.value)
            setIsCountry(e.target.value)
            // console.log(confrm);
        }
    }
    // console.log(sCountry);


    return (
        <>
            <div className='mx-auto text-center p-3 my-5 border-2 border-dashed border-black max-w-md'>
                <h1 className='text-2xl mt-10'>Select Country</h1>
                {
                    <select className='outline-none mt-5 border-solid border-black border-b-2' onChange={handleChange}>

                        <option>Global</option>
                        {newData.map((item, i) => {
                            return <option key={i} value={item.name}>{item.name}</option>
                        })}

                    </select>


                }
                {/* {
                    confrm.map((elemnt) => {
                        return console.log(elemnt);



                    })
                } */}
            </div>
        </>
    )
}

export default Country
