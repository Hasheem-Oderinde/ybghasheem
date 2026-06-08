
      const scriptURL =                       
      "https://script.google.com/macros/s/AKfycbzN-q9yitos_Yg6ukXVf4o_t-FSLJCDL3wCP53TWUv8YcyAY0qMx5tVxF-dTwgwXomR/exec";
      const form = document.forms["submit-to-google-sheet"];
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        var formData = new FormData(form);

        fetch(scriptURL, { method: "POST", body: formData })
          .then((response) => {
            swal("Done", "Submitted Successfully.", "success");
          })
          .catch((error) => {
            swal("Error", "Something went wrong. please try again!", "error");
          });
      });

    