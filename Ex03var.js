function add(first,second)
{
    return first+second
}
 result =add(1,2)
console.log(`the Result is ${result}`)

const getfullname=function(...args)
{
let fullname = " "
for(const name of args)
{
    fullname+=name +" "
}
return fullname
}
 result =getfullname("v","vidhya","harsha")
console.log(result)