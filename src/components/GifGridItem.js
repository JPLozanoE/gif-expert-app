import React from 'react'

export const GifGridItem = ({title, url}) => { // console.log({title,url})
    return (
        <div>
            <div className="card animate__animated animate__fadeIn">
                <img src={url}
                    alt={title}/>
                <p>{title}</p>
            </div>
        </div>

    )
}
