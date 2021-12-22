import { ADD, COMPLETE, DELETE, EDIT, FILTER } from "./Typeaction"

export const add =(newT) =>{
    return{
    type:ADD, 
    payload:newT,
    };
};
    export const edit=(taskedit)=>{
    return{
        type:EDIT,
        payload:taskedit,
    };
};

export const complete=(id)=>{
    return{
        type:COMPLETE,
        payload:id,
    };
};
export const Del =(id)=>{
    return{
        type:DELETE,
        payload:id,
    };
    
};
export const Filter =()=>{
    return{
        type:FILTER,
    };
    
};