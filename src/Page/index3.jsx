const button = document.querySelector('.btn_new');

const addlist = (event) => {
    event.preventDefault();
    const myclassList = document.querySelector('.myclass_list')
    const mylist = document.querySelector('.mylist');
    myclassList.appendChild(mylist);
};

button.addEventListener('click', addlist);