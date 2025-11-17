function validateForm()
{
    let uname = document.contactMe.name.value;
    let email = document.contactMe.email.value;
    let num = document.contactMe.phone.value;
    let message = document.contactMe.msg.value;

    if(uname == "" || email == "" || num == "" || message == "")
        alert("Please fill all the fields!");
    else if(num.length != 10)
        alert("Only provide a 10- digit number");
    else if(!email.includes("gmail.com")&& !email.includes("outlook.com")&& !email.includes("utrgv.edu"))
        alert("Email Address should be either Gmail, Outlook, or UTRGV");
    else if(message.length <= 5)
        alert("Compose a longer message so I can help you Better.");
    else{
        alert("Loading mail client");

        let subject = `Message from Portfolio Website ${uname}`;

        let body = `From: ${email} \nPhone: ${num}\nMessage: ${message}\n`;

        let mailtolink = `mailto: reginazorrillag@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtolink; 
    }
}