import React, {useState} from 'react';

const App = () => {
    const [details, setDetails] = useState({
        fname: "",
        lname: "",
        email: "",
    });

    const inputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log(name);
        setDetails((preValue) => {
            return {
                ...preValue,
                [name]: value
            }

            // if(name === 'fName'){
            //     return {
            //     fname: value,
            //     lname: preValue.lname,
            //     email: preValue.email
            //     }
            // }
            // else if(name === 'lName'){
            //     return {
            //     fname: preValue.fname,
            //     lname: value,
            //     email: preValue.email
            //     }
            // }
            // else {
            //     return {
            //     fname: preValue.fname,
            //     lname: preValue.lname,
            //     email: value
            //     } 
            // }
        })
        
    }
    onsubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted');
    }

    return ( 
        <>
            <form onsubmit={onsubmit}>
                <div>
                    <h2> Hello {details.fname} {details.lname} </h2>
                    <h3> {details.email} </h3>
                    <input 
                        type="text"
                        placeholder="Enter your first name "
                        name="fname"
                        onChange={inputEvent}
                        value={details.fname}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter your last name "
                        name="lname"
                        onChange={inputEvent}
                        value={details.lname}
                    />
                    <br />
                    <input 
                        type="email"
                        placeholder="Enter your email name "
                        name="email"
                        onChange={inputEvent}
                        value={details.email}
                    />
                    <br />
                    <button type="submit"> Click Me </button>
                </div>
            </form>
        </>
     );
}
 
export default App;
