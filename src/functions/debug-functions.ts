import { viewer } from "components";

export function AddControls()
{
    const removeAllButton = document.getElementById("remove-all");
    removeAllButton.addEventListener("click", () => viewer.entities.removeAll());
}
