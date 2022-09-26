// Nav Button on Mobile Devices
const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    nav.classList.toggle('flex')
})

// Javascript code for Back to Top Button

    var toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

// jQuery Form Validation Methods
    $(document).ready(function() {
        $('#applicationForm').validate({
            rules:{
                firstName:{
                    required:true,
                    minlength: 2
                },
                lastName:{
                    required:true,
                    minlength: 2
                },
                phone:{
                    required:true,
                    minlength: 10,
                    maxlength: 10,
                    digits: true
                },
                email:{
                    required:true,
                    email:true
                },
                bondAmount:{
                    required:true,
                    digits: true,
                    minlength: 6
                }
            },
            messages: {
                firstName: {
                    required: "Please enter your first name",
                    minlength: "Name at least 2 characters"
                },
                lastName: {
                    required: "Please enter your last name",
                    minlength: "Name at least 2 characters"
                },
                phone: {
                    required: "Please enter your phone number",
                    minlength: "Please enter a 10 digit number",
                    digits: "Enter numbers only please"
                },
                email: {
                    required: "Please enter your email",
                    email: "Not a valid email address"
                },
                bondAmount: {
                    required: "Please enter your bond amount",
                    digits: "Please enter numbers only",
                    minlength: "Please enter at least six figures"
                }
            },    
            
            submitHandler: function(form) {
            form.submit();
            }
        });
        $('#subscriberForm').validate({
            rules:{
                subscriber:{
                    required:true,
                    email:true
                }
            },
            messages: {
                subscriber:{
                    required: "Please enter your email",
                    email: "Not a valid email address"
                }
            },    
            
            submitHandler: function(form) {
            form.submit();
            }
        });
    });