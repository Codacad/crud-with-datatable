const people = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe1@example.com",
    phoneNumbers: ["+1234567890", "+0987654321"],
    city: "New York",
    state: "NY",
    country: "USA",
    zipcode: "10001",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith2@example.com",
    phoneNumbers: ["+2345678901", "+1098765432"],
    city: "Los Angeles",
    state: "CA",
    country: "USA",
    zipcode: "90001",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alicejohnson3@example.com",
    phoneNumbers: ["+3456789012", "+2109876543"],
    city: "Chicago",
    state: "IL",
    country: "USA",
    zipcode: "60601",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bobbrown4@example.com",
    phoneNumbers: ["+4567890123", "+3210987654"],
    city: "Houston",
    state: "TX",
    country: "USA",
    zipcode: "77001",
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "evedavis5@example.com",
    phoneNumbers: ["+5678901234", "+4321098765"],
    city: "Phoenix",
    state: "AZ",
    country: "USA",
    zipcode: "85001",
  },
  {
    id: 6,
    name: "Michael Taylor",
    email: "michaeltaylor6@example.com",
    phoneNumbers: ["+6789012345", "+5432109876"],
    city: "Philadelphia",
    state: "PA",
    country: "USA",
    zipcode: "19101",
  },
  {
    id: 7,
    name: "Jessica Wilson",
    email: "jessicawilson7@example.com",
    phoneNumbers: ["+7890123456", "+6543210987"],
    city: "San Antonio",
    state: "TX",
    country: "USA",
    zipcode: "78201",
  },
  {
    id: 8,
    name: "David Martinez",
    email: "davidmartinez8@example.com",
    phoneNumbers: ["+8901234567", "+7654321098"],
    city: "San Diego",
    state: "CA",
    country: "USA",
    zipcode: "92101",
  },
  {
    id: 9,
    name: "Sarah Garcia",
    email: "sarahgarcia9@example.com",
    phoneNumbers: ["+9012345678", "+8765432109"],
    city: "Dallas",
    state: "TX",
    country: "USA",
    zipcode: "75201",
  },
  {
    id: 10,
    name: "Chris Hernandez",
    email: "chrishernandez10@example.com",
    phoneNumbers: ["+0123456789", "+9876543210"],
    city: "San Jose",
    state: "CA",
    country: "USA",
    zipcode: "95101",
  },
  {
    id: 11,
    name: "James Anderson",
    email: "jamesanderson11@example.com",
    phoneNumbers: ["+1234567890", "+0987654321"],
    city: "Austin",
    state: "TX",
    country: "USA",
    zipcode: "73301",
  },
  {
    id: 12,
    name: "Patricia Thompson",
    email: "patriciathompson12@example.com",
    phoneNumbers: ["+2345678901", "+1098765432"],
    city: "Jacksonville",
    state: "FL",
    country: "USA",
    zipcode: "32099",
  },
  {
    id: 13,
    name: "Robert Lee",
    email: "robertlee13@example.com",
    phoneNumbers: ["+3456789012", "+2109876543"],
    city: "Fort Worth",
    state: "TX",
    country: "USA",
    zipcode: "76101",
  },
  {
    id: 14,
    name: "Linda White",
    email: "lindawhite14@example.com",
    phoneNumbers: ["+4567890123", "+3210987654"],
    city: "Columbus",
    state: "OH",
    country: "USA",
    zipcode: "43085",
  },
  {
    id: 15,
    name: "Kevin Clark",
    email: "kevinclark15@example.com",
    phoneNumbers: ["+5678901234", "+4321098765"],
    city: "San Francisco",
    state: "CA",
    country: "USA",
    zipcode: "94101",
  },
  {
    id: 16,
    name: "Susan Lewis",
    email: "susanlewis16@example.com",
    phoneNumbers: ["+6789012345", "+5432109876"],
    city: "Charlotte",
    state: "NC",
    country: "USA",
    zipcode: "28201",
  },
  {
    id: 17,
    name: "Steven Walker",
    email: "stevenwalker17@example.com",
    phoneNumbers: ["+7890123456", "+6543210987"],
    city: "Indianapolis",
    state: "IN",
    country: "USA",
    zipcode: "46201",
  },
  {
    id: 18,
    name: "Emily Hall",
    email: "emilyhall18@example.com",
    phoneNumbers: ["+8901234567", "+7654321098"],
    city: "Seattle",
    state: "WA",
    country: "USA",
    zipcode: "98101",
  },
  {
    id: 19,
    name: "Daniel Allen",
    email: "danielallen19@example.com",
    phoneNumbers: ["+9012345678", "+8765432109"],
    city: "Denver",
    state: "CO",
    country: "USA",
    zipcode: "80201",
  },
  {
    id: 20,
    name: "Laura Young",
    email: "laurayoung20@example.com",
    phoneNumbers: ["+0123456789", "+9876543210"],
    city: "Washington",
    state: "DC",
    country: "USA",
    zipcode: "20001",
  },
  {
    id: 21,
    name: "Matthew King",
    email: "matthewking21@example.com",
    phoneNumbers: ["+1234567890", "+0987654321"],
    city: "Boston",
    state: "MA",
    country: "USA",
    zipcode: "02101",
  },
  {
    id: 22,
    name: "Amy Wright",
    email: "amywright22@example.com",
    phoneNumbers: ["+2345678901", "+1098765432"],
    city: "El Paso",
    state: "TX",
    country: "USA",
    zipcode: "79901",
  },
  {
    id: 23,
    name: "Anthony Scott",
    email: "anthonyscott23@example.com",
    phoneNumbers: ["+3456789012", "+2109876543"],
    city: "Nashville",
    state: "TN",
    country: "USA",
    zipcode: "37201",
  },
  {
    id: 24,
    name: "Barbara Harris",
    email: "barbaraharris24@example.com",
    phoneNumbers: ["+4567890123", "+3210987654"],
    city: "Oklahoma City",
    state: "OK",
    country: "USA",
    zipcode: "73101",
  },
  {
    id: 25,
    name: "Mark Adams",
    email: "markadams25@example.com",
    phoneNumbers: ["+5678901234", "+4321098765"],
    city: "Las Vegas",
    state: "NV",
    country: "USA",
    zipcode: "89101",
  },
  {
    id: 26,
    name: "Elizabeth Baker",
    email: "elizabethbaker26@example.com",
    phoneNumbers: ["+6789012345", "+5432109876"],
    city: "Baltimore",
    state: "MD",
    country: "USA",
    zipcode: "21201",
  },
  {
    id: 27,
    name: "Brian Gonzalez",
    email: "briangonzalez27@example.com",
    phoneNumbers: ["+7890123456", "+6543210987"],
    city: "Louisville",
    state: "KY",
    country: "USA",
    zipcode: "40201",
  },
  {
    id: 28,
    name: "Jennifer Nelson",
    email: "jennifernelson28@example.com",
    phoneNumbers: ["+8901234567", "+7654321098"],
    city: "Milwaukee",
    state: "WI",
    country: "USA",
    zipcode: "53201",
  },
  {
    id: 29,
    name: "Andrew Carter",
    email: "andrewcarter29@example.com",
    phoneNumbers: ["+9012345678", "+8765432109"],
    city: "Albuquerque",
    state: "NM",
    country: "USA",
    zipcode: "87101",
  },
  {
    id: 30,
    name: "Kimberly Mitchell",
    email: "kimberlymitchell30@example.com",
    phoneNumbers: ["+0123456789", "+9876543210"],
    city: "Tucson",
    state: "AZ",
    country: "USA",
    zipcode: "85701",
  },
  {
    id: 31,
    name: "Joshua Perez",
    email: "joshuaperez31@example.com",
    phoneNumbers: ["+1234567890", "+0987654321"],
    city: "Fresno",
    state: "CA",
    country: "USA",
    zipcode: "93701",
  },
  {
    id: 32,
    name: "Carol Roberts",
    email: "carolroberts32@example.com",
    phoneNumbers: ["+2345678901", "+1098765432"],
    city: "Sacramento",
    state: "CA",
    country: "USA",
    zipcode: "94203",
  },
  {
    id: 33,
    name: "Charles Turner",
    email: "charlesturner33@example.com",
    phoneNumbers: ["+3456789012", "+2109876543"],
    city: "Kansas City",
    state: "MO",
    country: "USA",
    zipcode: "64101",
  },
  {
    id: 34,
    name: "Ashley Phillips",
    email: "ashleyphillips34@example.com",
    phoneNumbers: ["+4567890123", "+3210987654"],
    city: "Long Beach",
    state: "CA",
    country: "USA",
    zipcode: "90801",
  },
  {
    id: 35,
    name: "Edward Campbell",
    email: "edwardcampbell35@example.com",
    phoneNumbers: ["+5678901234", "+4321098765"],
    city: "Mesa",
    state: "AZ",
    country: "USA",
    zipcode: "85201",
  },
  {
    id: 36,
    name: "Nancy Evans",
    email: "nancyevans36@example.com",
    phoneNumbers: ["+6789012345", "+5432109876"],
    city: "Atlanta",
    state: "GA",
    country: "USA",
    zipcode: "30301",
  },
  {
    id: 37,
    name: "Paul Parker",
    email: "paulparker37@example.com",
    phoneNumbers: ["+7890123456", "+6543210987"],
    city: "Omaha",
    state: "NE",
    country: "USA",
    zipcode: "68101",
  },
  {
    id: 38,
    name: "Sandra Edwards",
    email: "sandraedwards38@example.com",
    phoneNumbers: ["+8901234567", "+7654321098"],
    city: "Colorado Springs",
    state: "CO",
    country: "USA",
    zipcode: "80901",
  },
  {
    id: 39,
    name: "George Collins",
    email: "georgecollins39@example.com",
    phoneNumbers: ["+9012345678", "+8765432109"],
    city: "Raleigh",
    state: "NC",
    country: "USA",
    zipcode: "27601",
  },
  {
    id: 40,
    name: "Michelle Stewart",
    email: "michellestewart40@example.com",
    phoneNumbers: ["+0123456789", "+9876543210"],
    city: "Miami",
    state: "FL",
    country: "USA",
    zipcode: "33101",
  },
  {
    id: 41,
    name: "Larry Sanchez",
    email: "larrysanchez41@example.com",
    phoneNumbers: ["+1234567890", "+0987654321"],
    city: "Oakland",
    state: "CA",
    country: "USA",
    zipcode: "94601",
  },
  {
    id: 42,
    name: "Deborah Morris",
    email: "deborahmorris42@example.com",
    phoneNumbers: ["+2345678901", "+1098765432"],
    city: "Minneapolis",
    state: "MN",
    country: "USA",
    zipcode: "55401",
  },
  {
    id: 43,
    name: "Ronald Rogers",
    email: "ronaldrogers43@example.com",
    phoneNumbers: ["+3456789012", "+2109876543"],
    city: "Tulsa",
    state: "OK",
    country: "USA",
    zipcode: "74101",
  },
  {
    id: 44,
    name: "Rebecca Reed",
    email: "rebeccareed44@example.com",
    phoneNumbers: ["+4567890123", "+3210987654"],
    city: "Arlington",
    state: "TX",
    country: "USA",
    zipcode: "76001",
  },
  {
    id: 45,
    name: "Joseph Cook",
    email: "josephcook45@example.com",
    phoneNumbers: ["+5678901234", "+4321098765"],
    city: "New Orleans",
    state: "LA",
    country: "USA",
    zipcode: "70112",
  },
  {
    id: 46,
    name: "Helen Morgan",
    email: "helenmorgan46@example.com",
    phoneNumbers: ["+6789012345", "+5432109876"],
    city: "Wichita",
    state: "KS",
    country: "USA",
    zipcode: "67201",
  },
  {
    id: 47,
    name: "Jason Bell",
    email: "jasonbell47@example.com",
    phoneNumbers: ["+7890123456", "+6543210987"],
    city: "Cleveland",
    state: "OH",
    country: "USA",
    zipcode: "44101",
  },
  {
    id: 48,
    name: "Laura Cooper",
    email: "lauracooper48@example.com",
    phoneNumbers: ["+8901234567", "+7654321098"],
    city: "Tampa",
    state: "FL",
    country: "USA",
    zipcode: "33601",
  },
  {
    id: 49,
    name: "Frank Howard",
    email: "frankhoward49@example.com",
    phoneNumbers: ["+9012345678", "+8765432109"],
    city: "Bakersfield",
    state: "CA",
    country: "USA",
    zipcode: "93301",
  },
  {
    id: 50,
    name: "Sharon Ward",
    email: "sharonward50@example.com",
    phoneNumbers: ["+0123456789", "+9876543210"],
    city: "Aurora",
    state: "CO",
    country: "USA",
    zipcode: "80010",
  },
];

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

  // Initialize Vanilla DataTables
  const dataTable = new DataTable("#myTable", { responsive: true });

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
      createdAt: data?.data.find((user) =>
        user.id === editId ? user.createdAt : false
      ),
      updatedAt: Date.now(),
    };
    e.preventDefault();
    const editResponse = await fetch(`https://reqres.in/api/users/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editingUser),
    });

    const editedUser = await editResponse.json();

    if (editResponse.ok) {
      console.log("User Edited");
      console.log(editedUser);
    } else {
      console.log("Error");
    }
  };

  document.querySelector(".user-form").addEventListener("submit", createUser);
  document.querySelector(".edit-form").addEventListener("submit", editUser);
});
