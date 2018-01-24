const companies=[
    {name: "skoda", category: "cars", start: 1981, end: 2003},
    {name: "nykredit", category: "finance", start: 1983, end: 2008},
    {name: "facepunch", category: "games", start: 2009, end: 2018},
    {name: "7/11", category: "retail", start: 1970, end: 2007},
    {name: "asus", category: "computers", start: 1961, end: 2013},
    {name: "aragaza", category: "clothes", start: 1990, end: 2015},
    {name: "netto", category: "retail", start: 1995, end: 2095},
    {name: "noctua", category: "computers", start: 1970, end: 2017}

]

const ages = [1, 22, 24, 51, 91, 55, 26, 32, 41, 15, 19, 59]



// forEach

    // companies.forEach(function(company){
    // console.log(company.name)

    // })


// filter
    // GET 21 AND OLDER

    // const canDrink = ages.filter(function(age){
    //     if(age >= 21){
    //         return true;
    //     }
    // })

    // ARROW FUNCTION VERSION

    // const canDrink = ages.filter(age => age >= 21)

    // console.log(canDrink)

    // FILTER RETAIL COMPANIES & OTHERS

    // const retailCompanies = companies.filter(function(company){
    //     if(company.category === "retail"){
    //         return true;

    //     }
    // })

    

    // const retailCompanies =companies.filter(company => company.category === "retail")
    // console.log(retailCompanies)

    // const computerCompanies = companies.filter(company => company.category === "computers")
    // console.log(computerCompanies)

    // FILTER 80'S COMPANIES AND BEFORE 2010

    // const oldCompanies = companies.filter(function(company){
    //     if(company.start >= 1980 && company.start < 1990){
    //         return true
    //     }
    // })

    // const oldCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
    // console.log(oldCompanies)

    // const dedCompanies = companies.filter(company => company.end <= 2010)
    // console.log(dedCompanies)

    


// map

// CREATE ARRAY OF COMPANY NAMES
// const companyNames = companies.map(function(company){
// return company.name
// })

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`
//     })

// const testMap = companies.map(company =>
//      `${company.name} [${company.start} - ${company.end}]`
// )
// console.log(testMap)


// const ageMap = ages
// .map(age => Math.sqrt(age))
// .map(age => age * 2);

// console.log(ageMap)




// sort
// TAKES TWO ITERATIONS AND COMPARES THEM
// SORT COMPANIES BY START YEAR

// const sortedCompanies = companies.sort(function(c1, c2){
// if(c1.start > c2.start){
// return 1;
// }else{
//     return -1
// }
// })

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
// console.log(sortedCompanies)

// SORT AGES
// IF DONE LIKE THIS IS ONLY LOOKS ON THE FIRST NUMBER AND SORTS IT BY THAT
// const sortAges = ages.sort();
// console.log(sortAges)

// CAN BE REVERSED BY CHANGING A - B to B - A
// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges)

// reduce
// NORMAL WAY TO DO IT WITH FORLOOP
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i]

// }

// const ageSum = ages.reduce(function(total, age){
//  return total + age
// }, 0);


// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum)   

// GET TOTAL YEARS OF ALL COMPANIES

// const totalYears = companies.reduce(function(total, company){
//  return total + (company.end - company.start)
// },0)

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears)


// COMBINE METHODS


const combined = 
ages.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => a - b)
.reduce((a, b) => a + b, 0)



console.log(combined)
