const baseURL = "https://your-glitch-project.glitch.me/users"; // Replace with your Glitch URL

// 1. Fetch and console all users
document.getElementById("fetchUsers").addEventListener("click", async () => {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
});

// 2. Update user of id 1
document.getElementById("updateUser").addEventListener("click", async () => {
  try {
    const response = await fetch(`${baseURL}/1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "Alice" }),
    });

    if (response.ok) {
      console.log("User updated successfully");
    } else {
      console.error("Error updating user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});

// 3. Delete user of id 1
document.getElementById("deleteUser").addEventListener("click", async () => {
  try {
    const response = await fetch(`${baseURL}/1`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log("User deleted successfully");
    } else {
      console.error("Error deleting user");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
