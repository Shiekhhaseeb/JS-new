function getData()
{
   fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));

  console.log("hello")
}

//getData();
print()

async function getData2()
{
    const rawResponse = await fetch('https://fakestoreapi.com/products');
    const res =await rawResponse.json()
    console.log(res)
}

function print()
{
    getData2();
    console.log("hello")
}