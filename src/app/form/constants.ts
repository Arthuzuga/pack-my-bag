import { IOption } from "./form.types";

export const basicOptions: Array<IOption> = [
  {
    category: "basic",
    weight: 42,
    name: "passaporte",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 100,
    name: "carteira",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 200,
    name: "telefone",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 50,
    name: "fones de ouvido - earphone",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 250,
    name: "fones de ouvido - headphone",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 280,
    name: "power bank",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 2250,
    name: "notebook/laptop",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 500,
    name: "câmera fotográfica",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 75,
    name: "carregador celular",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 450,
    name: "carregador notebook/laptop",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 75,
    name: "carregador câmera fotográfica",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 600,
    name: "tablet/iPad",
    quantity: 1,
  },
  {
    category: "basic",
    weight: 400,
    name: "Ebook",
    quantity: 1,
  },
];
export const clothOptions: Array<IOption> = [
  {
    category: "cloth",
    weight: 250,
    name: "camisa",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 1000,
    name: "calça",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 400,
    name: "short",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 400,
    name: "saia",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 600,
    name: "vestido",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 100,
    name: "meias",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 300,
    name: "roupa íntima",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 200,
    name: "sutiã",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 350,
    name: "camisa social",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 800,
    name: "calça social",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 800,
    name: "vestido social",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 1000,
    name: "casaco/jaqueta",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 300,
    name: "sunga",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 500,
    name: "biquini",
    quantity: 1,
  },
  {
    category: "cloth",
    weight: 600,
    name: "pijamas",
    quantity: 1,
  },
];
export const accessoriesOptions: Array<IOption> = [
  {
    category: "accessories",
    weight: 600,
    name: "tênis",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 800,
    name: "sapato",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 1500,
    name: "bota",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 400,
    name: "sandálias",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 200,
    name: "boné",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 100,
    name: "óculos de sol",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 200,
    name: "bolsa de ombro",
    quantity: 1,
  },
  {
    category: "accessories",
    weight: 300,
    name: "relógio",
    quantity: 1,
  },
];
export const hygienicOptions: Array<IOption> = [
  {
    category: "hygienic",
    weight: 100,
    name: "escova e pasta de dente",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 90,
    name: "desodorante",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 300,
    name: "shampoo",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 300,
    name: "shower gel",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 800,
    name: "maquiagem",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 300,
    name: "lentes de contato",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 300,
    name: "barbeador",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 60,
    name: "álcool em gel",
    quantity: 1,
  },
  {
    category: "hygienic",
    weight: 100,
    name: "pacote de curativos",
    quantity: 1,
  },
];

export const stepToLabel = {
  days: "dias",
  basic: "itens básicos",
  accessories: "acessórios",
  cloth: "roupas",
  hygienic: "higiene",
};

export const stepToOption = {
  days: [],
  basic: basicOptions,
  accessories: accessoriesOptions,
  cloth: clothOptions,
  hygienic: hygienicOptions,
};
