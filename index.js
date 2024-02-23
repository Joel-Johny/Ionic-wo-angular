
const clrBtn=document.getElementById("clr-btn")
const addBtn=document.getElementById("add-btn")
let itemIdCounter = 0; // Initialize a counter for item IDs
let total = document.getElementById("total")
console.log("Loaded")

clrBtn.addEventListener('click',()=>{
    console.log("clr btn clicked")

    const reasonInp=document.getElementById("Reason")
    const expenseInp=document.getElementById("Amount")
    reasonInp.value=''
    expenseInp.value=''

})

addBtn.addEventListener('click',()=>{
    console.log("add btn clicked")

    const reasonInp=document.getElementById("Reason")
    const expenseInp=document.getElementById("Amount") // star1
    const value =expenseInp.value // star2
    if(reasonInp.value.trim().length==0 || expenseInp.value <=0 || !isNaN(reasonInp.value))
        return
    else{
        const result=document.getElementById("result")
        const element=document.createElement('ion-item')
        const elementDelete=document.createElement('ion-button')

        elementDelete.textContent="Delete"
        elementDelete.color="danger"
        elementDelete.slot="end"
        elementDelete.addEventListener('click',()=>deleteItem(result,element.id,value)) //here If i pass star1.value then code wont work and delete fn will receive undefined so have to send star 2

        element.textContent=`${reasonInp.value} : $ ${parseFloat(expenseInp.value)}`
        element.appendChild(elementDelete)
        // element.classList.add("ion-align-items-center","ion-justify-content-center")
        element.id=`item-${itemIdCounter++}`
        result.appendChild(element)
        total.textContent=parseFloat(total.textContent)+parseFloat(expenseInp.value)
        reasonInp.value=''
        expenseInp.value=''
    }
    

    
})

function deleteItem(result,elementId,amount){
    const elementToDelete = document.getElementById(elementId);
    console.log("VAlue deleted : " ,amount)
    if (elementToDelete) {
        result.removeChild(elementToDelete);
        total.textContent=parseFloat(total.textContent)-parseFloat(amount)

    }
}
