ASSIGNMENT:5

Q1

const find_product = () =>
{
    let count=1;
    for(i=1;i<=5;i++)
    {
        count=count*i;
    }
    return count;
}
console.log(find_product());


Q2

const find_sum = () =>
{
    let count=0;
    for(let i=1;i<=5;i++)
    {
        count=count+i;
    }
    return count;
}
console.log(find_sum());

Q3

let n=433312;
let m=n.toString();
let count=0;
const find_count = () =>
{
    for(let i=0;i<m.length;i++)
    {
        if(m[i]==3)
        {
            count++;
        }
    }
    return count;
}
console.log(find_count());


Q4

const findOddEven = () =>
{
    let A=[1,2,3,4,5,6,7];
    let sumeven=0;
    let sumodd=0;
    for(let i=0;i<A.length;i++)
    {
        if(A[i]%2==0)
        {
            sumeven+=A[i];
        }
        else
        {
            sumodd+=A[i];
        }
    }
    let b=[sumeven,sumodd]
    return b;
}
console.log(findOddEven());

Q5

const findNumber = () =>
{
    let n=[1,2,3,4,5,2];
    let nn=3;
    if(n.includes(nn))
    {
        return "Yes";
    }
    else
    {
        return "NO";
    }
}
console.log(findNumber())

Q6

const highAge = () =>
{
    let age=[6,11,23,3,45,72,68];
    let result=[];
    for(let i=0;i<age.length;i++)
    {
        if(age[i]>=18)
        {
            result.push(age[i]);
        }
    }
    return result;
}
console.log(highAge());

Q7

const incArr = () =>
{
    let a=[1,2,3,4,5,6];
    
    for(let i=0;i<a.length;i++)
    {
        a[i]=a[i]+1;
    }
    return a;
}
console.log(incArr());

Q8

const isAllPass = () =>
{
    let a=[7,13,89,45,98];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>=32)
        {
            return "Pass";
        }
        else
        {
            return "fail";
        }
    }
}
console.log(isAllPass());

Q9



Q10

let a=[66,44,33,11,22,77];
a.sort();
console.log(a[0]+" " + a[a.length-1]);


