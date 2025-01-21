function greet(name,mycallback){

   return  mycallback(name)

}
greet("srikar",(name)=>{console.log(`hello to ${name}`)})

