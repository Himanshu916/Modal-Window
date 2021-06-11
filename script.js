const showModal = document.querySelectorAll(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

for (let i=0;i<showModal.length;i++)
{
    showModal[i].addEventListener("click",(e)=>
    {
        modal.classList.remove("hidden")
        overlay.classList.remove("hidden")
    })
}

const closeModal = ()=>
{
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

closeBtn.addEventListener("click",closeModal)
overlay.addEventListener("click",closeModal)

document.addEventListener("keydown",(e)=>
{
    if(e.key === "Escape")
    {
     closeModal()
    }
})