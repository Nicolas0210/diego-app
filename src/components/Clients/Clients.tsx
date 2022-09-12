import React from 'react'


const dataSlider = [
    {
        id: 1,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: 2,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: 3,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: 4,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: 5,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
    {
        id: 6,
        title: "Lorem ipsum",
        subTitle: "Lorem"
    },
]

export default function Clients(){
    return(
        <div>
            {
                dataSlider.map((data, index) => {
                    return(
                        <div>
                            <img src={`/src/assets/clients-slider-${data.id +1}.jpg`}/>
                        </div>
                    )
                })
            }
        </div>
    )
}