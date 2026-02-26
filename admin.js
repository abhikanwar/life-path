const form = document.getElementById("memory-form");
const statusEl = document.getElementById("form-status");

function setStatus(message, type = "info") {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.dataset.state = type;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Could not read file."));
    reader.readAsDataURL(file);
  });
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = form.querySelector("button[type='submit']");
    const formData = new FormData(form);

    const passcode = String(formData.get("passcode") || "").trim();
    const title = String(formData.get("title") || "").trim();
    const mainLine = String(formData.get("mainLine") || "").trim();
    const hidden = String(formData.get("hidden") || "").trim();
    const memory = String(formData.get("memory") || "").trim();
    const media = formData.get("media");

    if (!passcode || !title || !mainLine || !hidden || !(media instanceof File) || !media.size) {
      setStatus("Please fill all required fields and attach a file.", "error");
      return;
    }

    if (media.size > 8 * 1024 * 1024) {
      setStatus("File too large. Keep it under 8 MB.", "error");
      return;
    }

    try {
      submitBtn.disabled = true;
      setStatus("Uploading...", "info");

      const imageDataUrl = await fileToDataUrl(media);
      const res = await fetch("/api/chapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-passcode": passcode,
        },
        body: JSON.stringify({
          title,
          mainLine,
          hidden,
          memory,
          imageDataUrl,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Upload failed");
      }

      form.reset();
      setStatus("Saved. Refresh home to see the new memory.", "success");
    } catch (err) {
      setStatus(err.message || "Could not save memory.", "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}
