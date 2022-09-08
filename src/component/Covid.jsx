import React, { useEffect, useState } from 'react'

const Covid = () => {

    const [newData, setNewData] = useState([
        {
            confirmed: '',
            recovered: '',
            deaths: ''
        }
    ])
    const [error, setError] = useState(false)
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
            setError(true)
            console.log('oops its my error', error);
        }

    }
    console.log(newData)

    useEffect(() => {
        getData()
    }, [])
    if (loding) {
        return <h1>Loding...</h1>
    }

    return (

        <div className="container flex justify-evenly mx-auto">

            <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-yellow-700">{newData.confirmed}</p>
            <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-green-700">{newData.recovered}</p>
            <p className="card bg-blue-200 p-3 m-3 w-4/12 text-center
            border-b-8 border-solid border-red-700">{newData.deaths}</p>

        </div>

    )
}

export default Covid