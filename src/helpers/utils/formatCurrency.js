//folder helpers/utils digunakan untuk nyimpen fungsi2 yang reusable
export default function formatCurrency(
  value,
  locale = "id-ID",
  currency = "IDR"
) {
  return value.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}
