// window.localStorage.setItem('inputs', JSON.stringify(task_el))
// const task_el = JSON.parse(localStorage.getItem(inputs))


window.addEventListener('load', function(){

    // select the elements
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        const task = input.value;
            if(task === ''){
            alert('Please Enter Tasks')
            return;
        }

        // tasks
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        list_el.appendChild(task_el);


        // the input 
        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = ('text');
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);


        // tasks button(edit and delete button) 
        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';

        const task_delete_el = document.createElement('button');
           task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

         input.value = "";

         //edit and delete button in action
        task_edit_el.addEventListener('click', function(){
            if(task_edit_el.innerText.toLowerCase() == 'edit'){
                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.innerText = 'Save';
            }else{
                task_input_el.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
            
        });

        task_delete_el.addEventListener('click', function(){
            list_el.removeChild(task_el);
        });
    });

    window.addEventListener('beforeunload', function(event){
        event.preventDefault()
        return (event.returnValue = "");
    })
});



