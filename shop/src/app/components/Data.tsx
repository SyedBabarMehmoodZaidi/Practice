import React from 'react'

const Data = async () => {

    interface Data {
        id: number;
        name: string;
        description: string;
        image: string;
        price: number;
    }

    const response = await fetch('https://678023660476123f76a9b8e7.mockapi.io/data')

    const data = await response.json();

    console.log(data)

  return (
    <div className='gap-5 grid lg:grid-cols-3 p-12'>
      
      {data.map((item: Data) => (
            <div key={item.id}>
               <div className='flex flex-col items-center justify-center'>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
                </div>
                <img src={item.image} alt={item.name} className='rounded-2xl'/>
            </div>
      ))}
      
    </div>
  )
}

export default Data
