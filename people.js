import { people } from "./people_data.js";
const tableBody = document.querySelector("#myTable tbody");
document.addEventListener("DOMContentLoaded", () => {


  const userTable = (users) => {
    users.forEach(
      (user) =>
        (tableBody.innerHTML += `<tr>
            <td class="">${user.id}</td>
            <td><img style="width:30px; height:30px; border-radius:50%;" src="${
              user.avatar
            }" alt="Sample Image"></td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phoneNumbers.join(", ")}</td>
            <td>${user.city}</td>
            <td>${user.state}</td>
            <td>${user.country}</td>
            <td>${user.zipcode}</td>
            <td>
              <div class="actions">
              <button onClick="showModel(${
                user.id
              })" class="edit-btn"><i class="fas fa-edit text-primary"></i></button>
              <button onclick="deleteUser(${
                user.id
              })" class="delete"><i class="fas fa-trash text-danger"></i></button>
              </div>
            </td>
            </tr>`)
    );
  }

  //   Show Model
  window.showModel = function (id) {
    editId = id;
    let user = data?.data.find((user) => user.id === id);
    document.querySelector("#edit-firstname").value = user.first_name;
    document.querySelector("#edit-lastname").value = user.last_name;
    document.querySelector("#edit-email").value = user.email;
    document.querySelector("div.edit").classList.add("edit-show");
  };

  // Show create form
  const showCreateBtn = document.querySelector(".show-create-user-btn");
  showCreateBtn.onclick = function () {
    document.querySelector("div.create").classList.add("show-create");
  };

  //   Close create form
  const closeCreateBtn = document.querySelector(".close-create-btn");
  closeCreateBtn.onclick = function () {
    document.querySelector("div.create").classList.remove("show-create");
  };

  //   Close edit model
  document.querySelector(".close-edit-btn").onclick = function () {
    document.querySelector("div.edit").classList.remove("edit-show");
  };

  //  <================== Tables Options ====================>
    // Search
  let searchInput = document.querySelector("#search");
  searchInput.onkeyup = function (e) {
    let filter = e.target.value.toLowerCase();
    console.log(filter);
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      const match = cells.some((cell) =>
        cell.textContent.toLowerCase().includes(filter.trim())
      );

      if (match) {
        row.style.display = "";
        document.querySelector(".no-data-found").style.display = "none";
      } else {
        row.style.display = "none";
        document.querySelector(".no-data-found").style.display = "block";
      }
    });
  };

  // Show per page
  function showPerPage (){
    let currentShow = 10;
    
    const selectInput = document.querySelector('select')

    selectInput.onchange = (e) => {
      console.log(e.target.value)
    }
    const users = people.filter((user, index) => index < 9 ? user : people)
    userTable(people)
  }
  showPerPage()
});

