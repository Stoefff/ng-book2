class Product{
  sku: string;
  name: string;
  imageUrl: string;
  departament: string[];
  price:number;

  constructor(sku: string,
    name: string,
    imageUrl: string,
    departament: string[],
    price: number){
      this.sku = sku;
      this.name = name;
      this.imageUrl = imageUrl;
      this.departament = departament;
      this.price = price;
    }
}
