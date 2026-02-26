import { upload } from "https://esm.sh/@vercel/blob/client";

const form = document.getElementById("memory-form");
const statusEl = document.getElementById("form-status");

function setStatus(message, type = "info") {
  if (!statusEl) return;
  statusEl.textContent = message;
  statusEl.dataset.state = type;
}

async function parseJsonSafely(response) {
  const raw = await response.text();
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function getMediaKind(file) {
  return file.type.startsWith("video/") ? "video" : "image";
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

    if (media.size > 100 * 1024 * 1024) {
      setStatus("File too large. Keep it under 100 MB.", "error");
      return;
    }

    try {
      submitBtn.disabled = true;
      setStatus("Uploading media...", "info");

      const blob = await upload(media.name, media, {
        access: "public",
        handleUploadUrl: "/api/upload",
        clientPayload: JSON.stringify({
          passcode,
          mediaKind: getMediaKind(media),
        }),
      });

      setStatus("Saving memory...", "info");
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
          mediaUrl: blob.url,
          mediaMimeType: blob.contentType || media.type || "",
        }),
      });

      const data = await parseJsonSafely(res);
      if (!res.ok) {
        if (res.status === 401) {
          throw new Error("Invalid admin passcode.");
        }
        if (res.status === 500) {
          throw new Error("Server error. Check ADMIN_PASSCODE and BLOB_READ_WRITE_TOKEN on Vercel.");
        }
        throw new Error((data && data.error) || `Save failed (HTTP ${res.status}).`);
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
