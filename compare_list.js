/*
Use this function to confirm which students are missing from a list.

First, you'll need to turn each of the lists into arrays.

*/


const findMissingName = (trueList, newList) => {
  let sortedTrue = trueList.sort(function(a, b) {
    return a - b;
  });  
  let sortedNew = newList.sort(function(a, b) {
    return a - b;
  });
  for(let i = 0; i < sortedTrue.length; i++) {
    if(sortedTrue[i] !== sortedNew[i]) {
        return sortedTrue[i];
    }
  }

  console.log('These lists match!')
}

const response = ["Chance Nguyen", 
"Emma Li", 
"Matthew Minseung Hong", 
"Andrew Kilduff", 
"Nathaniel Schwartz", 
"Paul Grant", 
"Stuart Hanford", 
"Zain Padela", 
"David Matthew Boyea", 
"Jason Strunk", 
"Jae Woo Ok", 
"Shawn Kim", 
"Javier Flores Apodaca", 
"Lisa Hou", 
"Turner Kraus", 
"Luke Eastman", 
"Olive Iosello", 
"Christopher Cali", 
"Ahmed Elawad", 
"Muhammad Meigooni", 
"John T Tirelli", 
"Charles Sellers", 
"August Dolan", 
"Kristina McMinn", 
"Brian Hauck", 
"Branan Landau", 
"Scott Mounce", 
"Samuel Clay", 
"Juan Vargas", 
"Claire Melbourne", 
"Taeksu Kim", 
"Tanzhi Liu", 
"Madison Stanford", 
"Owen Wexler", 
"Yousif Faraj", 
"Charles Quinton Sky Eddy", 
"Jase DiNardo", 
"Michael Tobias", 
"Abdulaziz Bouland", 
"Susannah Marcus", 
"Moe Chowdhury", 
"Jeremy England", 
"Harsh Vikram Singh", 
"Ardalan Djourabtchi"
];

const actualList = ["Ahmed Elawad", 
"Andrew Kilduff", 
"Ardy Djourabtchi", 
"August Dolan", 
"Aziz Bouland", 
"Branan Landau", 
"Brian Hauck", 
"Chance Nguyen", 
"Charlie Eddy", 
"Charlie Sellers", 
"Chris Cali", 
"Claire Melbourne", 
"David Boyea", 
"Emma Li", 
"Harsh Singh", 
"Jase DiNardo", 
"Jason Strunk", 
"Javier Flores", 
"Jeff Wang", 
"Jeremy England", 
"John Tirelli", 
"Juan Vargas", 
"Kristina McMinn", 
"Lisa Hou", 
"Luke Eastman", 
"Madison Stanford", 
"Matt Hong", 
"Michael Tobias", 
"Moe Chowdhury", 
"Muhammad Meigooni", 
"Nathaniel Schwartz", 
"Olive Iosello", 
"Owen Wexler", 
"Paul Grant", 
"Richard Ok", 
"Sam Clay", 
"Scott Mounce", 
"Shawn Kim", 
"Stu Hanford", 
"Susannah Marcus", 
"Taeksu Kim", 
"Turner Kraus", 
"TZ Liu", 
"Yousif Faraj", 
"Zain Padela"];