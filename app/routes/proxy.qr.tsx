import qrcode from "qrcode";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const productId = url.searchParams.get("id");

  console.log(productId);

  const data = `https://128t-test-store.myshopify.com/products/${productId}`;

  const qrSvg = await qrcode.toString(data, { type: "svg" });

  return new Response(qrSvg, {
    headers: { "Content-Type": "image/svg+xml" },
  });
};
