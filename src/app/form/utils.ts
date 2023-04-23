import { IOption, IAccumulator } from "./form.types";

export const calculateClothes = (clothes: Array<IOption>, days: number) => {
  const weekCondition = days >= 7;
  const weekCloth = weekCondition ? Math.round(days / 7) + 1 : 1;
  const twoDaysCloth = Math.round(days / 2) + 1;
  return clothes.map((item) => {
    if (item.name === "camisa")
      return {
        ...item,
        weight: item.weight * days + 1,
        quantity: days + 1,
      };
    if (item.name === "calça") {
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    }
    if (item.name === "short")
      return {
        ...item,
        weight: item.weight * twoDaysCloth,
        quantity: twoDaysCloth,
      };
    if (item.name === "saia")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "vestido")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "meias")
      return {
        ...item,
        weight: item.weight * twoDaysCloth,
        quantity: twoDaysCloth,
      };
    if (item.name === "roupa íntima")
      return {
        ...item,
        weight: item.weight * days + 1,
        quantity: days + 1,
      };
    if (item.name === "sutiã")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "camisa social")
      return {
        ...item,
        weight: item.weight * days + 1,
        quantity: days + 1,
      };
    if (item.name === "calça social")
      return {
        ...item,
        weight: item.weight * twoDaysCloth,
        quantity: twoDaysCloth,
      };
    if (item.name === "vestido social")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "casaco/jaqueta")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "sunga")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    if (item.name === "biquini")
      return {
        ...item,
        weight: item.weight * weekCloth,
        quantity: weekCloth,
      };
    return {
      ...item,
      weight: item.weight * weekCloth,
      quantity: weekCloth,
    };
  });
};

export const separateItemsByCategory = (acc: IAccumulator, cur: IOption) => {
  if (cur.category === "basic") {
    acc.basicItems.push(cur);
    return acc;
  }
  if (cur.category === "cloth") {
    acc.clothItems.push(cur);
    return acc;
  }
  if (cur.category === "accessories") {
    acc.accessoriesItems.push(cur);
    return acc;
  }
  acc.hygienicItems.push(cur);
  return acc;
};

export const calculateLuggage = (list: Array<IOption>, days: number) => {
  const data = list.reduce(separateItemsByCategory, {
    basicItems: [],
    clothItems: [],
    accessoriesItems: [],
    hygienicItems: [],
  });
  data.clothItems = calculateClothes(data.clothItems, days);
  const total = Object.values(data)
    .flatMap((value) => value)
    .reduce((acc, cur) => acc + cur.weight, 0);
  return { ...data, total };
};
