const categoriesItemEl = document.querySelectorAll('.item');
const titleEl = document.querySelectorAll('h2');
const amountItemEl = document.querySelectorAll('.item ul');

console.log('Number of categories:', categoriesItemEl.length);

categoriesItemEl.forEach((value) => {
    
    console.log("Category:", value.firstElementChild.textContent);
    
    console.log("Elements:", value.lastElementChild.children.length);
});

























