import React, { useState } from 'react'

function Card() {
    const [color, setColor] = useState("navy")

    return (
        <div className='w-full h-screen duration-300 ' style={{ backgroundColor: color }}>
            <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2">
    //     <div className="fixed flex-wrap justify-center shadow-xl bg-white px-3 py-1 rounded-3xl">
                    <button
                        onClick={() => setColor("red")}
                        className='outline-none px-4 py-2 m-2 rounded-full text-black text-bold shadow-xl'
                        style={{ backgroundColor: "red" }}
                    >
                        Red
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Card
