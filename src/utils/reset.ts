export default function reset() {
  const billInput = document.getElementById("bill") as HTMLInputElement | null;
  const personInput = document.getElementById(
    "person",
  ) as HTMLInputElement | null;
  const customInput = document.getElementById(
    "custom",
  ) as HTMLInputElement | null;

  if (billInput) billInput.value = "";
  if (personInput) personInput.value = "";
  if (customInput) customInput.value = "";
}
