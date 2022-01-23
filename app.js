function add_coment() {
    
    // let coment_id = 1;
    let input_coment = document.getElementById("input_coment").value;
   
    document.querySelector("#input_coment").value="";

    document.querySelector(".secondpart_default .submit_coment").innerHTML=input_coment;
    
    let default_template = document.querySelector(".secondpart_default");
    let clone = default_template.cloneNode(true);
    document.querySelector(".comments_area").prepend(clone);

    let cloned_template = document.querySelector(".comments_area .secondpart_default");
    cloned_template.classList.add('secondpart');
    cloned_template.classList.remove('secondpart_default');
    
    document.querySelector(".secondpart button").setAttribute("id", Math.floor(Math.random() * 100 ));

   let  deleteButton =  document.querySelector(".secondpart button");

  deleteButton.addEventListener('click', (i) => i.target.parentNode.parentNode.remove(), false);

}  
