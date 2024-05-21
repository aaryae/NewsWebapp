import { useEffect, useState } from 'react';
import { ForexInterface } from 'types/global.type';

const Forex = () => {
    const [data, setData] = useState<ForexInterface | null>(null);
    const [datakey, setDatakey] = useState<string>('1 USD');
    const [datakey2, setDatakey2] = useState<string>('1 USD');

    const fetchdata = async () => {
        try {
            const response = await fetch('https://v6.exchangerate-api.com/v6/b43da5dc70be5b14df58ae33/latest/USD');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data: ForexInterface = await response.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);


    if (!data) {
        return <div>Loading...</div>;
    }



    const handlechange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = event.target.value;
        setDatakey(value);
    }
    const handlechange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value: string = event.target.value;
        setDatakey2(value);
    }



    return (
        <div className='flex flex-col gap-10 h-[50vh] justify-center items-center '>
            <div>
                <h1 className='relative w-fit text-4xl mt-7 font-bold '>CURRENCY CONVERTER</h1>
                <h1 className='absolute w-[10%] border-2 border-[#26806c]'> </h1>
                <hr />
            </div>
            <p className='text-center tracking-wider'>Your go-to platform for currency conversion and financial updates. </p>
            {/* style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} */}
            <div >
                <select onChange={handlechange} name="currency" id="" className='p-2 m-2'>
                    {Object.entries(data.conversion_rates).map(([currency, rate], index) => (
                        <option key={index} value={`${rate} ${currency}`}>{currency}</option>
                    ))}

                </select>
                <span >To</span>
                <select onChange={handlechange2} name="currency" id="" className='p-2 m-2'>
                    {Object.entries(data.conversion_rates).map(([currency, rate], value) => (

                        <option key={value} value={`${rate} ${currency}`}>{currency}</option>

                    ))}
                </select>
            </div>
            {/* <button onClick={handleclick} className="flex mx-auto text-white hover:bg-black border-0 py-2 px-8 focus:outline-none bg-[#000000da] hover:tracking-wide rounded text-lg">Convert</button> */}
            <p className='tracking-wider'><span className='text-[#ff3c3c]' >{datakey} </span> is equals to  <span className='text-[#ff4040]'> {datakey2} </span></p>

        </div>
    );
};

export default Forex;
