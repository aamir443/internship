function findTax(salary) {
    let tax = 0;
  
    switch (true) {
      case (salary > 0 && salary <= 500000):
        tax = 0; // 0% tax
        break;
      case (salary > 500000 && salary <= 1000000):
        tax = salary * 0.10; // 10% tax
        break;
      case (salary > 1000000 && salary <= 1500000):
        tax = salary * 0.20; // 20% tax
        break;
      case (salary > 1500000):
        tax = salary * 0.30; // 30% tax
        break;
      default:
        return 'Error: Invalid salary input!';
    }
  
    return tax;
  }
  
  console.log(findTax(400000));  
  console.log(findTax(750000));  
  console.log(findTax(1200000)); 
  console.log(findTax(2000000)); 
  