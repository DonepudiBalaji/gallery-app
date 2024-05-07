import React from 'react'

function Gallery(props) {
    let { data } = props;
    return (
        <div className='flex flex-wrap '>

            {data.map((image) => {
                return (
                    <div>
                        <div
                            key={image.id}
                            className='w-[200px] h-[35vh] m-6 bg-center bg-cover rounded-xl  relative flex items-end row-auto'
                            style={{ backgroundImage: `url(https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg)` }}
                        >
                            <div className='text-white font-bold text-center w-full bg-gray-900 bg-opacity-60'>
                                {image.title}
                            </div>
                        </div>
                    </div>
                )


            })}

        </div>
    )
}

export default Gallery