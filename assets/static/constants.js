export const INCOME_SCREEN_TYPE = "incomes";
export const INCOME_SCREEN_NAME = "Incomes";
export const EXPENSES_SCREEN_TYPE = "expenses";
export const EXPENSES_SCREEN_NAME = "Expenses";
export const SAVINGS_SCREEN_TYPE = "savings";
export const SAVINGS_SCREEN_NAME = "Savings";

export const EXPENSES_OPTIONS = [
  { label: "Housing", value: "housing" },
  { label: "Transportation", value: "transportation" },
  { label: "Food", value: "food" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Utilities", value: "utilities" },
  { label: "Debt Repayment", value: "debt repayment" },
  { label: "Personal Care", value: "personal care" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Education", value: "education" },
  { label: "Clothing", value: "clothing" },
  { label: "Charitable Donations", value: "charitable donations" },
  { label: "Insurance", value: "insurance" },
  { label: "Childcare", value: "childcare" },
  { label: "Emergency Fund", value: "emergency fund" },
  { label: "Taxes", value: "taxes" },
  { label: "Other", value: "other" },
];

//This is savings & Investments
export const SAVINGS_OPTIONS = [
  { label: "Emergency Fund", value: "emergency fund" },
  { label: "Retirement Accounts", value: "retirement accounts" },
  { label: "Brokerage Accounts", value: "brokerage accounts" },
  { label: "Savings Goals", value: "savings goals" },
  { label: "College Savings", value: "college savings" },
  { label: "Real Estate Investments", value: "real estate investments" },
  { label: "Business Investments", value: "business investments" },
  { label: "Precious Metals", value: "precious metals" },
  { label: "Cryptocurrencies", value: "cryptocurrencies" },
  { label: "Mutual Funds", value: "mutual funds" },
  { label: "Other", value: "other" },
];

export const INCOME_OPTIONS = [
  { label: "Salary/Wages", value: "salary wages" },
  { label: "Business Income", value: "business income" },
  { label: "Rental Income", value: "rental income" },
  { label: "Investment Income", value: "investment income" },
  { label: "Interest Income", value: "interest income" },
  { label: "Dividend Income", value: "dividend income" },
  { label: "Royalties", value: "royalties" },
  { label: "Side Hustle Income", value: "side hustle income" },
  { label: "Government Benefits", value: "government benefits" },
  { label: "Gifts and Inheritance", value: "gifts inheritance" },
  { label: "Other", value: "other" },
];

//You can change the images if you find better ones.
export const NAVIGATION_ITEMS_DATA = [
  {
    id: "1",
    imageSrc: require("../../assets/income-img.jpg"),
    title: "Income",
    description:
      "Easily track your earnings and income sources with our app, empowering you to gain insights into your financial stability and growth.",
    destination: "income-screen",
  },
  {
    id: "2",
    imageSrc: require("../../assets/expenses-img.jpg"),
    title: "Expenses",
    description:
      " Manage your spending effortlessly by recording and categorizing your expenses, helping you visualize and control your financial outflows.",
    destination: "expenses-screen",
  },
  {
    id: "3",
    imageSrc: require("../../assets/savings-img.jpg"),
    title: "Savings/Investments",
    description:
      "Secure your financial future by monitoring your savings and investments, ensuring you stay on track to meet your financial goals.",
    destination: "savings-screen",
  },
  {
    id: "4",
    imageSrc: require("../../assets/graphs-img.jpg"),
    title: "Graph",
    description:
      "Visualize your financial data beautifully with interactive graphs, making it simple to understand and analyze your financial trends over time.",
    destination: "graph-screen",
  },

  {
    id: "5",
    imageSrc: require("../../assets/calendar-img.jpg"),
    title: "Calendar",
    description:
      "Stay organized and plan your financial activities effectively using our intuitive calendar view, allowing you to schedule income, expenses, and savings/investment goals with ease.",
    destination: "calendar-screen",
  },
];
