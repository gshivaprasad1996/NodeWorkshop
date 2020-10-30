function displayName(name){
    const myName = name //accessible through out the function
    console.log(myName)
    if(myName === 'shiva'){
        console.log("your name is", myName)
        const yourNextName = "prasad" //accessible through out the if condition block
        console.log(yourNextName)
    }
}

displayName('shiva')
