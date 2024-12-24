import moment from "moment";

const amountNumberFormat = new Intl.NumberFormat("en-GB", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
  useGrouping: true,
});

export const formatter = {
  toAmount: (value?: number) => {
    if (value === null || value === undefined) return value;
    return amountNumberFormat.format(value);
  },
  toRoundedAmount: (value?: number, decimals: number = 0) => {
    const fmt = new Intl.NumberFormat("en-GB", {
      maximumFractionDigits: decimals,
      minimumFractionDigits: decimals,
      useGrouping: true,
    });
    if (value === null || value === undefined) return value;
    return fmt.format(value);
  },
  toIsDateOnly: (value: Date | string) => {
    return moment(value).format("YYYY-MM-DD");
  },
  toDisplayDate: (value: Date | string) => {
    return moment(value).format("DD.MM.YYYY");
  },
};
