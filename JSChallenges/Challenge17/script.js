
let addButton = document.getElementById("addTask").addEventListener("click",AddToShop);


let shopList = [];



function AddToShop()
    {
        let item = document.getElementById("taskInput").value;
        shopList.push({name: item,checked: false});

        console.log(shopList);

        updateShopList();
    }
    function updateShopList()
    {
        document.getElementById("taskList").innerHTML = shopList.map((item, index) => 
        `<li>
            <input type="checkbox" ${item.checked ? 'checked' : ''} onclick="toggleCheckbox(${index})">
            ${item.name}
            <button onclick="removeFromShop(${index})">Remove</button>
        </li>`).join("");
    }
    function toggleCheckbox(index)
    {
        shopList[index].checked = !shopList[index].checked;
        console.log(shopList);
    }
    function removeFromShop(index)
    {
        shopList.splice(index,1);
        updateShopList();

    }

