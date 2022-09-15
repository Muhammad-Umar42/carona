import React, { useEffect, useState } from 'react'

const Covid = ({ confrm, recover, dead, isCountry, setGlobalConfrm, setGlobalDead, setGlobalRecover }) => {

    const [newData, setNewData] = useState([
        {
            confirmed: '',
            recovered: '',
            deaths: ''
        }
    ])
    const [loding, setLoding] = useState(true)

    const getData = async () => {
        try {
            setLoding(false)
            const respons = await fetch('http://covid19.mathdro.id/api')
            const avsa = await respons.json();
            setNewData({
                confirmed: avsa.confirmed.value,
                recovered: avsa.recovered.value,
                deaths: avsa.deaths.value
            })

            // setNewData(abc)
        }
        catch (error) {

            console.log('oops its my error', error);
        }

    }
    // console.log(newData)

    useEffect(() => {
        getData()
    }, [])
    if (loding) {
        return <h1>Loding...</h1>
    }
    setGlobalConfrm(newData.confirmed);
    setGlobalDead(newData.deaths)
    setGlobalRecover(newData.recovered)


    return (
        <>
            <h1 className='bg-blue-500 text-white text-center p-4 mb-10 shadow-md text-2xl'>Covid-19 Tracker App</h1>

            <div className="container flex justify-evenly mx-auto">

                <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-yellow-700 text-gray-600">
                    <span className='bottom-5 font-bold text-yellow-700'>Active Case<br /></span>
                    {isCountry ? confrm : newData.confirmed}</p>

                <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-green-700 text-gray-600">
                    <span className='text-green-700 font-bold'>Recover Case<br /></span>
                    {isCountry ? recover : newData.recovered}</p>
                <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-red-700 text-gray-600">
                    <span className='text-red-700 font-bold'>Death Case<br /></span>
                    {isCountry ? dead : newData.deaths}</p>



            </div>
        </>

    )
}

export default Covid