const myText = document.querySelector('.h1-event')

const ulItem = document.querySelector('ul');

const listItems = document.querySelectorAll('li')




//propagation, delegation, bubbling




const handleListItem = (event)=>{
  console.log("target",event.target)

    // event.target.style.backgroundColor = 'pink'
    event.target.classList.toggle('highlight')
}



console.log(myText)




myText.addEventListener('mouseover',(event)=>{
    event.target.style.backgroundColor='red'
    event.target.style.color='white'

})

myText.addEventListener('mouseout',(event)=>{
    event.target.style.backgroundColor=''
    event.target.style.color='black'

})
// ulItem.addEventListener('click', handleListItem)
ulItem.addEventListener('mouseover',handleListItem)


ulItem.addEventListener('mouseout',handleListItem)



console.log('global this',this)   //pointing to window/global object



// function myname(){

//     const name = {
//         firstName:'web-development'
//     }

//     const name2 = 'hello'

//     console.log('mynamne',this)
// }

// myname()



//this keyword gets bound to the nearest object properties
//bind, call, apply
const myObject1 = {

    firstName: 'web',
    lastName: 'Development',

    getFullName: function (state, country){

        console.log('fullname', this.firstName + this.lastName , state,country, this)
    }
}


// myObject1.getFullName()



const object2 = {
    firstName: 'coding',
    lastName: 'Ninjas',


    // getFullName: function (){
    //     console.log('fullname', this.firstName + this.lastName, this)
    // }
}

const myObject3 = {
    firstName: 'Backend',
    lastName: 'development',
}

// object2.getFullName()


//  myObject1.getFullName.call(object2, 'delhi', 'america')

// myObject1.getFullName.apply(object2, ['delhi', 'india'])

const result =    myObject1.getFullName.bind(myObject3)

// console.log('result',result)

result()



const getFoodItems = async()=>{
    //api calls
    alert('alert')

}


window.addEventListener('DOMContentLoaded',getFoodItems)