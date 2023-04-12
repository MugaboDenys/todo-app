import {MdDelete} from "react-icons/md"

const Todo = ({children, id, handleDel, complete, check}) => {

    const handleClicked =() =>{
        handleDel(id)
    }
    
    return ( 
        <div className="flex justify-between group w-[32rem] py-2 pl-2 mt-5 border-b-2">
            <div className="flex gap-x-2">
                <input type="checkbox" id={id} onChange={()=>check(id)} checked={complete} />
                <label htmlFor={id} className={`${complete && "line-through"}`}>{children}</label>
            </div>
            <MdDelete className="text-red-600 cursor-pointer " onClick={handleClicked}  />
        </div>
     );
}
 
export default Todo;