import React, {useState, useEffect} from "react";
import Pizza from "./Pizza";
import {Route, Link} from "react-router-dom";
import Home from "./Home";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    fName: yup
        .string()
        .required("Name is a required field"),
    // email: yup
    //     .string()
    //     .email("Must include a valid email")
    //     .required("Email Required"),
    pizzaSize: yup
        .string()
        .required("Please choose a size "),
    // comments: yup
    //     .string()
    //     .required("C'mon! Tell us a secret!"),
    // tos: yup
    //     .boolean()
    //     .oneOf([true], "You must agree to the Terms Of Service")
});

const OrderForm = (props) => {
  //FORM STATES  
    const [pState, setPstate] = useState({
        // id: Math.random(),
        name: "",
        pSize: "",
        pCrust: "",
        pSause: "",
        xtraCheese: "",
        mushrooms: "",
        pepperoni: "",
        sausage: "",
        comments: "",
    })

    // THE SUBMIT BUTTON DISABLED FUNCTION
    const [buttonDisabled, setButtonDisabled] = useState(true);
        useEffect(() => {
            formSchema
            .isValid(pState)
            .then(valid => {setButtonDisabled(!valid);
            })
        }, [pState]);

// VALIDATION STATES
    const [errorState, setErrorState] = useState({
        name: "",
        pSize: "",
        pCrust: "",
        pSause: "",
        xtraCheese: "",
        mushrooms: "",
        pepperoni: "",
        sausage: "",
        comments: "",
    });

// VALIDATION
    const validate = e => {
        let value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
            });
        })
            .catch( err => {
                // console.log(err.errors)
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
            });
        });
    };

// INPUTCHANGE FUNCTION
    const inputChange = e => {
        e.persists();
        validate(e);
        let value = 
        e.target.type === "checkbox" ? e.target.checkbox : e.target.value
        setPstate({...pState, [e.target.name]: value });
        };
    
// FORMSUBMIT FUNCTION
    const submitPizza = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post('https://reqres.in/api/users', pState)
            .then( response => console.log(response))
            .catch( err => console.log(err));
        };
return (
        <div className="container">
        <Home />
        <div className="form">
            <form onSubmit={submitPizza}>
                <label htmlFor="name">Please tell us your name:
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={pState.name}
                        onChange={inputChange}
                        />
                    </label>
        
        <div><h2>Build your own pizza!</h2></div>
        <div><h5>Costruisci la tua pizza!</h5></div> 
                <label htmlFor="pSize">Seleziona la dimensione
                    <select 
                        name="pSize"
                        id="pSize"
                        value={pState.pSize} 
                        onChange={inputChange}
                        >  
                        <option></option>
                        <option value="Tiny">Piccolo (Tiny 4")</option>
                        <option value="Small">Minuscolo (small 8")</option>
                        <option value="Medium">Mezzano (medium 12")</option>
                        <option value="Large">Grande (large 16")</option>
                        <option value="Huge">Enorme (huge 20")</option>
                    </select>
                </label>
                 <label htmlFor="pCrust">Choose Crust
                    <select 
                        name="pCrust"
                        id="pCrust"
                        value={pState.pCrust} 
                        onChange={inputChange}
                        >  
                        <option></option>
                        <option value="handTossed">Hand Tossed</option>
                        <option value="personalPan">Personal Pan</option>
                        <option value="deepDish">Deep Dish</option>
                        <option value="thinCrust">Thin Crust</option>
                    </select>
                </label>
                  <label htmlFor="pSause">Choose Sause
                    <select 
                        name="pSause"
                        id="pSause"
                        value={pState.pSause} 
                        onChange={inputChange}
                        >  
                        <option></option>
                        <option value="No Sauce">No Sauce</option>
                        <option value="Fresh Garlic Sauce">Fresh Garlic Sauce</option>
                        <option value="Tuscan Pizza Sauce">Tuscan Pizza Sauce</option>
                        <option value="Garlic & Butter Sauce">Garlic & Butter Sauce</option>
                        <option value="Pesto-Basil Sauce">Pesto-Basil Sauce</option>
                    </select>
                </label>
                <label htmlFor="xtraCheese">Xtra Cheese 
                    <input 
                        type="checkbox" 
                        name="xtraCheese" 
                        id="xtraCheese" 
                        checked={pState.xtraCheese} 
                        onChange={inputChange} 
                        />
                        {
                        errorState.xtraCheese.length > 0 ?
                        (<p className="error">{errorState.xtraCheese}</p>)
                        : null
                        }
                    </label>
                    <label htmlFor="mushrooms">Mushrooms 
                    <input 
                        type="checkbox" 
                        name="mushrooms" 
                        id="mushrooms" 
                        checked={pState.mushrooms} 
                        onChange={inputChange} 
                        />
                        {
                        errorState.mushrooms.length > 0 ?
                        (<p className="error">{errorState.mushrooms}</p>)
                        : null
                        }
                    </label>
                    <label htmlFor="pepperoni">Pepperoni
                    <input 
                        type="checkbox" 
                        name="pepperoni" 
                        id="pepperoni" 
                        checked={pState.pepperoni} 
                        onChange={inputChange} 
                        />
                        {
                        errorState.pepperoni.length > 0 ?
                        (<p className="error">{errorState.pepperoni}</p>)
                        : null
                        }
                    </label>
                    <label htmlFor="sausage">Sausage 
                    <input 
                        type="checkbox" 
                        name="sausauge" 
                        id="sausauge" 
                        checked={pState.sausauge} 
                        onChange={inputChange} 
                        />
                        {
                        errorState.sausauge.length > 0 ?
                        (<p className="error">{errorState.sausauge}</p>)
                        : null
                        }
                    </label>
                <label htmlFor="textarea">Anything else you would like to add?
                    <textarea 
                        name="comments" 
                        id="comments" 
                        value={pState.comments} 
                        onChange={inputChange} 
                        >       
                    </textarea>
                        {
                        errorState.comments.length > 0 ?
                        (<p className="error">{errorState.comments}</p>)
                        : null
                        }
                        </label>




            </form>
        </div>
    </div>
)};

export default OrderForm;