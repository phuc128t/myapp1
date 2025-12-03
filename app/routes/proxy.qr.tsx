import qrcode from "qrcode";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const handle = url.searchParams.get("handle");

  const data = `https://128t-test-store.myshopify.com/products/${handle}`;

  const qrSvg = await qrcode.toString(data, { type: "svg" });

  return new Response(qrSvg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
