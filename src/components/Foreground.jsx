import React, {useRef , useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {desc:"Toh kese ho mere dost Apka hardik swagat hai hamari is duniya me.", filesize: ".9mb" , close: false, tag:{isOpen: true, tagTitle:"Download now", tagColor:"green" ,},
    },
    {desc:"Toh kese ho mere dost Apka hardik swagat hai hamari is duniya me.", filesize: ".9mb" , close: false, tag:{isOpen: false, tagTitle:"Download now", tagColor:"green" ,},
},
{desc:"Toh kese ho mere dost Apka hardik swagat hai hamari is duniya me.", filesize: ".9mb" , close: false, tag:{isOpen: true, tagTitle:"Upload now", tagColor:"blue" ,},
},
    ];
    return (
        <div ref={ref} className="fixed top-0 z-[3l p-5 left-0 w-full h-full flex gap-5 flex-wrap">
            {data.map((item, index) => (
               <Card data={item} refrence={ref} />
            )) }
        </div>
    )
}

export default Foreground