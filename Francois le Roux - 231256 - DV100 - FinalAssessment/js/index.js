document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const smoothieName = document.getElementById('smoothie').value;
  
      const sizeInput = document.querySelector('input[name="baseRadio"]:checked');
      const smoothieSize = sizeInput ? sizeInput.value : '';
  
      const ingredientsInputs = document.querySelectorAll('input[name="ingredients"]:checked');
      const ingredients = Array.from(ingredientsInputs).map(input => input.value);
  
      let totalCost = parseInt(sizeInput ? sizeInput.dataset.cost : 0);
      ingredientsInputs.forEach(input => {
        totalCost += parseInt(input.dataset.cost);
      });
  
      const smoothieOrder = document.createElement('div');
      smoothieOrder.classList.add('col-6');
      smoothieOrder.innerHTML = `
        <div class="card" style="width: 100%;">
          <div class="card-body">
            <h5 class="card-title">${smoothieName}</h5>
            <p>Size: ${smoothieSize}</p>
            <p>Ingredients: ${ingredients.join(', ')}</p>
            <p>Total Cost: $${totalCost.toFixed(2)}</p>
          </div>
        </div>
      `;
  
      const outputContainer = document.getElementById('studentOut');
      outputContainer.appendChild(smoothieOrder);
  
      
      form.reset();
    });
  });
  
    function calculatePrice(quantity, basePrice) {
    let totalPrice = quantity * basePrice;
  
    if (quantity >= 10) {
      totalPrice *= 0.9;
    }
  
    return totalPrice;
  }
  
  const quantity = 15;
  const basePrice = 10;
  
  const totalPrice = calculatePrice(quantity, basePrice);
  
  console.log("Total price: R" + totalPrice);

const smoothieName = "Tango";
const smoothieSize = "Large";
const smoothieIngredients = "Blue Berries, Pineapple";
const smoothieCost = 49.99; 

document.getElementById("smoothname").textContent = smoothieName;
document.getElementById("smoothsize").textContent = smoothieSize;
document.getElementById("smoothingredient").textContent = smoothieIngredients;
document.getElementById("smoothcost").textContent = smoothieCost.toFixed(2);
