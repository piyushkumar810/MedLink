
function openEditModal() {
  document.getElementById("editModal").classList.remove("hidden");
  // Pre-fill current allergies (mock)
  document.getElementById("editAllergies").value = "Penicillin, Peanuts";
}

function closeEditModal() {
  document.getElementById("editModal").classList.add("hidden");
}

async function saveChanges() {
  const newAllergies = document.getElementById("editAllergies").value;
  const newDiagnosis = document.getElementById("editHistory").value;

  // Call your Flask API here
  console.log("Saving to Firebase...", { newAllergies, newDiagnosis });

  // Update the Alert Bar on success
  document.getElementById("allergyAlert").classList.remove("hidden");
  document.getElementById("allergyList").innerText = newAllergies;

  closeEditModal();
}