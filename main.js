document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#myTable tbody");
  let editId;
  const response = await fetch("https://reqres.in/api/users?page=2");
  const data = await response.json();
  console.log(data.data);
  data?.data.forEach(
    (user) =>
      (tableBody.innerHTML += `<tr>
      <td class="">${user.id}</td>
      <td><img style="width:30px; border-radius:50%; height:30px; object-fit:cover; object-position:center;" src=${user.avatar} alt="Avatar"/></td>
      <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.email}</td>
      <td>
        <div class="actions">
        <button onClick="showModel(${user.id})" class="edit-btn"><i class="fas fa-edit text-primary"></i></button>
        <button onclick="deleteUser(${user.id})" class="delete"><i class="fas fa-trash text-danger"></i></button>
        </div>
      </td>
      </tr>`)
  );



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

  // Show Model Function
  window.showModel = function (id) {
    editId = id;
    let user = data?.data.find((user) => user.id === id);
    document.querySelector("#edit-firstname").value = user.first_name;
    document.querySelector("#edit-lastname").value = user.last_name;
    document.querySelector("#edit-email").value = user.email;
    document.querySelector("div.edit").classList.add("edit-show");
  };

  // Create User
  const createUser = async (e) => {
    e.preventDefault();
    let maxIdNumber = 12;
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;

    const user = {
      id: maxIdNumber + 1,
      first_name: firstname,
      last_name: lastname,
      email: email,
      createdAt: Date.now(),
    };

    const createUserResponse = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const createUserData = await createUserResponse.json();

    let userExist = data?.data.find((user) => user.email === email);

    console.log(userExist);

    if (!userExist) {
      console.log("User already exist");
      return false;
    }

    maxIdNumber++;
    console.log(createUserData);
    document.querySelector("#firstname").value = "";
    document.querySelector("#lastname").value = "";
    document.querySelector("#email").value = "";

    document.querySelector("div.create").classList.remove("show-create");
  };

  window.deleteUser = async (id) => {
    const deleteResponse = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
    });

    if (deleteResponse.ok) {
      console.log("User Deleted");
    } else {
      console.log("Error");
    }
  };

  // Edit User
  const editUser = async (e) => {
    e.preventDefault();
    let editingUser = {
      id: editId,
      first_name: document.querySelector("#edit-firstname").value,
      last_name: document.querySelector("#edit-lastname").value,
      email: document.querySelector("#edit-email").value,
      updatedAt: new Date().toISOString(),
    };

    try {
      const editResponse = await fetch(
        `https://reqres.in/api/users/${editId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editingUser),
        }
      );

      const editedUser = await editResponse.json();

      if (editResponse.ok) {
        console.log("User Edited");
        console.log(editedUser);
        document.querySelector("div.edit").classList.remove("edit-show");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  window.deleteUser = async (id) => {
    try {
      let deleteResponse = await fetch(`https://reqres.in/api/users/${id}`);
      const deleteData = await deleteResponse.json();
      if (deleteResponse.ok) {
        console.log("User Deleted");
        console.log(deleteData);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  document.querySelector(".user-form").addEventListener("submit", createUser);
  document.querySelector(".edit-form").addEventListener("submit", editUser);

  
  // Initialize Vanilla DataTables
  const dataTable = new DataTable("#myTable", { responsive: true });
});
