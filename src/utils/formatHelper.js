const formatCurrency = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = String(date.getFullYear()).slice(-2);
  return `${month}-${day}-${year}`;
};

export const formatSalesData = (sales) => {
  const formattedSales = [];
  sales?.forEach((sale) => {
    const formattedSale = {};
    formattedSale["weekEnding"] = formatDate(sale["weekEnding"]); //"2017-01-01",
    formattedSale["retailSales"] = formatCurrency(sale["retailSales"]);
    formattedSale["wholesaleSales"] = formatCurrency(sale["wholesaleSales"]);
    formattedSale["unitsSold"] = sale["unitsSold"];
    formattedSale["retailerMargin"] = formatCurrency(sale["retailerMargin"]);
    formattedSales.push(formattedSale);
  });
  return formattedSales;
};
