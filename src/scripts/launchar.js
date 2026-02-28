const key = import.meta.env.VITE_VARIANT_LAUNCH_KEY;

export function loadLauncharSDK() {
  if (!key) {
    console.warn("Launchar key missing");
    return;
  }

  const script = document.createElement("script");
  script.src = `https://launchar.app/sdk/v1?key=${key}&redirect=true`;
  script.async = true;

  document.head.appendChild(script);
}
