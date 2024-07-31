
// // const arr =[1,2,3,4,5,6]

// // a1= arr.slice(0,2)
// // console.log(a1)

// // a2 =arr.slice(4)
// // console.log(a2)

// // a3=[...a1,8,...a2]
// // console.log(a3)

// // data=[1,2,3,4,5,6,7]

// // const[, , ...a]=data;
// // console.log(data[0])
// // console.log(a)

// const data = [
//     {
//       name: "Alice Johnson",
//       age: 28,
//       gender: "Female",
//     },
//     {
//       name: "Michael Smith",
//       age: 35,
//       gender: "Male",
//     },
//     {
//       name: "Emma Brown",
//       age: 22,
//       gender: "Female",
//     },
//     {
//       name: "Daniel Wilson",
//       age: 30,
//       gender: "Male",
//     },
//     {
//       name: "Olivia Davis",
//       age: 26,
//       gender: "Female",
//     },
//     {
//       name: "James Martinez",
//       age: 40,
//       gender: "Male",
//     },
//     {
//       name: "Sophia Garcia",
//       age: 33,
//       gender: "Female",
//     },
//     {
//       name: "Benjamin Lee",
//       age: 27,
//       gender: "Male",
//     },
//     {
//       name: "Ava White",
//       age: 29,
//       gender: "Female",
//     },
//     {
//       name: "Henry Harris",
//       age: 31,
//       gender: "Male",
//     },
//   ];
  
//   const user1 = [
//     {
//       name: "Ava White",
//       age: 31,
//       gender: "Female",
//     },
//     {
//       name: "Henry Harris",
//       age: 29,
//       gender: "Male",
//     },
//   ];

//   const mapdata = map(x=>{
//     if(gender=="Male")
//     return {...data, age: x.age=1}
    
//   })

//   console.log(mapdata)

//   console.log(user1)

//   const filterdata = filter(x=>{
//     if(x.gender=="Male")
//     return {...data, age: x.age=1}
    
//   })

//   console.log(filterdata)

//   console.log(user1)/

const data = [
    {
      name: "Alice Johnson",
      age: 28,
      gender: "Female",
    },
    {
      name: "Michael Smith",
      age: 35,
      gender: "Male",
    },
    {
      name: "Emma Brown",
      age: 22,
      gender: "Female",
    },
    {
      name: "Daniel Wilson",
      age: 30,
      gender: "Male",
    },
    {
      name: "Olivia Davis",
      age: 26,
      gender: "Female",
    },
    {
      name: "James Martinez",
      age: 40,
      gender: "Male",
    },
    {
      name: "Sophia Garcia",
      age: 33,
      gender: "Female",
    },
    {
      name: "Benjamin Lee",
      age: 27,
      gender: "Male",
    },
    {
      name: "Ava White",
      age: 29,
      gender: "Female",
    },
    {
      name: "Henry Harris",
      age: 31,
      gender: "Male",
    },
  ];
  
  const user1 = [
    {
      name: "Ava White",
      age: 31,
      gender: "Female",
    },
    {
      name: "Henry Harris",
      age: 29,
      gender: "Male",
    },
  ];

  
  const finalArr = [
    ...data,
    ...user1
  ]

  console.log(finalArr);


//   methods 
//   const arr = [1,2,3,4];

//   console.log(arr.indexOf(2));
  
//   const index = data.find(x => {
//     return x.name==="Alice Johnson";
//   });

//   console.log(index);

//   const maleRecord = data.filter(x => {
//     return x.gender='male';
//   });

//   console.log(maleRecord);

// //   const isChildExist = data.some(x => {
// //     x.age > 18;
// //   });

// //   console.log(isChildExist);

// //   const isChild = data.every(x => {
// //     x.age > 18;
// //   });

// //   console.log(isChild);


// // map method 

// const arr1 = [1,2,3,4,5];

// const newArray = arr1.map(item => {
//     return item * 2;
// })

// console.log(newArray);

// const updateArray = data.map(item => {
//     if(item.name == 'Ava White'){
//         return {...item , age:18 }
//     }
// })

// console.log(updateArray);

// const updateArray1 = data.map(item => {
//     if(item.gender == 'male'){
//         return {...item , age: item.age+1 }
//     }
// })

///console.log(updateArray1);

const arr_1 = [1,2,3,4,5]
const reduce = arr_1.reduce((prev,curr) =>{
    
    return prev+curr;
})
console.log(reduce)

const re_2 = data.reduce((p,c)=>{
    const key= c.gender;
    if(p[key]=== undefined){
        p[key]=[]
    }
    p[key].push(c);
    return p;
},{})
console.log(re_2);

const re_3 = data.reduce((p,c)=>{
    const agegroup= Math.floor(c.age/10);
    const key=`${agegroup}0-${agegroup+1}0`

    if(p[key]=== undefined){
        p[key]=[]
    }
    p[key].push(c);
    return p;
},{})

console.log(re_3)
