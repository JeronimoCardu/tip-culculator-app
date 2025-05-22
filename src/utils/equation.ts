export default function equation(bill: number, people: number, tip: number) {
  if (bill == 0 || undefined || people == 0 || undefined)
    return {
      total: 0,
      amount: 0,
    };
  let auxTip = tip;
  auxTip = auxTip < 10 ? Number(`0.0${auxTip}`) : Number(`0.${auxTip}`);
  let total = (bill * (1 + auxTip)) / people;
  let amount = total - bill / people;
  total = Math.trunc(total * 100) / 100;
  amount = Math.trunc(amount * 100) / 100;
  return {
    total: total,
    amount: amount,
  };
}
