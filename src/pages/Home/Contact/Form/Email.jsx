import emailjs from "@emailjs/browser";

const sendCustomEmail = (details) => {
    emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
    emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            details
        )
        .then((response) => {
            console.log(response); // Log the response for debugging
        })
        .catch((error) => {
            console.log(error); // Log errors for debugging
        });
};

export { sendCustomEmail };
