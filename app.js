let response = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(body)
            });


const submitBtn = document.querySelector("btn solid");
submitBtn.addEventListener('click', response);

