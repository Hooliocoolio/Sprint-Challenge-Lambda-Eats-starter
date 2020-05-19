import React, {useState, useEffect} from "react";
import Pizza from "./Pizza";
import {Route, Link} from "react-router-dom";
// import Home from "./Home";
import * as yup from "yup";
import axios from "axios";
import logo from './favicon.jpg';
// import splash from './Pizza.jpg';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is a required field"),
    pSize: yup
        .string()
        .required("Please choose size"),
    pCrust: yup
        .string()
        .required("Please choose a crust "),
    pSause: yup
        .string()
        .required("Please choose sause "),
    xtraCheese: yup
        .boolean(),
    mushrooms: yup
        .boolean(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),    
    comments: yup
        .string(),
});

const OrderForm = () => {
  //FORM STATES  
    const [pState, setPstate] = useState({
        // id: Math.random(),
        name: "",
        pSize: "",
        pCrust: "",
        pSause: "",
        xtraCheese: false,
        mushrooms: false,
        pepperoni: false,
        sausage: false,
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
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then( valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: []
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
        e.persist();
        validate(e);
        let value = 
        e.target.type === "checkbox" ? e.target.checkbox : e.target.value;
        setPstate({ ...pState, [e.target.name]: value });
        };
    
// FORMSUBMIT FUNCTION
    const submitPizza = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post('https://reqres.in/api/users', pState)
            .then( response =>  console.log(response))
            .catch( err => console.log(err));
        };
return (
        <div className="container">
        {/* <Home /> */}
         <div className="header"><img src={logo} className="App-logo" alt="logo" /><h1>Hoo's Pizza!</h1> </div>
        <div className="splash">
       
        </div>
        <div className="form">
            <div><form onSubmit={submitPizza}>
                <table>
                <thead></thead>
                <tbody>
                
                
                    <tr>
                     <td>Name:</td>
                        <td>
                        <label htmlFor="name">Please tell us your name:
                        <input
                        type="text"
                        name="name"
                        id="name"
                        value={pState.name}
                        onChange={inputChange}
                        />
                    </label>
                    </td></tr><tr>
                    <td>Pizza Size</td> 
                    <td>
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
                </label></td></tr><tr>
                    <td>Choose Crust</td> 
                    <td><label htmlFor="pCrust">Choose Crust
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
                </label></td></tr>
                        <tr>
                    <td>Choose Sause</td>
                    <td><label htmlFor="pSause">Choose Sause
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
                </label></td></tr><tr>
                    <td>Toppings</td> 
                    <td><label htmlFor="xtraCheese">Xtra Cheese 
                        <input 
                        type="checkbox" 
                        name="xtraCheese" 
                        id="xtraCheese" 
                        checked={pState.xtraCheese} 
                        onChange={inputChange} 
                        />
                        </label>
                    <label htmlFor="mushrooms">Mushrooms 
                    <input 
                        type="checkbox" 
                        name="mushrooms" 
                        id="mushrooms"
                        className="mushrooms"
                        checked={pState.mushrooms} 
                        onChange={inputChange} 
                        />
                    </label>
                    <label htmlFor="pepperoni">Pepperoni
                    <input 
                        type="checkbox" 
                        name="pepperoni" 
                        id="pepperoni" 
                        checked={pState.pepperoni} 
                        onChange={inputChange} 
                        />
                    </label>
                    <label htmlFor="sausage">Sausage 
                    <input 
                        type="checkbox" 
                        name="sausage" 
                        id="sausage" 
                        checked={pState.sausage} 
                        onChange={inputChange} 
                        />
                     </label>
                     </td></tr><tr>
                    <td>Extra Instructions:</td>
                    <td><label htmlFor="textarea">Anything else you would like to add?
                    <textarea 
                        name="comments" 
                        id="comments" 
                        value={pState.comments} 
                        onChange={inputChange} 
                        >       
                    </textarea>
                        </label>
                        </td></tr>
                        <tr><td> <button id="submitBtn"  >Submit</button></td></tr>
                           </tbody><tfoot></tfoot>
                         </table></form>
        <li>
            <Link to="/Pizza">Pizza</Link>
        </li>
            <Route path="/Pizza">
                <Pizza />
                    </Route>
      
    </div>
    </div>
    </div>
)};

export default OrderForm;