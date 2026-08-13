document.getElementById("tax_form").addEventListener("submit", function (event) {
    event.preventDefault()


    let basic_salary = Number(document.getElementById('basic').value)
    let benefits = Number(document.getElementById('benefits').value)


    //GROSS
    function calculate_gross(basic, benefits) {
      return basic + benefits;
    }

    let gross_salary = calculate_gross(basic_salary, benefits);
    document.getElementById('gross').innerHTML = gross_salary




    //NHIF
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

    

     //NHDF
    function calculate_nhdf(gross){
       return gross * 0.015
    }
    let nhdf = calculate_nhdf(gross_salary)
    document.getElementById('nhdf').innerHTML = nhdf

    



    //NSSF
    function calculate_nssf(gross){
      let nssf
       if(gross < 18000){
           nssf = 0
       }else{
         nssf = 18000 * 0.06
       }
       return nssf
    }
    let nssf = calculate_nssf(gross_salary)
    document.getElementById('nssf').innerHTML = nssf



   //TAXABLE INCOME
    function calculate_taxable_income(gross,nssf,nhif,nhdf){
        let taxable = gross - (nssf + nhif + nhdf)
        return taxable
    }

    let taxable_income = calculate_taxable_income(gross_salary,nssf,nhif,nhdf)
    document.getElementById('taxable').innerHTML = taxable_income



 //PAYEE
    function calculate_payee(taxable_income){
        let payee 
        let relief = 2400
        if(taxable_income >0 && taxable_income <= 24000){
            payee = 2400
        }else if(taxable_income > 24000 && taxable_income <= 32_333){
            payee = 2400 + ((taxable_income - 24000) * 0.25)
        }else if(taxable_income > 32_333 && taxable_income <= 500_000){
            payee = 2400 + (8333 * 0.25) + ((taxable_income - 32333) * 0.3)
        }else if(taxable_income > 500_000 && taxable_income <= 800_000){
            payee = 2400 + (8333 * 0.25) + (467_667 * 0.3) + ((taxable_income - 500_000) * 0.325)
        }else{
          payee = 2400 + (8333 * 0.25) + (467667 * 0.3) + (300_000 * 0.325) + ((taxable_income - 800_000)* 0.35)
        }
        return payee - relief
    }

    let payee = calculate_payee(taxable_income)
    document.getElementById('payee').innerHTML = payee




    //NET SALARY
    function calculate_net_salary(gross,nhif,nssf,nhdf,payee){
        return gross - (nhif + nssf + nhdf + payee)
    }
    let net_salary = calculate_net_salary(gross_salary,nhif,nssf,nhdf,payee)
    document.getElementById('net').innerHTML = net_salary




});
