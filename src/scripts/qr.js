import QRCode from "qrcode";

async function generateQRCode(text) {
  //apply to #qr-code
  document.getElementById("qr-code").src = await QRCode.toDataURL(text, {
    margin: 2,
    color: {
      dark: "#fe007d",
      light: "#FFFFFF",
    },
  });
}

async function generateLaunchCode() {
  try {
    const url = await window.VLaunch.getLaunchUrl(window.location.href);
    await generateQRCode(url);
    console.log("Launch Code Generated");
  } catch (err) {
    console.warn("VLaunch failed, falling back to normal QR", err);
    generateQRCode(window.location.href);
  }
}

export function initQR() {
  // If SDK already initialized
  if (window.VLaunch && window.VLaunch.initialized) {
    generateLaunchCode();
    return;
  }

  // Wait for SDK event
  window.addEventListener("vlaunch-initialized", () => {
    generateLaunchCode();
  });

  // Fallback QR while waiting
  generateQRCode(window.location.href);
}
