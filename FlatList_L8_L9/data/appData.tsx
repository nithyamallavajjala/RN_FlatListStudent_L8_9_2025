 type dataType = {
    id: string; //refer to unique identifier
    title: string; //text we will show in list
  }
  //All caps bc data array wont change
  const DATA: dataType[] = [
    {id: "1", title: "First Item"},
    {id: "2", title: "Second Item"},
    {id: "3", title: "Third Item"},
    {id: "4", title: "Fourth Item"},
  ];
  //when you ar exporting more then one item you do not use 
  // the word default and put all items you are exporting 
  // in curly braces
  export { DATA, dataType };
