import { container } from "components";

export function AddControls()
{
    const removeAllButton = document.getElementById("remove-all");
    removeAllButton.addEventListener("click", () => container.Viewer.entities.removeAll());
}
