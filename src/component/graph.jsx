import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Graph = ({ confrm, recover, dead, globalConfrm, globalDead, globalRecover, isCountry }) => {

    const data = [
        {
            name: 'Active',
            value: isCountry ? confrm : globalConfrm
        },
        {
            name: 'Recover',
            value: isCountry ? recover : globalRecover
        },
        {
            name: 'Deathes',
            value: isCountry ? dead : globalDead
        }
    ]

    return (
        <>
            <div className='mt-10 mx-auto'>
                <BarChart
                    width={1000}

                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="name" fill="#8884d8" />
                    <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
            </div>
        </>
    )
}

export default Graph