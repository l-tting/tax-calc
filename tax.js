document.getElementById("tax_form").addEventListener("submit", function (event) {
    event.preventDefault()


    let basic_salary = Number(document.getElementById('basic').value)
    let benefits = Number(document.getElementById('benefits').value)

    function calculate_gross(basic, benefits) {
      return basic + benefits;
    }

    let gross_salary = calculate_gross(basic_salary, benefits);
    document.getElementById('gross').innerHTML = gross_salary



    function calculate_nhif(gross) {
      let nhif;
      if (gross > 0 && gross <= 5999) {
        nhif = 150;
      } else if (gross <= 7999) {
        nhif = 300;
      } else {
        nhif = 1700;
      }
      return nhif;
    }

    let nhif = calculate_nhif(gross_salary);
     document.getElementById('nhif').innerHTML = nhif




});
