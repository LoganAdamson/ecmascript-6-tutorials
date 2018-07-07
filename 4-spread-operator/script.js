window.onload = function() {

  //  var meats = ["ham", "salami", "bacon"];

  //  console.log(...meats);


  // var nums1 = [1, 2, 3];

  // Displays an array within an array:
  // var nums2 = [nums1, 4, 5, 6];

  // Displays the numbers altogether as if in a single array:
  // var nums2 = [...nums1, 4, 5, 6];

  // console.log(numbs2);

  var nums = [3, 5, 7];
  
  function addNums(a, b, c){
      console.log(a+b+c);
  }
  // Populates as "3,5, 7undefinedundefined":
  // addNums(nums);

  addNums(...nums);

}