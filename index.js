
const clrBtn=document.getElementById("clr-btn")
const addBtn=document.getElementById("add-btn")
let itemIdCounter = 0; // Initialize a counter for item IDs

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
    const expenseInp=document.getElementById("Amount")
    
    if(reasonInp.value.trim().length==0 || expenseInp.value <=0 || !isNaN(reasonInp.value))
        return
    else{
        const result=document.getElementById("result")
        const element=document.createElement('ion-item')
        const elementDelete=document.createElement('ion-button')

        elementDelete.textContent="Delete"
        elementDelete.color="danger"
        elementDelete.slot="end"
        elementDelete.addEventListener('click',()=>deleteItem(result,element.id))

        element.textContent=`${reasonInp.value} : $ ${expenseInp.value}`
        element.appendChild(elementDelete)
        // element.classList.add("ion-align-items-center","ion-justify-content-center")
        element.id=`item-${itemIdCounter++}`
        result.appendChild(element)
        reasonInp.value=''
        expenseInp.value=''
        
    }
    

    
})

function deleteItem(result,elementId){
    const elementToDelete = document.getElementById(elementId);
    if (elementToDelete) {
        result.removeChild(elementToDelete);
    }
}
