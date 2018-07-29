const input = document.getElementById("input");
const button = document.getElementById("button");
const lists = document.getElementById("list");
let menuList = [];
localData = JSON.parse(localStorage.getItem("ListBaru"));
if (localData != null) {
  menuList = localData;
}
button.addEventListener("click", function() {
  const simpan = input.value;
  menuList.push(simpan);
  tampilkan();
  input.value = "";
  localStorage.setItem("ListBaru", JSON.stringify(menuList));
});

tampilkan = () => {
  let view = "";
  for (let i = 0; i < menuList.length; i++) {
    view += `<li class="list-group-item" ><i class="fa fa-circle-o left"></i> ${
      menuList[i]
    } <i class="fa fa-remove right" onClick="remove(${i})"></i></li>`;
  }
  lists.innerHTML = view;
};

tampilkan();

remove = id => {
  menuList.splice(id, 1);
  localStorage.setItem("ListBaru", JSON.stringify(menuList));
  tampilkan();
};
