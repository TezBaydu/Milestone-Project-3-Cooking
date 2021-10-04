// emailJS contact form handling

function sendMail(contactForm) {
    emailjs.send("service_8tumlwn", "template_a6up13t", {
        "from_first_name": contactForm.contact_firstName.value, 
        "from_last_name": contactForm.contact_lastName.value, 
        "from_email": contactForm.contact_email.value,
        "contact_option": contactForm.contact_options.value,
        "eatin_message": contactForm.contact_message.value,
    }, "user_jtbYcTDIFOX4Z8NAmbqq3")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}