

const postContactForm = async() =>{
    const url = "https://reqres.in/api/users";

    const contactFormData = {
        fullName : "Estef",
        email : "miemail@email.com"
    }

    const options = {
        method: "POST",//DELETE, PUT, POST, GET
        header: {"Content-Type":"application/json"},
        body: JSON.stringify(contactFormData)
    }

    const response = fetch(url,options);
    const contactResult = (await response).json
    console.log(contactResult);

    return contactResult;
}

export{postContactForm};