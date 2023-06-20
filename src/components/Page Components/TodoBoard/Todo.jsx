import React from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { BiMessageSquareDots } from 'react-icons/bi'
import { BsFolder2Open } from 'react-icons/bs'

const Todo = ({ task, index }) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <div className="todo m-4 p-4 rounded-xl bg-white relative"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <p className={task.priority === "High" ? "bg-red-100 w-12 font-medium text-red-400 p-1 rounded-md" : task.priority === "Low" ? "bg-yellow-100 w-10  text-yellow-400  font-medium rounded-md p-1" : "bg-green-100 w-24  text-green-400  font-medium rounded-md p-1"}>{task.priority}</p>

                    <p className='text-xl font-semibold mt-1'>{task.title}</p>
                    <p className='text-sm font-extralight mt-1'>{task.content}</p>
                    <div className='flex'>
                        {task.image?.map((image, index) => {
                            return (
                                <img key={index} src={image} className={`w-fit rounded-xl m-2 inline-block`}></img>
                            )
                        })
                        }
                    </div>

                    <div className='flex justify-between'>
                        <div className='flex w-20 h-10 items-center'>

                            {
                                task.avatars.map((avatar, index) => {
                                    return (
                                        <img key={index} src={avatar} className={`h-8 rounded-full -ml-2 inline-block`}></img>
                                    )
                                }
                                )
                            }
                        </div>
                        <div className='flex w-3/4 place-items-center'>
                            <div className='w-2/3  justify-end flex text-center'>
                                <BiMessageSquareDots className='mr-1' />
                                <p className='text-xs'>{task.commentCount} comments</p>
                            </div>
                            <div className='w-1/3 flex  justify-end'>
                                <BsFolder2Open className='mr-1' />
                                <p className='text-xs'>{task.fileCount} files</p>
                            </div>
                        </div>
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    )
}

export default Todo