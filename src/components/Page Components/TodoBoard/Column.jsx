import React from 'react'
import Todo from './Todo'
import { Droppable } from 'react-beautiful-dnd'

import { BsDot } from 'react-icons/bs'
import { BiPlus } from 'react-icons/bi'

const Column = ({ title, items, setItems }) => {
    let mainColor = "", bgColor = "";
    if (title === "ToDo") {
        mainColor = "text-violet-600"
        bgColor = "bg-violet-600"
    } else if (title === "On Progress") {
        mainColor = "text-yellow-500"
        bgColor = "bg-yellow-500"
    } else if (title === "Done") {
        mainColor = "text-green-600"
        bgColor = "bg-green-600"
    }
    return (
        <div className=" w-80 m-2 justify-center bg-slate-100 rounded-xl">
            <div className='flex m-3'>
                <BsDot className={`mr-2 text-2xl ${mainColor}`} />
                <h3 className='mr-2 text-base font-medium'>{title}</h3>
                <p className='bg-slate-300 w-5 h-5 text-center rounded-xl ml-2 '>{items.length}</p>
                {/* <BiPlus className='text-2xl bg-violet-300 rounded-lg text-violet-800 p-1' /> */}
            </div>

            <hr className={`bg-black h-0.5 w-11/12 m-auto border-1 ${bgColor}`} />
            <div className='w-68'>

                <Droppable droppableId={title}>
                    {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef} >
                            <div className="column">
                                {items.map((item, index) => (
                                    <Todo id={item.id} key={item.id} task={item} index={index} items={items} setItems={setItems} />
                                ))}
                            </div>
                            <hr />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export default Column