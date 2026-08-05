//object inside array
//very usefull in real applications
const users=[
    {userId: 1,firstName:'muskan',gender:'female'},
    {userId: 2,firstName:'iqra',gender:'female'},
    {userId: 3,firstName:'sehrish',gender:'female'},
]
for(let user of users){
    console.log(user.firstName)
}
