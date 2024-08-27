
const myInput: HTMLInputElement | null = document.getElementById('input') as HTMLInputElement;
const myButton: HTMLButtonElement | null = document.querySelector('#add');
const myList: HTMLUListElement | null = document.getElementById('list') as HTMLUListElement;

if (myButton) {
  myButton.addEventListener('click', () => {
    if (myInput) {
      const inputValue: string = myInput.value;
      myInput.value ="";
      if (myList){
        const myElement =document.createElement("li");
        myElement.classList.add('list-group-item');
        myElement.classList.add('bg-light',);

        const textSpan = document.createElement("span");
        textSpan.innerText = inputValue;
        myElement.appendChild(textSpan);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("btn-group", "btn-group-sm", "Align-items-end",);

        const doneButton = document.createElement("button");
        doneButton.innerText = "Done";
        doneButton.classList.add('btn', "btn-outline-success", 'btn-sm', 'mx-1'); 
        doneButton.addEventListener('click', () => {
          textSpan.classList.toggle('text-decoration-line-through'); 
        });
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add('btn', "btn-outline-danger", 'btn-sm', 'mx-1'); 
        deleteButton.addEventListener('click', () => {
          myElement.remove(); 
        });

        buttonContainer.appendChild(doneButton);
        buttonContainer.appendChild(deleteButton);

        myElement.appendChild(buttonContainer);

        myList.appendChild(myElement);
      }

    }
  });
}
