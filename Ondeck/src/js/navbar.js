function floatingOptions(identifier) {
  const floatingOptions = document.querySelectorAll('.floating__options');
  floatingOptions.forEach((option) => {
    option.hidden = true;
  });


  const selectedOption = document.getElementById(`${identifier}-options`);
  console.log(selectedOption);
  const parentNavItem = document.getElementById(`${identifier}`);
  const top = parentNavItem.offsetTop + parentNavItem.offsetHeight*2;
  selectedOption.style.top = `${top}px`;
  selectedOption.style.left = `-50px`;
  selectedOption.hidden = false;
}



document.addEventListener('click', function (event) {
  const target = event.target;

  if (!target.closest('.header') && !target.closest('.floating__options')) {
    const floatingOptions = document.querySelectorAll('.floating__options');
    floatingOptions.forEach((option) => {
      option.hidden = true;
    });
  }
});

