import React,{Fragment, useState} from 'react';

const EditCat = ({cat}) =>{
    const [inputs, setInputs] = useState({
        certi_num: "",
        cat_name: "",
        title: "",
        cat_reg_name: "",
        sale_status: "",
    }); 
    const {certi_num, cat_name, title, cat_reg_name, sale_status} = inputs;
    const onChange = (e) => {
        setInputs({...inputs, [e.target.name]:e.target.value})
    }


    //update cat info function
    const updateCatInfo = async(e) =>{
        e.preventDefault();
        try{
            const body = {certi_num, cat_name, title, cat_reg_name, sale_status};
            const response = await fetch(`http://localhost:4020/api/v1/cats/update_cat`,{
                method:"PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        }catch(err){
            console.error(err.message)
        }
    }


    return(
        <Fragment>

            <button type="button" 
            class="btn btn-warning" 
            data-toggle="modal" 
            data-target={`#id${cat.certi_num}`}>
            Edit
            </button>

            {/*
                id = id10
                this is the real one!!!!
                <div class="modal" id={`id${cat.certi_num}`} onClick={() => setcerti_num(cat.certi_num)}>
            */}
            
            
            <div class="modal" id={`id${cat.certi_num}`} 
            onClick={() => setInputs(cat.certi_num, cat.cat_name, cat.title, cat.cat_reg_name, cat.sale_status)}>
            <div class="modal-dialog">
                <div class="modal-content">


                <div class="modal-header">
                    <h4 class="modal-title">Edit Cat</h4>
                    <button type="button" class="close" data-dismiss="modal" 
                     onClick={() => setInputs(cat.certi_num, cat.cat_name, cat.title, cat.cat_reg_name, cat.sale_status)}>
                        &times;
                    </button>
                </div>


                <div class="modal-body">
                    <form>
                        <label>Certificate number: </label>
                        <input type="text" 
                        name="certi_num"    
                        placeholder= {cat.certi_num}
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Cat name: </label>
                        <input 
                        type="text" 
                        name="cat_name"  
                        placeholder={cat.cat_name}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Title: </label>
                        <input 
                        type="text" 
                        name="title"   
                        placeholder={cat.title}  
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Cat registered name: </label>
                        <input type="text" 
                        name="cat_reg_name"   
                        placeholder={cat.cat_reg_name} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <label>Sale status: </label>
                        <input type="text" 
                        name="sale_status"   
                        placeholder={cat.sale_status} 
                        onChange={e => onChange(e)}
                        className="form-control my-2"/>

                        <button type="button" class="btn btn-warning" 
                        data-dismiss="modal"
                        onClick ={e => updateCatInfo(e)}>
                            Edit
                        </button>
                 </form>
                </div>


                <div class="modal-footer">
                    
                    <button type="button" class="btn btn-danger" data-dismiss="modal"
                     onClick={() => setInputs(cat.certi_num, cat.cat_name, cat.title, cat.cat_reg_name, cat.sale_status)}>
                        Close
                    </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditCat;